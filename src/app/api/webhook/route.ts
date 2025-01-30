import { Metadata } from "../../../../actions/createCheckoutSession";
import stripe from "@/lib/stripe";
import { backendClient } from "@/sanity/lib/backendClient";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const headersList = await headers();
  const sig = headersList.get("stripe-signature");

  if (!sig) {
    return NextResponse.json(
      {
        error: "No Signature",
      },
      { status: 400 }
    );
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_KEY;

  if (!webhookSecret) {
    console.log("Stripe webhook secret is not set");
    return NextResponse.json(
      {
        error: "Stripe webhook secret is not set",
      },
      { status: 400 }
    );
  }
  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (error) {
    console.error("Webhook signature verification failed:", error);
    return NextResponse.json(
      {
        error: `Webhook Error: ${error}`,
      },
      { status: 400 }
    );
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const invoice = session.invoice
      ? await stripe.invoices.retrieve(session.invoice as string)
      : null;

    try {
      await createOrderInsanity(session, invoice);
    } catch (error) {
      console.error("Error creating order in sanity:", error);
      return NextResponse.json(
        {
          error: `Error creating order: ${error}`,
        },
        { status: 400 }
      );
    }
  }
  return NextResponse.json({ received: true });
}
async function createOrderInsanity(
  session: Stripe.Checkout.Session,
  invoice: Stripe.Invoice | null
) {
  const {
    id,
    amount_total,
    currency,
    metadata,
    payment_intent,
    total_details,
  } = session;

  const { orderNumber, customerName, customerEmail } =
    metadata as unknown as Metadata;

  // 🛒 Fetch line items with product metadata
  const lineItemsWithProduct = await stripe.checkout.sessions.listLineItems(
    id,
    { expand: ["data.price.product"] }
  );

  // 🛍️ Create sanity product references
  const sanityProducts = lineItemsWithProduct.data
    .map((item) => {
      const productId = (item.price?.product as Stripe.Product)?.metadata?.id;
      if (!productId) {
        console.warn("Missing product ID in metadata:", item);
        return null;
      }
      return {
        _key: crypto.randomUUID(),
        product: {
          _type: "reference",
          _ref: productId,
        },
        quantity: item?.quantity || 0,
      };
    })
    .filter(Boolean); // Remove null values

  // 🔍 Check if order exists
  const existingOrder = await backendClient.fetch(
    `*[_type == "order" && orderNumber == $orderNumber][0]`,
    { orderNumber }
  );

  if (existingOrder) {
    // ✅ Update existing order & append products
    const updatedOrder = await backendClient
      .patch(existingOrder._id)
      .set({
        stripeCheckoutSessionId: id,
        stripePaymentIntentId: payment_intent,
        stripeCustomerId: customerEmail,
        totalPrice: amount_total ? amount_total / 100 : 0,
        status: "paid",
        invoice: invoice
          ? {
              id: invoice.id,
              number: invoice.number,
              hosted_invoice_url: invoice.hosted_invoice_url,
            }
          : null,
      })
      .setIfMissing({ products: [] }) // Ensure products field exists
      .append("products", sanityProducts) // Append products instead of overwriting
      .commit();

    console.log("✅ Order updated in Sanity:", updatedOrder);
    return updatedOrder;
  } else {
    // 🆕 Create new order if it doesn’t exist
    const newOrder = await backendClient.create({
      _type: "order",
      orderNumber,
      stripeCheckoutSessionId: id,
      stripePaymentIntentId: payment_intent,
      customerName,
      stripeCustomerId: customerEmail,
      email: customerEmail,
      currency,
      amountDiscount: total_details?.amount_discount
        ? total_details?.amount_discount / 100
        : 0,
      products: sanityProducts,
      totalPrice: amount_total ? amount_total / 100 : 0,
      status: "paid",
      orderDate: new Date().toISOString(),
      invoice: invoice
        ? {
            id: invoice.id,
            number: invoice.number,
            hosted_invoice_url: invoice.hosted_invoice_url,
          }
        : null,
    });

    console.log("✅ New order created in Sanity:", newOrder);
    return newOrder;
  }
}



// async function createOrderInsanity(
//   session: Stripe.Checkout.Session,
//   invoice: Stripe.Invoice | null
// ) {
//   const {
//     id,
//     amount_total,
//     currency,
//     metadata,
//     payment_intent,
//     total_details,
//   } = session;
//   const { orderNumber, customerName, customerEmail } =
//     metadata as unknown as Metadata;

//   const lineItemsWithProduct = await stripe.checkout.sessions.listLineItems(
//     id,
//     { expand: ["data.price.product"] }
//   );

//   // Creating sanity product reference
//   const sanityProducts = lineItemsWithProduct.data.map((item) => ({
//     _key: crypto.randomUUID(),
//     product: {
//       _type: "reference",
//       _ref: (item.price?.product as Stripe.Product)?.metadata?.id,
//     },
//     quantity: item?.quantity || 0,
//   }));
//   const order = await backendClient.create({
//     _type: "order",
//     orderNumber,
//     stripeCheckoutSessionId: id,
//     stripePaymentIntentId: payment_intent,
//     customerName,
//     stripeCustomerId: customerEmail,
//     email: customerEmail,
//     currency,
//     amountDiscount: total_details?.amount_discount
//       ? total_details?.amount_discount / 100
//       : 0,
//     products: sanityProducts,
//     totalPrice: amount_total ? amount_total / 100 : 0,
//     status: "paid",
//     orderDate: new Date().toISOString(),
//     invoice: invoice
//       ? {
//           id: invoice.id,
//           number: invoice.number,
//           hosted_invoice_url: invoice.hosted_invoice_url,
//         }
//       : null,
//   });
//   return order;
// }

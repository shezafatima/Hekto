
"use client";

import {  useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import useCartStore from "../../../store";
import { client } from "@/sanity/lib/client";
import { createCheckoutSession, Metadata } from "../../../actions/createCheckoutSession";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";



const ShippingForm = () => {
  const [address, setAddress] = useState("");
  const [emailno, setEmailno] = useState("");
  const [firstname, setFirstname] = useState("");
  const [city, setCity] = useState("");
  const [postalcode, setPostalcode] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [error, setError] = useState("");
  const [, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"paynow" | "cod">("paynow");
  const {
    getGroupedItems,
   
    
  }= useCartStore();
  const { user } = useUser();
  const router = useRouter();
  const cartProducts = getGroupedItems();
  const cartTotal = cartProducts.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  
  const resetCart = useCartStore((state) => state.resetCart);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
  
    // Check if all fields are filled out
    if (!address || !firstname || !emailno || !city || !postalcode) {
      setError("Please provide complete information.");
      return;
    }
  
    // Check if the email is valid using a regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailno)) {
      setError("Please enter a valid email address.");
      return;
    }
  
    // If the email is valid, proceed with the order creation
    const orderNumber = crypto.randomUUID();
  
    const orderData = {
      _type: "order",
      orderNumber,
      stripeCheckoutSessionId: "", // Will be updated after payment
      stripeCustomerId: "", // Will be updated after payment
      customerName: firstname,
      email: user?.emailAddresses[0]?.emailAddress ?? "Unknown", 
      currency: "USD",
      totalPrice: cartTotal,
      amountDiscount: 0,
      products:cartProducts ,
      status: "pending",
      orderDate: new Date().toISOString(),
      shippingDetails: {
        address,
        city,
        postalcode,
        country: "Pakistan",
        phone: phoneno,
      },
    };
  
    try {
      // Store order in Sanity with total price
      const savedOrder = await client.create(orderData);
      console.log("Order stored in Sanity:", savedOrder);
      if (paymentMethod === "paynow") {
        await handleCheckout(orderNumber); // Redirect to Stripe
      } else {
        router.push(`/success`); // Redirect to order success page
      }

      resetCart();
    } catch (error) {
      console.error("Error submitting order:", error);
      setError("Failed to store order. Please try again.");
    }
  };

  const handleCheckout = async (orderNumber: string) => {
    setLoading(true);
    try {
      const metadata: Metadata = {
        orderNumber,
        customerName: user?.fullName ?? "Unknown",
        customerEmail: user?.emailAddresses[0]?.emailAddress ?? "Unknown",
        clerkUserId: user!.id,
      };
      const checkoutUrl = await createCheckoutSession(cartProducts, metadata);
      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
      setError("Failed to create checkout session.");
    } finally {
      setLoading(false);
    }
  };

  


  return (
    <div className="bg-gray-200 p-8 rounded-lg lg:mt-0 mt-12">
      <h1 className="text-[#1D3178] text-xl font-bold">Contact Information</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email */}
        <div className="mt-4">
          <input
            type="text"
            value={emailno}
            onChange={(e) => setEmailno(e.target.value)}
            required
            className="w-full p-2 border-none outline-none text-sm bg-gray-200 text-[#999eac]"
            placeholder="Email address"
          />
          <hr className="bg-black" />
        </div>
        <div className="mt-4">
          <input
            type="text"
            value={phoneno}
            onChange={(e) => setPhoneno(e.target.value)}
            required
            className="w-full p-2 border-none outline-none text-sm bg-gray-200 text-[#999eac]"
            placeholder="Phone number"
          />
          <hr className="bg-black" />
        </div>

        {/* Keep me updated */}
        <div className="flex gap-2">
          <Checkbox className="w-4" />
          <p className="text-[#999eac] text-sm">
            Keep me up to date on news and exclusive offers
          </p>
        </div>

        <h1 className="text-[#1D3178] text-xl font-bold">Shipping Address</h1>

        {/* Name fields */}
        <div className="flex justify-between gap-4">
          <input
            type="text"
            value={firstname}
            required
            onChange={(e) => setFirstname(e.target.value)}
            className="w-full p-2 border-none outline-none text-sm bg-gray-200 text-[#999eac]"
            placeholder="First name"
          />
          <input
            type="text"
            className="w-full p-2 border-none outline-none text-sm bg-gray-200 text-[#999eac]"
            placeholder="Last name (optional)"
          />
        </div>

        {/* Address */}
        <input
          type="text"
          value={address}
          required
          onChange={(e) => setAddress(e.target.value)}
          className="w-full p-2 border-none outline-none text-sm bg-gray-200 text-[#999eac]"
          placeholder="Address"
        />

        {/* Apartment/suite (optional) */}
        <input
          type="text"
          className="w-full p-2 border-none outline-none text-sm bg-gray-200 text-[#999eac]"
          placeholder="Apartment, suite, etc. (optional)"
        />

        {/* City */}
        <input
          type="text"
          value={city}
          required
          onChange={(e) => setCity(e.target.value)}
          className="w-full p-2 border-none outline-none text-sm bg-gray-200 text-[#999eac]"
          placeholder="City"
        />

        {/* Country and Postal Code */}
        <div className="flex justify-between gap-4">
          <input
            type="text"
            className="w-full p-2 border-none outline-none text-sm bg-gray-200 text-[#999eac]"
            placeholder="Country"
            defaultValue="Pakistan"
            disabled
          />
          <input
            type="text"
            value={postalcode}
            required
            onChange={(e) => setPostalcode(e.target.value)}
            className="w-full p-2 border-none outline-none text-sm bg-gray-200 text-[#999eac]"
            placeholder="Postal Code"
          />
        </div>
        <h2 className="text-[#1D3178] text-xl font-bold">Payment Method</h2>
        <div >
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="paymentMethod"
              value="paynow"
              className=" text-[#FB2E86] border-gray-300 focus:ring-[#FB2E86]"
              checked={paymentMethod === "paynow"}
              onChange={() => setPaymentMethod("paynow")}
            />
            Pay Now
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="paymentMethod"
               className=" text-[#FB2E86] border-gray-300 focus:ring-[#FB2E86]"
              value="cod"
              checked={paymentMethod === "cod"}
              onChange={() => setPaymentMethod("cod")}
            />
            Cash on Delivery
          </label>
        </div>
      
        <Button
          type="submit"


          className="py-2 rounded-sm px-4 mt-6 text-white bg-[#FB2E86] hover:bg-transparent hover:border hover:text-[#FB2E86] hover:border-[#FB2E86]"
        >
          Continue Shipping
        </Button>
      </form>

      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default ShippingForm;

import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();
  const { name,  review, productId } = data;

  if (!name || !review ) {
    return NextResponse.json(
      {
        message: "All fields are required",
      },
      { status: 400 }
    );
  }

  try {
    const newReview = await client.create({
      _type: "review",
      name,
      review,
      product: {
        _type: "reference",
        _ref: productId,
      },
    });
    return NextResponse.json(
      { message: "Review added successfully", review: newReview },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create a review", error },
      { status: 500 }
    );
  }
}

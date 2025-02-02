import { client } from "./client";

export async function uploadImage(file: File) {
  const asset = await client.assets.upload("image", file);
  return asset.url; // This returns the uploaded image URL
}

export async function addProduct(productData: {
  title: string;
  description: string;
  price: number;
  image: File; // Now handling image as File
  category: string;
}) {
  try {
    const imageUrl = await uploadImage(productData.image);
    const result = await client.create({
      _type: "product",
      ...productData,
      image: imageUrl, // Store the uploaded image URL
    });
    return result;
  } catch (error) {
    console.error("Error adding product:", error);
    throw new Error("Failed to add product.");
  }
}

import { groq } from "next-sanity";

export const allProducts= groq `*[_type == "product"]`;
export const featuredProducts = groq `*[_type == "product" && isFeaturedProduct == true]{
    _id,
    name,
    price,
    image,
    isFeatured
  }`;

export const latestProducts= groq `*[_type == "product"][0...6]`;
export const trendingProducts= groq `*[_type == "product"][6...10]`;
export const topCategories= groq `*[_type == "product"][10...14]`;

export const productReview=groq`*[_type == "review" && product._ref == $id] | order(_createdAt) {
  name,
  review,
  _createdAt,
}`
import { defineQuery } from "next-sanity";
import { sanityFetch } from "../lib/live";

export const getProductBySlug = async (slug: string) => {
  const PRODUCT_BY_SLUG_QUERY = defineQuery(
    `*[_type == 'product' && slug.current == $slug] | order(name asc) [0]`
  );
  try {
    const product = await sanityFetch({
      query: PRODUCT_BY_SLUG_QUERY,
      params: {
        slug,
      },
    });
    return product?.data || null;
  } catch (error) {
    console.error("Error fetching product by Slug:", error);
  }
};

export const getAllCategories = async () => {
  const CATEGORIES_QUERY = defineQuery(
    `*[_type=="category"] | order(name asc)`
  );
  try {
    const categories = await sanityFetch({
      query: CATEGORIES_QUERY,
    });
    return categories.data || [];
  } catch (error) {
    console.error("Error fetching all categories",error);

    return [];
  }
};

export const getMyOrders = async (email: string) => {
  if (!email) {
    throw new Error("Email is required");
  }

  const MY_ORDERS_QUERY = defineQuery(
    `*[_type == 'order' && email == $email] | order(orderDate desc){
      ...,products[] {
        ...,product->
      }
    }`
  );

  try {

    const orders = await sanityFetch({
      query: MY_ORDERS_QUERY,
      params: { email },
    });

    

    return orders?.data || [];
  } catch (error) {
    console.error("Error fetching orders:", error);
    return [];
  }
};


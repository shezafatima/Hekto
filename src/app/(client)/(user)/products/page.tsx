
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";

import { Product } from "../../../../../types/products";
import { allProducts } from "@/sanity/lib/queries";

import ProductGrid from "../../../components/ProductGrid";
import Container from "../../../components/Container";

export default async function Products() {
  let products: Product[] = [];
  let errorMessage = "";

  try {
    products = await client.fetch(allProducts);
  } catch (error) {
    console.error("Failed to fetch products:", error);
    errorMessage = "Failed to load products. Please try again later.";
  }

  return (
    <Container>
      <div>
        {/* Header Section */}
        <div className="bg-[#F6F5FF] h-[186px]  px-[50px]">
          <h1 className="text-[36px] text-[#101750] flex items-center pt-14 font-semibold">
            Shop Grid Default
          </h1>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <Link href="/" className="text-black text-[16px]">
              Home .{" "}
            </Link>
            <Link href="/" className="text-black text-[16px]">
              Pages .{" "}
            </Link>
            <Link href="/faq" className="text-[#FB2E86] text-[16px]">
              Shop Grid Default{" "}
            </Link>
          </div>
        </div>

        {/* Error Message */}
        {errorMessage && (
          <div className="text-center text-red-600 py-4 font-medium">
            {errorMessage}
          </div>
        )}

        {/* Product Grid */}
        {products.length > 0 && !errorMessage ? (
          <ProductGrid products={products} />
        ) : (
          !errorMessage && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-xl">No products found.</p>
            </div>
          )
        )}

        {/* Brand Section */}
        <div className="flex justify-center items-center mt-[96px]">
          <Image
            src="/brand.png"
            alt="brand"
            width={1000}
            height={1000}
            className=""
          />
        </div>
      </div>
    </Container>
  );
}


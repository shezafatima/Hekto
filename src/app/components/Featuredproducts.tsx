import Image from "next/image";
import { featuredProducts } from "@/sanity/lib/queries";
import { Product } from "../../../types/products";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import Zoom from "./Zoom";
import AddToWishlist from "./AddToWishlist";
import AddToCartIcon from "./AddToCartIcon";

export default async function FeaturedProducts() {
  let FeaturedProducts: Product[] = [];
  let errorMessage = "";

  try {
    FeaturedProducts = await client.fetch(featuredProducts);
  } catch (error) {
    console.error("Failed to fetch featured products:", error);
    errorMessage = "Failed to load featured products. Please try again later.";
  }

  return (
    <div className="mx-[50px] mt-[129px]">
      <h1 className="text-[42px] text-[#1A0B5B] flex justify-center items-center text-center font-semibold">
        Featured Products
      </h1>

      {/* Error Message */}
      {errorMessage && (
        <div className="text-center text-red-600 py-4 font-medium">
          {errorMessage}
        </div>
      )}

      {/* Products Grid */}
      {!errorMessage && FeaturedProducts.length > 0 ? (
        <div className="mt-[48px] grid lg:grid-cols-4 sm:grid-cols-2 gap-[29px]">
          {FeaturedProducts.map((featuredproduct) => (
            <div
              key={featuredproduct._id}
              className="relative group w-[270px] h-[360px] shadow-xl rounded-[4px] hover:bg-[#2F1AC4] hover:text-white"
            >
              <div className="">
                <div className="bg-gray-300 rounded-t-[4px] pb-2">
                  {/* Hover Actions */}
                  <div className="absolute flex items-center ml-3 opacity-0 group-hover:opacity-100 transition-opacity gap-2 duration-300 pt-3">
                    <AddToCartIcon product={featuredproduct} />
                    <Zoom product={featuredproduct} />
                    <AddToWishlist product={featuredproduct} />
                  </div>

                  {/* Product Image */}
                  {featuredproduct.image && (
                    <Image
                      src={urlFor(featuredproduct.image).url()}
                      alt={featuredproduct.name || "Product Image"}
                      width={1000}
                      height={1000}
                      loading="lazy"
                      className="w-[178px] h-[178px] flex justify-center items-center mx-auto pt-10"
                    />
                  )}

                  {/* View Details Button */}
                  <Link href={`/products/${featuredproduct._id}`}>
                    <button className="flex items-center text-center py-2 px-3 justify-center mx-auto bg-[#08D15F] rounded-[2px] text-white text-[12px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Details
                    </button>
                  </Link>
                </div>

                {/* Product Info */}
                <div className="flex justify-center items-center flex-col mt-5 space-y-2">
                  <h1 className="text-[18px] text-[#FB2E86] group-hover:text-white">
                    {featuredproduct.name}
                  </h1>
                  <div className="flex gap-1 items-center my-3">
                    <div className="w-[14px] h-[4px] bg-[#05E6B7] rounded-lg"></div>
                    <div className="w-[14px] h-[4px] bg-[#F701A8] rounded-lg"></div>
                    <div className="w-[14px] h-[4px] bg-[#00009D] group-hover:bg-white rounded-lg"></div>
                  </div>
                  <p className="text-[#151875] text-[14px] group-hover:text-white">
                    Code-1468
                  </p>
                  <p className="text-[#151875] text-[14px] group-hover:text-white">
                    ${featuredproduct.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        !errorMessage && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-xl">No featured products found.</p>
          </div>
        )
      )}

      {/* Pagination Dots */}
      <div className="flex items-center justify-center gap-2 mt-20">
        <div className="w-[24px] h-[4px] bg-[#F701A8] rounded-lg"></div>
        <div className="w-[16px] h-[4px] bg-[#FEBAD7] rounded-lg"></div>
        <div className="w-[16px] h-[4px] bg-[#FEBAD7] rounded-lg"></div>
        <div className="w-[16px] h-[4px] bg-[#FEBAD7] rounded-lg"></div>
      </div>
    </div>
  );
}

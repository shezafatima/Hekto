import React from "react";
import Link from "next/link";
import { Product } from "../../../types/products";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

interface RelatedProductsProps {
  products: Product[];
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ products }) => {
  return (
    <div className="mt-12 md:px-[100px] px-[50px]">
      <h2 className="text-2xl font-bold text-[#1a2572] mb-6">Related Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link href={`/products/${product._id}`} key={product._id}>
            <div className="border p-4 rounded-lg shadow-md hover:shadow-xl transition">
              {product.image && (
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="md:w-full md:h-full w-[200px] object-cover flex items-center justify-center mb-4"
                />
              )}
              <div className="flex items-center flex-wrap">
              <h3 className=" font-semibold text-[12px] text-[#0D134E] items-center justify-start">{product.name}</h3>
              <Image width={1000} height={1000} src="/Four Star.png" alt="" className="w-20 h-5 flex items-center justify-end" />

              </div>
              <p className="text-pink-600 font-bold">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;

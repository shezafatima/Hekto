
"use client";

import { useState } from "react";
import FilterBar from "./FilterBar"; 
import Image from "next/image";
import Link from "next/link";
import { Product } from "../../../types/products";
import { urlFor } from "@/sanity/lib/image";


type ProductGridProps = {
  products: Product[];
};

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  // State for filters, pagination, and view type
  const [filter, setFilter] = useState<string>("best-match");
  const [perPage, setPerPage] = useState<number>(21);
  const [viewType, setViewType] = useState<"grid" | "list">("grid"); // Default to grid view

  // Filters and options
  const filters = [
    { label: "Best Match", value: "best-match" },
    { label: "Price: Low to High", value: "low-to-high" },
    { label: "Price: High to Low", value: "high-to-low" },
    { label: "New Arrivals", value: "new-arrival" },
  ];

  const perPageOptions = [4, 8, 12,18,21];

  const sortedProducts = [...products].sort((a, b) => {
    if (filter === "low-to-high") {
      return a.price - b.price;
    }
    if (filter === "high-to-low") {
      return b.price - a.price;
    }
    if (filter === "new-arrival") {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
    return 0; 
  });


  const paginatedProducts = sortedProducts.slice(0, perPage);


  return (
    <div>
      {/* Filter Bar */}
      <div className="flex mt-20 md:mx-[150px] mx-[20px] justify-between flex-wrap">
        <div className="flex flex-col">
          <h1 className="text-[22px] text-[#151875] font-semibold">
            Ecommerce Accessories & Fashion item
          </h1>
          <p className="mt-2 text-[12px] text-[#8A8FB9]">
            About {products.length} results
          </p>
        </div>

        {/* Dynamic Filter Bar */}
        <FilterBar
          filters={filters}
          perPageOptions={perPageOptions}
          onFilterChange={setFilter}
          onPerPageChange={setPerPage}
          viewType={viewType}
          onViewChange={setViewType}
        />
      </div>

      {/* Product Grid/List */}
      <div
        className={`${
          viewType === "grid"
            ? "grid lg:grid-cols-4 sm:grid-cols-2 sm:gap-10"
            : "flex flex-col gap-6"
        } mx-[20px] md:mx-[130px] mt-10`}
      >
        {paginatedProducts.map((product) => (
          <div
            key={product._id}
            className={`${
              viewType === "grid"
                ? "relative group shadow-lg hover:translate-y-0.5 hover:scale-105 hover:cursor-pointer ease-in-out w-[270px] h-[363px] rounded-[4px]"
                : " gap-4 p-4 shadow-lg rounded-[4px] hover:scale-105 hover:cursor-pointer space-y-4"
            }`}
          >
            <Link href={`/products/${product._id}`}>
              <div
                className={`${
                  viewType === "grid" ? "bg-[#EBF4F3] pb-2" : "flex-shrink-0"
                }`}
              >
                {product.image && (
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.name}
                    width={1000}
                    height={1000}
                    loading="lazy"
                    className={`${
                      viewType === "grid"
                        ? "w-[169px] mx-auto pt-10"
                        : "w-[220px]  rounded"
                    }`}
                  />
                )}
              </div>
              <div className="flex flex-col justify-between items-center mt-1 mx-2">
                <h1 className="text-[#151875] text-[14px] text-center font-semibold mt-2">
                  {product.name}
                </h1>
                <div className="flex flex-col items-center justify-center">

               
                   <Image width={1000} height={1000} loading="lazy" src="/Four Star.png" alt="" className="w-20 h-5  my-2" />
                </div>

                <div className="flex mt-2 gap-3">
                  <p className="text-[#151875] text-[14px] ">${product.price}</p>
                  <p className="text-[#FB2E86] text-[13px] ">20% OFF</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;


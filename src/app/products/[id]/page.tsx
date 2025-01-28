import { client } from "@/sanity/lib/client";
import React from "react";
import Link from "next/link";
import MediaIcon from "@/app/components/MediaIcon";
import { notFound } from "next/navigation";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import ProductTabs from "@/app/components/ProductTabs";
import RelatedProducts from "@/app/components/RelatedProducts";
import AddToCartButton from "@/app/components/AddToCartButton";
import Conatainer from "@/app/components/Container";
import HeartButton from "@/app/components/HeartButton";

// async function SingleProductPage({ params }: { params: { id: string } }) {
//   const relatedProductsQuery = `*[_type == "product" && category == $category && _id != $id][0...4]{
//     _id,
//     name,
//     price,
//     image
//   }`;

//   const product: Product | null = await client.fetch(
//     `*[_type == "product" && _id == $id][0]{
//       _id,
//       name,
//       price,
//       description,
//       image,
//       category,
//       stock
//     }`,
//     { id: params.id }
//   );

//   if (!product) {
//     return notFound(); // This is a built-in Next.js function for handling 404 cases
//   }

//   const relatedProducts: Product[] = await client.fetch(relatedProductsQuery, {
//     category: product?.category,
//     id: params.id,
//   });

//   return (
//     <Conatainer>
//       <div>
//         {/* Product details section */}
//         <div className="bg-[#F6F5FF] h-[186px] px-[50px] md:px-[150px]">
//           <h1 className="text-[36px] text-[#101750] flex items-center pt-14 font-semibold">
//             Shopping Cart
//           </h1>
//           <div className="mt-2 flex items-center gap-3 flex-wrap">
//             <Link href="/" className="text-black text-[16px]">
//               Home .{" "}
//             </Link>
//             <Link href="/" className="text-black text-[16px]">
//               Pages .{" "}
//             </Link>
//             <Link href="/faq" className="text-[#FB2E86] text-[16px]">
//               Product Details{" "}
//             </Link>
//           </div>
//         </div>

//         {/* Product Details Section */}
//         <div className="w-[90%]  lg:h-[609px] h-full mx-auto bg-white shadow-xl py-10 flex flex-col md:flex-row gap-20 px-6 mt-12">
//           <div className="bg-gray-100 border-gray-400 border rounded-xl ">
//             {product.image && (
//               <Image
//                 src={urlFor(product.image).url()}
//                 alt={product.name}
//                 width={1000}
//                 height={1000}
//                 className="w-[80%] h-[90%] items-center flex justify-center"
//               />
//             )}
//           </div>
//           <div className="w-full md:w-1/2 flex flex-col gap-5 space-y-6">
//             <div className="space-y-6">
//               <h2 className="text-3xl text-[#0D134E] md:text-4xl font-bold mb-2">
//                 {product.name}
//               </h2>
//               <div className="flex items-center my-2   gap-4">
//                 <Image
//                   width={1000}
//                   height={1000}
//                   src="/Four Star.png"
//                   alt=""
//                   className="w-36 h-8 "
//                 />
//                 <p className="text-[#151875] text-lg ">(22)</p>
//               </div>
//               <div>
//                 <div className="text-[#151875] text-lg font-bold">
//                   ${product?.price}
//                 </div>
//               </div>
//             </div>
//             {product?.stock && (
//               <p className="bg-pink-100 w-24 text-center text-[#FB2E86] text-sm py-2.5 font-semibold rounded-lg">
//                 In Stock
//               </p>
//             )}
//             <p className="text-sm text-[#A9ACC6] text-[16px] tracking-wide">
//               {product?.description}
//             </p>
//             <div className="flex items-center gap-2.5 lg:gap-5">
//               <div>
//                 <AddToCartButton
//                   product={product}
//                   className=" text-[#151875] text-[16px] hover:bg-[#0D134E] hover:text-white"
//                 />
//               </div>
//               <HeartButton />
//             </div>
//             <div className="flex flex-wrap items-center gap-5">
//               <div className="border border-[#FB2E86] text-center p-3 hover:border-[#eb3a86] rounded-md hoverEffect">
//                 <p className="text-base font-semibold text-[#151875]">
//                   Free Shipping
//                 </p>
//                 <p className="text-sm text-gray-500">
//                   Free shipping over order $120
//                 </p>
//               </div>
//               <div className="border border-[rgb(216,54,124)] text-center p-3 hover:border-[#eb3a86] rounded-md hoverEffect">
//                 <p className="text-base font-semibold text-[#151875]">
//                   Flexible Payment
//                 </p>
//                 <p className="text-sm text-gray-500">
//                   Pay with Multiple Credit Cards
//                 </p>
//               </div>
//             </div>
//             <div className="flex items-center gap-12">
//               <h1 className=" text-[#151875] text-[16px]">Share</h1>
//               <MediaIcon />
//             </div>
//           </div>
//         </div>
//         <ProductTabs product={product} />
//         {relatedProducts.length > 0 && (
//           <RelatedProducts products={relatedProducts} />
//         )}
//       </div>
//     </Conatainer>
//   );
// }

// export default SingleProductPage;


import { Product } from "e:/portfolio-websites/hackathon/types/products";

const SingleProductPage = async ({ params }: { params:Promise<{id:string}>  }) => {
  const { id } =await  params; // Destructure the id from params

  const relatedProductsQuery = `*[_type == "product" && category == $category && _id != $id][0...4]{
    _id,
    name,
    price,
    image
  }`;

  const productQuery = `*[_type == "product" && _id == $id][0]{
    _id,
    name,
    price,
    description,
    image,
    category,
    stock
  }`;

  // Fetch product data based on the id
  const product: Product | null = await client.fetch(productQuery, { id });

  if (!product) {
    return notFound(); // 404 if product not found
  }

  // Fetch related products based on category
  const relatedProducts: Product[] = await client.fetch(relatedProductsQuery, {
    category: product.category,
    id,
  });

  return (
    <Conatainer>
      <div>
        {/* Product details section */}
        <div className="bg-[#F6F5FF] h-[186px] px-[50px] md:px-[150px]">
          <h1 className="text-[36px] text-[#101750] flex items-center pt-14 font-semibold">
            Shopping Cart
          </h1>
          <div className="mt-2 flex items-center gap-3 flex-wrap">
            <Link href="/" className="text-black text-[16px]">
              Home .{" "}
            </Link>
            <Link href="/" className="text-black text-[16px]">
              Pages .{" "}
            </Link>
            <Link href="/faq" className="text-[#FB2E86] text-[16px]">
              Product Details{" "}
            </Link>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="w-[90%]  lg:h-[609px] h-full mx-auto bg-white shadow-xl py-10 flex flex-col md:flex-row gap-20 px-6 mt-12">
          <div className="bg-gray-100 border-gray-400 border rounded-xl">
            {product.image && (
              <Image
                src={urlFor(product.image).url()}
                alt={product.name}
                width={1000}
                height={1000}
                className="w-[80%] h-[90%] items-center flex justify-center"
              />
            )}
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-5 space-y-6">
            <div className="space-y-6">
              <h2 className="text-3xl text-[#0D134E] md:text-4xl font-bold mb-2">
                {product.name}
              </h2>
              <div className="flex items-center my-2 gap-4">
                <Image width={1000} height={1000} src="/Four Star.png" alt="" className="w-36 h-8" />
                <p className="text-[#151875] text-lg">(22)</p>
              </div>
              <div>
                <div className="text-[#151875] text-lg font-bold">${product?.price}</div>
              </div>
            </div>
            {product?.stock && (
              <p className="bg-pink-100 w-24 text-center text-[#FB2E86] text-sm py-2.5 font-semibold rounded-lg">
                In Stock
              </p>
            )}
            <p className="text-sm text-[#A9ACC6] text-[16px] tracking-wide">
              {product?.description}
            </p>
            <div className="flex items-center gap-2.5 lg:gap-5">
              <div>
                <AddToCartButton
                  product={product}
                  className="text-[#151875] text-[16px] hover:bg-[#0D134E] hover:text-white"
                />
              </div>
              <HeartButton />
            </div>
            <div className="flex flex-wrap items-center gap-5">
              <div className="border border-[#FB2E86] text-center p-3 hover:border-[#eb3a86] rounded-md hoverEffect">
                <p className="text-base font-semibold text-[#151875]">Free Shipping</p>
                <p className="text-sm text-gray-500">Free shipping over order $120</p>
              </div>
              <div className="border border-[rgb(216,54,124)] text-center p-3 hover:border-[#eb3a86] rounded-md hoverEffect">
                <p className="text-base font-semibold text-[#151875]">Flexible Payment</p>
                <p className="text-sm text-gray-500">Pay with Multiple Credit Cards</p>
              </div>
            </div>
            <div className="flex items-center gap-12">
              <h1 className="text-[#151875] text-[16px]">Share</h1>
              <MediaIcon />
            </div>
          </div>
        </div>
        <ProductTabs product={product} />
        {relatedProducts.length > 0 && <RelatedProducts products={relatedProducts} />}
      </div>
    </Conatainer>
  );
};

export default SingleProductPage;


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import React from 'react'
import { Product, Review } from "../../../types/products"
import { ArrowBigRight } from "lucide-react";

import AddReview from "./AddReview";
import AllReviews from "./AllReviews";
import { client } from "@/sanity/lib/client";
import { productReview } from "@/sanity/lib/queries";





interface ProductTabsProps {
    product: Product; // Define props to include the Product type
  }
  const  ProductTabs: React.FC<ProductTabsProps> =async  ({ product }) => {
    const review: Review[] = await client.fetch(productReview, { id: product._id }, { cache: 'no-store' });

    return (
      <div className="px-[50px] md:px-[100px] mt-24">
        <div className="lg:block hidden ">

      
        <Tabs defaultValue="description" >
          <TabsList className="flex items-center  gap-16">
            <TabsTrigger value="description" >
              Description
            </TabsTrigger>
            <TabsTrigger value="info">Additional Info</TabsTrigger>
            <TabsTrigger value="review">Reviews</TabsTrigger>
          </TabsList>
          <div className="pl-4">

          <TabsContent value="description" className="text-[22px] text-[#151875] mt-14">Various Tempor</TabsContent>
         
          <TabsContent value="description" className="text-[#A9ACC6] text-[16px] mt-4">{product.description}</TabsContent>
          <TabsContent value="description" className=" mt-14 text-[22px] text-[#151875]">More details</TabsContent>
          </div>
          <div>

          <div >
        
            
            <TabsContent value="description" className="flex items-center gap-1 justify-center" >
            <ArrowBigRight className="w-5 h-5 text-[#151875]"/>
            <p className="text-[#A9ACC6] text-[16px]">

                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .
            </p>
                </TabsContent>
                <TabsContent value="description" className="flex items-center gap-1 justify-center" >
            <ArrowBigRight className="w-5 h-5 text-[#151875]"/>
            <p className="text-[#A9ACC6] text-[16px]">

                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .
            </p>
                </TabsContent>
                <TabsContent value="description" className="flex items-center gap-1 justify-center" >
            <ArrowBigRight className="w-5 h-5 text-[#151875]"/>
            <p className="text-[#A9ACC6] text-[16px]">

                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .
            </p>
                </TabsContent>
                <TabsContent value="description" className="flex items-center gap-1 justify-center" >
            <ArrowBigRight className="w-5 h-5 text-[#151875]"/>
            <p className="text-[#A9ACC6] text-[16px]">

                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .
            </p>
                </TabsContent>
          </div>
         
          </div>
          <TabsContent value="info" className="space-y-4">
            <h1 className="text-[#151875] font-bold text-lg">
              Product Stock:

            {product.stock}
            </h1>
            <div className="flex items-center gap-5">

            <h1 className="text-[#151875] font-bold text-lg">
              Category:

            </h1>
            <h1 className="text-lg">

            {product.category}
            </h1>
            </div>
          </TabsContent>
          <TabsContent value="review">
          {product?._id && <AddReview productId={product._id} />}

            <AllReviews review={review} slug={product?._id} />
          </TabsContent>
        </Tabs>
        </div>
<div className="lg:hidden block space-y-6">
<div className="space-y-2">
    <h1 className="text-[24px] text-[#161f64]">

Description
    </h1>
    <h2  className="text-[22px] text-[#151875] mt-14">
        Various Tempor
    </h2>
    <p className="text-[#A9ACC6] text-[16px] mt-4">{product.description}</p>
<h2 className=" mt-14 text-[22px] text-[#151875]">
    More 
Details</h2>
<div>

<div className="flex items-center gap-1 justify-center mt-2">
  <ArrowBigRight className="w-5 h-5 text-[#151875]"/>
  <p className="text-[#A9ACC6] text-[16px]">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
</div>
<div className="flex items-center gap-1 justify-center mt-4">
  <ArrowBigRight className="w-5 h-5 text-[#151875]"/>
  <p className="text-[#A9ACC6] text-[16px]">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
</div>
<div className="flex items-center gap-1 justify-center mt-4">
  <ArrowBigRight className="w-5 h-5 text-[#151875]"/>
  <p className="text-[#A9ACC6] text-[16px]">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
</div>
<div className="flex items-center gap-1 justify-center mt-4">
  <ArrowBigRight className="w-5 h-5 text-[#151875]"/>
  <p className="text-[#A9ACC6] text-[16px]">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
</div>
</div>

</div>
<div>
<h1 className="text-[24px] text-[#161f64]">

Additional Info
    </h1>
    <h1 className="text-[#151875] font-bold text-lg">
              Product Stock:

            {product.stock}
            </h1>
            <div className="flex items-center gap-5">

            <h1 className="text-[#151875] font-bold text-lg">
              Category:

            </h1>
            <h1 className="text-lg">

            {product.category}
            </h1>
            </div>
</div>
<div className="space-y-4">
<h1 className="text-[24px] text-[#161f64]">
Reviews
    </h1>
    {product?._id && <AddReview productId={product._id} />}

    <AllReviews review={review} slug={product?._id} />
</div>
</div>

      </div>
    );
  };
  
export default ProductTabs
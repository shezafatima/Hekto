import Image from "next/image"
import Link from "next/link"
import { Product } from "../../../types/products"
import { client } from "@/sanity/lib/client"
import { latestProducts } from "@/sanity/lib/queries"
import { urlFor } from "@/sanity/lib/image"
import AddToCartIcon from "./AddToCartIcon"
import Zoom from "./Zoom"
import AddToWishlist from "./AddToWishlist"

export default async function LatestProducts(){
    const LatestProducts :Product[]=await client.fetch(latestProducts)
    return(
        <div className=" mx-[50px] mt-[129px]">
<h1 className="text-[42px] text-[#1A0B5B] flex justify-center items-center text-center font-semibold">Latest Products</h1>

<ul className="flex justify-center items-center flex-wrap mx-auto gap-[60px] flex-row mt-[19px]">
    <li>
        <Link href="
        /" className="text-[#FB2E86] text-[18px] underline underline-offset-4">New Arrival</Link>
    </li>
    <li>
        <Link href="
        /" className="text-[#151875] text-[18px]">Best Seller</Link>
    </li>
    <li>
        <Link href="
        /l" className="text-[#151875] text-[18px]">Featured</Link>
    </li>
    <li>
        <Link href="
        /" className="text-[#151875] text-[18px]">Special Offer</Link>
    </li>
</ul>

   <div className="mt-[48px] grid lg:grid-cols-3   gap-[29px] mb-[120px] ">
    {LatestProducts.map((latestproduct)=>(

<div key={latestproduct._id} className="relative group  md:w-[360px] md:h-[306px] w-[270px] shadow-xl rounded-[4px] ">
    <Link href={`/products/${latestproduct._id}`}>
    <div className="">

<div className="bg-gray-300 rounded-t-[4px] hover:bg-white pb-2">
    <Image
    src="/sale.png"
    alt="sale"
    width={1000}
    height={1000}
    loading="lazy"
    className="w-20 absolute  p-2 mx-auto  opacity-0 group-hover:opacity-100  transition-opacity duration-300"
    />
     {latestproduct.image && (

         <Image
         src={urlFor(latestproduct.image).url()}
         alt="image"
         width={1000}
         height={1000}
         loading="lazy"
         className="w-[223px] h-[229px] flex justify-center items-center mx-auto pt-10"/>
        )}
    <div className="absolute flex flex-col items-center  bottom-20 ml-3 opacity-0 group-hover:opacity-100  transition-opacity gap-2 duration-300 ">
       <Zoom product={latestproduct}/>
       <AddToCartIcon product={latestproduct}/>
       <AddToWishlist product={latestproduct}/>
    </div>
</div>
<div className="flex justify-between items-center  mt-1 space-y-2 mx-2 ">
    <h1 className=" text-[18px] text-[#151875] ">{latestproduct.name}</h1>
    <div></div>
    <p className ="text-[#F701A8] text-[14px] ">${latestproduct.price}</p>
   
</div>
</div>
    </Link>
    </div>
    )
    )}

   </div>
        </div>
    )
}
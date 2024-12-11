
import Image from "next/image"
import featuredData from "@/app/data/featured.json"
export default function FeaturedProducts(){
    return(
        <div className="lg:mx-[130px] mx-[50px] mt-[129px]">
<h1 className="text-[42px] text-[#1A0B5B] flex justify-center items-center text-center font-semibold">Featured Products</h1>
   <div className="mt-[48px] grid lg:grid-cols-4 sm:grid-cols-2 gap-[29px] ">
    {featuredData.featuredproducts.map((featuredproduct)=>(

<div key={featuredproduct.id} className="relative group  w-[270px] h-[360px] shadow-xl rounded-[4px] hover:bg-[#2F1AC4] hover:text-white">
    <div className="">

<div className="bg-gray-300 rounded-t-[4px] pb-2">
    
    <div className="absolute flex items-center ml-3 opacity-0 group-hover:opacity-100  transition-opacity gap-2 duration-300 pt-3">
        <Image width={1000} height={1000} src="/productcart.png" alt="" className="w-4" />
        <Image width={1000} height={1000} src="/heart.png" alt="" className="w-4" />
        <Image width={1000} height={1000} src="/zoom.png" alt="" className="w-4" />
    </div>
    <Image
    src={featuredproduct.img}
    alt="image"
    width={1000}
    height={1000}
    className="w-[178px] h-[178px] flex justify-center items-center mx-auto pt-10"/>
     <button className="flex items-center text-center py-2 px-3 justify-center mx-auto bg-[#08D15F] rounded-[2px] text-white text-[12px]  opacity-0 group-hover:opacity-100  transition-opacity duration-300">
     View Details
    </button>
</div>
<div className="flex justify-center items-center flex-col mt-5 space-y-2 ">
    <h1 className="text-[18px] text-[#FB2E86] group-hover:text-white ">Cantilever chair</h1>
    <div className="flex gap-1 items-center my-3">
    <div className="w-[14px] h-[4px] bg-[#05E6B7] rounded-lg"></div>
    <div className="w-[14px] h-[4px] bg-[#F701A8] rounded-lg"></div>
        <div className="w-[14px] h-[4px] bg-[#00009D] group-hover:bg-white rounded-lg"></div>
    </div>
    <p className="text-[#151875] text-[14px] group-hover:text-white ">Code - Y523201</p>
    <p className="text-[#151875] text-[14px]  group-hover:text-white">$42.00</p>
</div>
</div>
    </div>
    )
    )}

   </div>
   <div className="flex items-center justify-center gap-2 mt-20 ">
   <div className="w-[24px] h-[4px] bg-[#F701A8] rounded-lg"></div>
   <div className="w-[16px] h-[4px] bg-[#FEBAD7] rounded-lg"></div>
   <div className="w-[16px] h-[4px] bg-[#FEBAD7] rounded-lg"></div>
   <div className="w-[16px] h-[4px] bg-[#FEBAD7] rounded-lg"></div>

   </div>
        </div>
    )
}
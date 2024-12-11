import Link from "next/link"
import Image from "next/image"
export default function Navbar(){
    return (
        <div className="">
<div className="bg-[#7E33E0] md:grid grid-cols-2 flex items-center flex-wrap justify-center  py-2 px-auto">
<div className="flex gap-[48px] justify-center ">
    <div className="flex justify-center items-center flex-wrap gap-[10px]">
        <Image width={1000} height={1000} src="/mail.png" alt="mail" className="text-white w-4 h-4" />
        <h1 className="text-white text-16px">mhhasanul@gmail.com</h1>
    </div>
    <div className="flex justify-center items-center flex-wrap gap-[10px]  ">
        <Image width={1000} height={1000} src="/phone.png" alt="mail" className="text-white w-4 h-4" />
        <h1 className="text-white text-16px">(12345)67890</h1>
    </div>
</div>
<div className="flex items-center justify-end  gap-4 pr-20">
    <div className="gap-2 flex items-center">
        <h1 className="text-white text-[16px] ">English</h1>
        <Image width={1000} height={1000} src="/arrow.png" alt="arrow" className="text-white"/>
    </div>
    <div className="gap-2 flex items-center">
        <h1 className="text-white text-[16px] ">USD</h1>
        <Image width={1000} height={1000} src="/arrow.png" alt="arrow" className="text-white"/>
    </div>
    <div className="gap-2 flex items-center justify-center">
        <Link href="/login">
        
        <h1 className="text-white text-[16px] ">Login</h1>
        </Link>
        <Image width={1000} height={1000} src="/user.png" alt="user" className="text-white"/>
    </div>
    <div className="gap-2 flex items-center">
        <h1 className="text-white text-[16px] ">Wishlist</h1>
        <Image width={1000} height={1000} src="/wishlist.png" alt="wishlist" className="text-white"/>
    </div>
    <Link href="/shopingcart">
    <Image width={1000} height={1000} src="/cart.png" alt="cart" className="mx-[26px]"/>
    </Link>
</div>
</div>
<div className="flex justify-evenly items-center flex-wrap mx-auto my-[22px]">
<div>
    <h1 className="text-[34px] text-[#0D0E43] font-semibold ">Hekto</h1>
</div>
<div className="flex justify-center items-center ">
    <ul className="space-x-[35px] flex justify-center flex-wrap items-center">
        <li className="text-[#FB2E86] flex  justify-center items-center gap-[2px]">
            <Link href="/" className="test-[16px]" >Home</Link>
            <Image width={1000} height={1000} src="/homearrow.png" alt="arrow" className="w-3 " />
        </li>
        <li>
            <Link href="/about" className="text-[#0D0E43] text-[16px]">Pages</Link>
        </li>
        <li>
            <Link href="/products" className="text-[#0D0E43] text-[16px]">Products</Link>
        </li>
        <li>
            <Link href="/blog" className="text-[#0D0E43] text-[16px]">Blog</Link>
        </li>
        <li>
            <Link href="/shop" className="text-[#0D0E43] text-[16px]">Shop</Link>
        </li>
        <li>
            <Link href="/contact" className="text-[#0D0E43] text-[16px]">Contact</Link>
        </li>
    </ul>
</div>
<div className="flex justify-end items-center ">
    <input type="text" className="border border-gray-400 outline-gray-400"/>
    <button className="bg-[#FB2E86] w-6 h-[26px] ">

    <Image width={1000} height={1000} src="/homesearch.png" alt="search" className="flex justify-center items-center p-1  "/>
    </button>
</div>
</div>
        </div>
    )
}
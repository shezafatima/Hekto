import {
  Sheet,
  SheetContent,
 SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoMdMenu } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
    <div className="">
      <div className="bg-[#7E33E0] md:grid grid-cols-2 flex items-center flex-wrap justify-center px-2   py-2 md:px-auto">
        <div className="flex gap-[48px] justify-center ">
          <div className="flex justify-center items-center flex-wrap gap-[10px]">
            <Image
              width={1000}
              height={1000}
              src="/mail.png"
              alt="mail"
              className="text-white w-4 h-4"
            />
            <h1 className="text-white text-16px">mhhasanul@gmail.com</h1>
          </div>
          <div className="flex justify-center items-center flex-wrap gap-[10px]  ">
            <Image
              width={1000}
              height={1000}
              src="/phone.png"
              alt="mail"
              className="text-white w-4 h-4"
            />
            <h1 className="text-white text-16px">(12345)67890</h1>
          </div>
        </div>
        <div className="flex items-center justify-end flex-wrap md:px-0 px-2 md:mt-0 mt-2 gap-4 pr-20">
          <div className="gap-2 flex items-center ">
            <h1 className="text-white text-[16px] ">English</h1>
            <Image
              width={1000}
              height={1000}
              src="/arrow.png"
              alt="arrow"
              className="text-white w-2"
            />
          </div>
          <div className="gap-2 flex items-center">
            <h1 className="text-white text-[16px] ">USD</h1>
            <Image
              width={1000}
              height={1000}
              src="/arrow.png"
              alt="arrow"
              className="text-white w-2"
            />
          </div>
          <div className="gap-2 flex items-center justify-center">
            <Link href="/login">
              <h1 className="text-white text-[16px] ">Login</h1>
            </Link>
            <Image
              width={1000}
              height={1000}
              src="/user.png"
              alt="user"
              className="text-white w-4"
            />
          </div>
          <div className="gap-2 flex items-center">
            <h1 className="text-white text-[16px] ">Wishlist</h1>
            <Image
              width={1000}
              height={1000}
              src="/wishlist.png"
              alt="wishlist"
              className="text-white w-4"
            />
          </div>
          <Link href="/shopingcart">
            <Image
              width={1000}
              height={1000}
              src="/cart.png"
              alt="cart"
              className="mx-[26px] w-4"
            />
          </Link>
        </div>
      </div>
      <div className="md:hidden  block">
        <Sheet>
          <div className="flex justify-end px-8 items-center mt-6 text-2xl flex-wrap">
            <SheetTrigger>
              <IoMdMenu />
            </SheetTrigger>
          </div>
          <SheetContent className="w-[400px] sm:w-[540px] ">
            <SheetHeader>
              <div className="flex flex-col justify-center items-center flex-wrap space-y-6 py-20">
                
                <Link href="/" >
                  <SheetTitle className="text-[#FB2E86] text-[16px] hover:underline underline-offset-4  flex  justify-center items-center gap-[4px]">Home

                  <Image
                width={1000}
                height={1000}
                src="/homearrow.png"
                alt="arrow"
                className="w-3 "
                />
                </SheetTitle>
                </Link>
               
                <Link href="/about" >
                  <SheetTitle className="text-[#0D0E43] text-[16px] hover:underline underline-offset-4">Pages</SheetTitle>
                </Link>
                <Link href="/products" >
                  <SheetTitle className="text-[#0D0E43] text-[16px] hover:underline underline-offset-4">Products</SheetTitle>
                </Link>
                <Link href="/blog" >
                  <SheetTitle className="text-[#0D0E43] text-[16px] hover:underline underline-offset-4">Blog</SheetTitle>
                </Link>
                <Link href="/shop" >
                  <SheetTitle className="text-[#0D0E43] text-[16px] hover:underline underline-offset-4">Shop</SheetTitle>
                </Link>
                <Link href="/contact">
                  <SheetTitle className="text-[#0D0E43] text-[16px] hover:underline underline-offset-4">Contact</SheetTitle>
                </Link>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="flex justify-evenly items-center flex-wrap mx-auto my-[22px]">
        <div>
          <h1 className="text-[34px] text-[#0D0E43] font-semibold ">Hekto</h1>
        </div>
        <div className="flex justify-center items-center ">
          <ul className="md:flex hidden  space-x-[35px]  justify-center flex-wrap items-center">
            <li className="text-[#FB2E86] flex  justify-center items-center gap-[2px]">
              <Link href="/" className="test-[16px]">
                Home
              </Link>
              <Image
                width={1000}
                height={1000}
                src="/homearrow.png"
                alt="arrow"
                className="w-3 "
              />
            </li>
            <li>
              <Link href="/about" className="text-[#0D0E43] text-[16px]">
                Pages
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-[#0D0E43] text-[16px]">
                Products
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-[#0D0E43] text-[16px]">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/shop" className="text-[#0D0E43] text-[16px]">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-[#0D0E43] text-[16px]">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-end items-center ">
          <input
            type="text"
            className="border border-gray-400 outline-gray-400"
          />
          <button className="bg-[#FB2E86] w-6 h-[26px] ">
            <Image
              width={1000}
              height={1000}
              src="/homesearch.png"
              alt="search"
              className="flex justify-center items-center p-1  "
            />
          </button>
        </div>
      </div>
    </div>
  );
}

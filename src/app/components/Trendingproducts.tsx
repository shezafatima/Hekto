import Image from "next/image";
import Link from "next/link";
export default function TrendingProducts() {
  return (
    <div>

    <div className="mt-[58px] lg:mx-[130px] mx-[50px]">
      <h1 className="text-[42px] text-[#1A0B5B] flex justify-center items-center text-center font-semibold">
        Trending Products
      </h1>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-[29px] mt-[39px]">
        <div className="w-[270px] h-[350px] rounded-[4px] shadow-xl">
          <div className="bg-gray-200 m-4 mt-4 w-[247px] h-[244px]">
            <Image
              src="/trending1.png"
              alt="img"
              width={1000}
              height={1000}
              className="w-[170px] flex items-center justify-center mx-auto pt-10"
            />
          </div>
          <div className="mt-3 flex justify-center items-center flex-col">
            <h1 className="text-[16px] text-[#151875]">Cantilever chair</h1>
            <div className="flex items-center mt-2 gap-2">
              <p className="text-[14px] text-[#151875]">$26.00 </p>
              <p className="text-[12px] text-[#1518754D]">$42.00 </p>
            </div>
          </div>
        </div>
        <div className="w-[270px] h-[350px] rounded-[4px] shadow-xl">
          <div className="bg-gray-200 m-4 mt-4 w-[247px] h-[244px]">
            <Image
              src="/trending2.png"
              alt="img"
              width={1000}
              height={1000}
              className="w-[170px] flex items-center justify-center mx-auto pt-10"
            />
          </div>
          <div className="mt-3 flex justify-center items-center flex-col">
            <h1 className="text-[16px] text-[#151875]">Cantilever chair</h1>
            <div className="flex items-center mt-2 gap-2">
              <p className="text-[14px] text-[#151875]">$26.00 </p>
              <p className="text-[12px] text-[#1518754D]">$42.00 </p>
            </div>
          </div>
        </div>
        <div className="w-[270px] h-[350px] rounded-[4px] shadow-xl">
          <div className="bg-gray-200 m-4 mt-4 w-[247px] h-[244px]">
            <Image
              src="/trending3.png"
              alt="img"
              width={1000}
              height={1000}
              className="w-[170px] flex items-center justify-center mx-auto pt-10"
            />
          </div>
          <div className="mt-3 flex justify-center items-center flex-col">
            <h1 className="text-[16px] text-[#151875]">Cantilever chair</h1>
            <div className="flex items-center mt-2 gap-2">
              <p className="text-[14px] text-[#151875]">$26.00 </p>
              <p className="text-[12px] text-[#1518754D]">$42.00 </p>
            </div>
          </div>
        </div>
        <div className="w-[270px] h-[350px] rounded-[4px] shadow-xl">
          <div className="bg-gray-200 m-4 mt-4 w-[247px] h-[244px]">
            <Image
              src="/trending4.png"
              alt="img"
              width={1000}
              height={1000}
              className="w-[170px] flex items-center justify-center mx-auto pt-10"
            />
          </div>
          <div className="mt-3 flex justify-center items-center flex-col">
            <h1 className="text-[16px] text-[#151875]">Cantilever chair</h1>
            <div className="flex items-center mt-2 gap-2">
              <p className="text-[14px] text-[#151875]">$26.00 </p>
              <p className="text-[12px] text-[#1518754D]">$42.00 </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[39px] sm:flex items-center justify-center flex-wrap gap-[29px]">
        <div className="sm:w-[420px] sm:h-[270px] bg-[#31208A0D]">
          <div className="mt-9 mx-6">
            <h1 className="text-[26px] text-[#151875]">
              23% off in all products
            </h1>
            <Link
              href="/shop"
              className="text-[16px] text-[#FB2E86] underline underline-offset-4"
            >
              Shop Now
            </Link>
          </div>

          <Image
            src="/clock.png"
            alt="img"
            width={1000}
            height={1000}
            className="lg:w-[200px] w-[100px]  ml-auto -mt-8"
          />
        </div>
        <div className="sm:w-[420px] sm:h-[270px] bg-[#31208A0D]">
          <div className="mt-9 mx-6">
            <h1 className="text-[26px] text-[#151875]">
              23% off in all products
            </h1>
            <Link
              href="/shop"
              className="text-[16px] text-[#FB2E86] underline underline-offset-4"
            >
              View Collection
            </Link>
          </div>

          <Image
            src="/drawer.png"
            alt="img"
            width={1000}
            height={1000}
            className="w-[330px]   ml-auto "
            />
        </div>
        <div className="flex flex-col gap-[20px] sm:mt-0 mt-8">
          <div className="flex gap-[9px]">
            <Image
              src="/img1.png"
              alt="img"
              width={1000}
              height={1000}
              className="bg-gray-200 w-[70px] h-[70px] p-4 "
            />
            <div className=" flex flex-col">
              <h1 className="text-[16px] text-[#151875]">
                Executive Seat chair
              </h1>
              <p className="text-[12px] text-[#151875]">$32.00</p>
            </div>
          </div>
          <div className="flex gap-[9px]">
            <Image
              src="/img2.png"
              alt="img"
              width={1000}
              height={1000}
              className="bg-gray-200 w-[70px] h-[70px] p-4 "
            />
            <div className=" flex flex-col ">
              <h1 className="text-[16px] text-[#151875]">
                Executive Seat chair
              </h1>
              <p className="text-[12px] text-[#151875]">$32.00</p>
            </div>
          </div>
          <div className="flex gap-[9px]">
            <Image
              src="/img3.png"
              alt="img"
              width={1000}
              height={1000}
              className="bg-gray-200 w-[70px] h-[70px] p-4 "
            />
            <div className=" flex flex-col">
              <h1 className="text-[16px] text-[#151875]">
                Executive Seat chair
              </h1>
              <p className="text-[12px] text-[#151875]">$32.00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[126px]">
        <h1 className="text-[42px] text-[#1A0B5B] flex justify-center items-center text-center font-semibold">
          Discount Item
        </h1>
        <ul className="flex justify-center flex-wrap items-center mx-auto gap-[26px] flex-row mt-[19px]">
          <li>
            <Link
              href="
              /newarrival"
              className="text-[#FB2E86] text-[18px] underline underline-offset-4"
            >
              Wood Chair
            </Link>
          </li>
          <li>
            <Link
              href="
              /newarrival"
              className="text-[#151875] text-[18px]"
            >
              Plastic Chair
            </Link>
          </li>
          <li>
            <Link
              href="
              /newarrival"
              className="text-[#151875] text-[18px]"
            >
              Sofa Collection
            </Link>
          </li>
        </ul>
        <div className="lg:flex">
          <div className="mt-[110px]">
            <h1 className="text-[#151875] text-[35px] font-semibold">
              20% Discount Of All Products
            </h1>
            <p className="text-[21px] text-[#FB2E86]">Eams Sofa Compact</p>
            <p className="text-[17px] text-[#B7BACB]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget{" "}
              <br /> feugiat habitasse nec, bibendum condimentum.
            </p>
            <div className="flex gap-10 mt-7">
              <div className="flex flex-col ">
                <div className="flex gap-[6px]  items-center">
                  <Image width={1000} height={1000} src="/check.png" alt="" className="w-3 h-3" />
                  <p className="text-[16px] text-[#B7BACB]">
                    Material expose like metals
                  </p>
                </div>
                <div className="flex gap-[6px] items-center mt-[10px]">
                  <Image width={1000} height={1000} src="/check.png" alt="" className="w-3 h-3" />
                  <p className="text-[16px] text-[#B7BACB]">
                  Simple neutral colours.
                  </p>
                </div>
              </div>
              <div className="flex flex-col ">
                <div className="flex gap-[6px] items-center">
                  <Image width={1000} height={1000} src="/check.png" alt="" className="w-3 h-3" />
                  <p className="text-[16px] text-[#B7BACB]">
                  Clear lines and geomatric figures
                  </p>
                </div>
                <div className="flex gap-[6px]  items-center mt-[10px]">
                  <Image width={1000} height={1000} src="/check.png" alt="" className="w-3 h-3" />
                  <p className="text-[16px] text-[#B7BACB]">
                  Material expose like metals
                  </p>
                </div>
              </div>
            </div>
            <Link href="/shop">
              <button className="py-3 px-10 mt-[37px] text-white bg-[#FB2E86]   mr-auto">Shop Now</button>
            </Link>
          </div>
          <div className="bg-[#FCECF1] sm:w-[472px] sm:h-[472px] w-[272px] h-[272px] rounded-full mt-8 flex ml-auto justify-end items-center">
          <Image
          src="/sofa.png"
          alt="sofa"
          width={1000}
          height={1000}
          className="sm:w-[620px] w-[420px] right-8 absolute ml-auto flex justify-end items-center"/>

          </div>
        </div>
      </div>
      <div className="mt-20">
      <h1 className="text-[42px] text-[#1A0B5B] flex justify-center items-center text-center font-semibold">
        Top Categories
      </h1>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-10  mt-[56px]">
<div>
<div className="hover:bg-[#151875] w-[256px] h-[256px] rounded-full">

          <div className="bg-gray-200  w-[256px] h-[256px] bottom-[8px] -right-[8px] rounded-full relative group">
            <Image
              src="/chair1.png"
              alt="img"
              width={1000}
              height={1000}
              className="w-[170px] flex items-center justify-center mx-auto pt-10"
            />
            <Link href="/shop">
            <button className=" flex items-center   text-center py-2 px-3 justify-center  mx-auto bg-[#08D15F] rounded-[2px] text-white text-[12px]  opacity-0 group-hover:opacity-100  transition-opacity duration-300">
     View Shop
    </button>
            </Link>
          </div>
</div>
          <div className="mt-3 flex justify-center items-center flex-col">
            <h1 className="text-[16px] text-[#151875]">Mini LCW Chair</h1>
            <div className="flex items-center mt-2 gap-2">
              <p className="text-[14px] text-[#151875]">$26.00 </p>

            </div>
          </div>
</div>
<div>
<div className="hover:bg-[#151875] w-[256px] h-[256px] rounded-full">

          <div className="bg-gray-200  w-[256px] h-[256px] bottom-[8px] -right-[8px] rounded-full relative group">
            <Image
              src="/chair.png"
              alt="img"
              width={1000}
              height={1000}
              className="w-[170px] flex items-center justify-center mx-auto pt-10"
            />
            <Link href="/shop">
            <button className=" flex items-center   text-center py-2 px-3 justify-center  mx-auto bg-[#08D15F] rounded-[2px] text-white text-[12px]  opacity-0 group-hover:opacity-100  transition-opacity duration-300">
     View Shop
    </button>
    </Link>
          </div>
</div>
          <div className="mt-3 flex justify-center items-center flex-col">
            <h1 className="text-[16px] text-[#151875]">Mini LCW Chair</h1>
            <div className="flex items-center mt-2 gap-2">
              <p className="text-[14px] text-[#151875]">$26.00 </p>

            </div>
          </div>
</div>
<div>
<div className="hover:bg-[#151875] w-[256px] h-[256px] rounded-full">

          <div className="bg-gray-200  w-[256px] h-[256px] bottom-[8px] -right-[8px] rounded-full relative group">
            <Image
              src="/chair2.png"
              alt="img"
              width={1000}
              height={1000}
              className="w-[170px] flex items-center justify-center mx-auto pt-10"
            />
             <Link href="/shop">
            <button className=" flex items-center   text-center py-2 px-3 justify-center  mx-auto bg-[#08D15F] rounded-[2px] text-white text-[12px]  opacity-0 group-hover:opacity-100  transition-opacity duration-300">
     View Shop
    </button>
    </Link>
          </div>
</div>
          <div className="mt-3 flex justify-center items-center flex-col">
            <h1 className="text-[16px] text-[#151875]">Mini LCW Chair</h1>
            <div className="flex items-center mt-2 gap-2">
              <p className="text-[14px] text-[#151875]">$26.00 </p>

            </div>
          </div>
</div>
<div>
<div className="hover:bg-[#151875] w-[256px] h-[256px] rounded-full">

          <div className="bg-gray-200  w-[256px] h-[256px] bottom-[8px] -right-[8px] rounded-full relative group">
            <Image
              src="/chair1.png"
              alt="img"
              width={1000}
              height={1000}
              className="w-[170px] flex items-center justify-center mx-auto pt-10"
              />
             <Link href="/shop">
            <button className=" flex items-center   text-center py-2 px-3 justify-center  mx-auto bg-[#08D15F] rounded-[2px] text-white text-[12px]  opacity-0 group-hover:opacity-100  transition-opacity duration-300">
     View Shop
    </button>
    </Link>
          </div>
</div>
          <div className="mt-3 flex justify-center items-center flex-col">
            <h1 className="text-[16px] text-[#151875]">Mini LCW Chair</h1>
            <div className="flex items-center mt-2 gap-2">
              <p className="text-[14px] text-[#151875]">$26.00 </p>

            </div>
          </div>
</div>
      </div>
      </div>
    </div>
      <div className="mt-[125px] bg-center bg-cover h-[462px] " style={{backgroundImage:"url('/bgimg.png')"}}>
<div className="flex-col ">
    <h1 className="flex font-semibold text-center text-[35px] text-[#151875] items-center justify-center pt-[170px]">Get Latest Update By Subscribe <br />
    0ur Newslater</h1>
    <button className="py-3 px-10 mt-[37px] text-white bg-[#FB2E86] mx-auto  flex items-center justify-center ">Shop Now</button>
</div>
      </div>
      <div className="flex justify-center items-center mt-[96px]">
        <Image
        src="/brand.png"
        alt="brand"
        width={1000}
        height={1000}
        className=""/>
      </div>
              </div>
  );
}

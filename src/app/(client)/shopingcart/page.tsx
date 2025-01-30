
"use client";
import Container from "../../components/Container";
import EmptyCart from "../../components/EmptyCart";
import Loading from "../../components/Loading";

import PriceFormatter from "../../components/PriceFormatter";
import QuantityButtons from "../../components/QuantityButtons";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../../components/ui/tooltip";
import { urlFor } from "@/sanity/lib/image";
import useCartStore from "../../../../store";
import {  X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Checkbox } from "@/components/ui/checkbox";
import NoAccessToCart from "@/app/components/NoAccessToCart";
import { useAuth } from "@clerk/nextjs";

const CartPage = () => {
  const [isClient, setIsClient] = useState(false);
  const [loading] = useState(false);
  const { isSignedIn } = useAuth();

  const {
    deleteCartProduct,
    getTotalPrice,
    getItemCount,
   
    resetCart,
    getGroupedItems,
  } = useCartStore();

  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return <Loading />;
  }
  const cartProducts = getGroupedItems();

  const handleResetCart = () => {
    const confirmed = window.confirm("Are you sure to reset your Cart?");
    if (confirmed) {
      resetCart();
      toast.success("Your cart reset successfully!");
    }
  };
  const handleDeleteProduct = (id: string) => {
    deleteCartProduct(id);
    toast.success("Product deleted successfully!");
  };

  // const handleCheckout = async () => {
  //   setLoading(true);
  //   try {
  //     const metadata: Metadata = {
  //       orderNumber: crypto.randomUUID(),
  //       // customerName: user?.fullName ?? "Unknown",
  //       // customerEmail: user?.emailAddresses[0]?.emailAddress ?? "Unknown",
  //       // clerkUserId: user!.id,
  //     };
  //     const checkoutUrl = await createCheckoutSession(cartProducts, metadata);
  //     if (checkoutUrl) {
  //       window.location.href = checkoutUrl;
  //     }
  //   } catch (error) {
  //     console.error("Error creating checkout session:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="bg-gray-50 pb-52 md:pb-10">
        {isSignedIn ? (
        <Container>
          {cartProducts?.length ? (
            <>
              <div className="bg-[#F6F5FF] h-[186px] px-[50px] md:px-[150px]">
                <h1 className="text-[36px] text-[#101750] flex items-center pt-14 font-semibold ">
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
                    Shopping Cart{" "}
                  </Link>
                </div>
              </div>

              <Container className="flex lg:flex-row flex-col">
              <div className="">
                <div>

              <div className="flex items-center justify-around mx-6">
              <h1 className="text-[20px] text-[#1D3178] font-semibold ">
                Product
              </h1>
              <h1 className="text-[20px] text-[#1D3178] font-semibold ">
                Price
              </h1>
              <h1 className="text-[20px] text-[#1D3178] font-semibold">
                Quantity
              </h1>
              <h1 className="text-[20px] text-[#1D3178] font-semibold">
                Total
              </h1>
            </div>

              {cartProducts?.map(({ product }) => {
                const itemCount = getItemCount(product?._id);
                return (
                  <div key={product?._id}>
                    <div className="grid-cols-4 grid mt-10 ">
                      <div className="flex">

                      <div>
                        

                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <X
                              onClick={() => handleDeleteProduct(product?._id)}
                              className=" w-4 h-4 p-[2px]  text-white bg-black rounded-full"
                            />
                          </TooltipTrigger>
                          <TooltipContent className="font-bold bg-red-600">
                            Delete product
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      {product?.image && (
                        <Image
                          src={urlFor(product?.image).url()}
                          alt="cart"
                          width={1000}
                          height={1000}
                          className="w-[83px] "
                          />
                        )}
                        </div>
                      <div className="flex flex-col justify-center mx-4 ">
                        <h1 className="text-[14px] text-black font-semibold">
                        {`${product?.name?.substring(0, 15)}...`}
                        </h1>
                        <p className="text-[#A1A8C1] text-[12px]">
                          {product.category}
                        </p>
                        {/* <p className="text-[#A1A8C1] text-[12px]">
                          Status :{product?.status}
                        </p> */}
                      </div>
                      </div>
                      <div className="flex justify-center items-center mx-16">
                        <h1 className="text-[12px] font-semibold text-[#15245E]">
                          ${product?.price}
                        </h1>
                      </div>
                      <div className="flex justify-center items-center mx-16">
                        <div className="bg-[#e2e3e7] w-[51px] h-[20px] text-center flex items-center justify-center p-2  text-[#b0b1b4]">
                          <QuantityButtons product={product} />
                        </div>
                      </div>
                      <div className="flex justify-center items-center mx-16">
                        <h1 className="text-[12px] font-semibold text-[#15245E]">
                        <PriceFormatter
                            amount={(product?.price as number) * itemCount}
                            />
                          {/* <PriceFormatter amount={getTotalPrice()} /> */}
                        </h1>
                      </div>
                    </div>
                    <hr className="mt-8" />

                    <div></div>
                    
                  </div>
                  
                );
              })}
              </div>
              <div className="flex items-center justify-between mt-4 mx-[40px]">
                      <Link href={"/products"}>
                        <Button className="py-2 rounded-sm px-4 text-white bg-[#FB2E86] hover:bg-transparent hover:border hover:text-[#FB2E86] hover:border-[#FB2E86]">
                          Update Cart
                        </Button>
                      </Link>

                      <Button
                        onClick={handleResetCart}
                        className="py-2 rounded-sm px-4 text-white bg-[#FB2E86] hover:bg-transparent hover:border hover:text-[#FB2E86] hover:border-[#FB2E86]"
                      >
                        Clear Cart
                      </Button>
                    </div>
              </div>
              <div className="flex   items-center flex-col flex-wrap lg:mt-0 mt-20">
                  <h1 className="text-[20px] text-[#1D3178] font-semibold text-center">
                    Cart Totals
                  </h1>
                  <div className="w-[351px] h-[294px] bg-[#efeff0] mt-10 p-7 rounded-sm ">
                    <div className="flex justify-between items-center">
                      <span className="text-[20px] text-[#1D3178] ">
                        SubTotals:
                      </span>
                      <PriceFormatter amount={getTotalPrice()} />
                    </div>
                    {/* {getSubtotalPrice() - getTotalPrice() > 0 ? (
                      <div className="flex justify-between items-center mt-10">
                        <span className="text-[20px] text-[#1D3178]">
                          Discount:
                        </span>
                        <PriceFormatter
                          amount={getSubtotalPrice() - getTotalPrice()}
                        />
                      </div>
                    ) : (
                      <span className="text-[16px] text-gray-500">
                        No discounts applied
                      </span>
                    )} */}

                    
                     <hr className="mt-6 bg-black" />
                    <div className="flex justify-between items-center mt-10">
                      <span className="text-[20px] text-[#1D3178] ">
                        Totals:
                      </span>

                      <PriceFormatter amount={getTotalPrice()} />
                    </div>
                    <hr className="mt-6 bg-black" />
                    <div className="flex items-center mt-4 gap-2">
                      <Checkbox/>
                      <p className="text-[12px] text-[#8A91AB]">
                        Shipping & taxes calculated at checkout
                      </p>
                    </div>
<Link href={"/shipping"}>
                    <button
                      disabled={loading}
                      
                      className="bg-[#19D16F] text-white text-[14px] text-center py-3 rounded-sm w-full mt-4"
                      >
                      Proceed To Checkout
                    </button>
                      </Link>
                    
                  </div>
                </div>
              </Container>
             








            </>
          ) : (
            <EmptyCart />
          )}
        </Container>
        ) : (
          <NoAccessToCart />
        )}
      
    </div>
  );
};

export default CartPage;
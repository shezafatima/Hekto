"use client"
import Container from "../../../components/Container";

import Loading from "../../../components/Loading";

import { Button } from "@/components/ui/button";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../../../components/ui/tooltip";
import { urlFor } from "@/sanity/lib/image";
import useCartStore from "../../../../../store";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import AddToCartIcon from "../../../components/AddToCartIcon";
import Zoom from "../../../components/Zoom";
import EmptyWishlist from "../../../components/EmptyWishlist";

const WishlistPage = () => {
  const [isClient, setIsClient] = useState(false);



  const {
    removeWishlistItem,
    getWishlistItems,
  } = useCartStore();

  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return <Loading />;
  }
  const wishlistProducts = getWishlistItems();


  const handleDeleteProduct = (id: string) => {
    removeWishlistItem(id);
    toast.success("Product deleted successfully!");
  };



  return (
    <div className="bg-gray-50 pb-52 md:pb-10">
        <Container>
          {wishlistProducts?.length ? (
            <>
              <div className="bg-[#F6F5FF] h-[186px] px-[50px] md:px-[150px]">
                <h1 className="text-[36px] text-[#101750] flex items-center pt-14 font-semibold ">
                  Wishlist
                </h1>
                <div className="mt-2 flex items-center gap-3 flex-wrap">
                  <Link href="/" className="text-black text-[16px]">
                    Home .{" "}
                  </Link>
                  <Link href="/" className="text-black text-[16px]">
                    Pages .{" "}
                  </Link>
                  <Link href="/wishlist" className="text-[#FB2E86] text-[16px]">
                    Wishlist{" "}
                  </Link>
                </div>
              </div>

              <Container className="flex">
              <div className="">
                <div>

             

              {wishlistProducts?.map(({ product }) => {
                
                return (
                  <div key={product?._id}>
                    <div className="lg:flex grid grid-cols-1 mt-10 ">
                      <div className="flex">

                      <div>
                        

                     

                      {product?.image && (
                        <Image
                          src={urlFor(product?.image).url()}
                          alt="cart"
                          width={1000}
                          height={1000}
                          className="md:w-[300px] w-[250px]"
                          />
                        )}
                        </div>
                     
                      </div>
                       <div className="flex flex-col justify-center mx-8 flex-wrap">
                                      <div className="flex gap-4 items-center flex-wrap">
                                        <h1 className="text-[#151875] text-[18px] text-center font-semibold">
                                          {product.name}
                                        </h1>
                                        <div className=" flex items-center gap-2">
                                          <div className="w-[10px] h-[10px] bg-[#DE9034] rounded-full"></div>
                                          <div className="w-[10px] h-[10px] bg-[#EC42A2] rounded-full"></div>
                                          <div className="w-[10px] h-[10px] bg-[#8568FF] rounded-full"></div>
                                        </div>
                                      </div>
                                      <div className="flex mt-2 gap-4 flex-wrap">
                                        <p className="text-[#151875] text-[16px] ">${product.price} </p>
                                        <p className="text-[#FB2E86] text-[16px] ">20% OFF</p>
                                        <Image width={1000} height={1000} src="/Four Star.png" alt="" className="w-20 h-5 flex items-center justify-center" />
                                      </div>
                                      <div>
                                        <p className="text-[17px] text-[#9295AA] md:w-[591px]">
                                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                          Magna in est adipiscing in phasellus non in justo.
                                        </p>

                                      </div>
                                      <div className="flex  items-center justify-center">
                                       <Zoom product={product}/>
                                       <AddToCartIcon product={product}/>
                                       
                                      </div>
                                      
                                    <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Button
                              onClick={() => handleDeleteProduct(product?._id)}
                              className=" px-[6px] flex items-center justify-center mt-4  text-white bg-black "
                            >
                              Delete
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent className="font-bold bg-red-600">
                            Delete from wishlist
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                              </div>
                     
                      
                     
                    </div>
                    <hr className="mt-8" />

                    <div></div>
                    
                  </div>
                  
                );
              })}
              </div>
              
              </div>
             
              </Container>
             







            </>
          ) : (
            <EmptyWishlist/>
          )}
        </Container>
      
    </div>
  );
};

export default WishlistPage;
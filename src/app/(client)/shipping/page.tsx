"use client";
import React from 'react'
import ShippingForm from '../../components/ShippingForm'


import Container from "../../components/Container";
import EmptyCart from "../../components/EmptyCart";
import Loading from "../../components/Loading";

import PriceFormatter from "../../components/PriceFormatter";


import { urlFor } from "@/sanity/lib/image";
import useCartStore from "../../../../store";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import {Metadata, createCheckoutSession } from '../../../../actions/createCheckoutSession';
import { useAuth, useUser } from "@clerk/nextjs";

const ShippingPage = () => {
  const [isClient, setIsClient] = useState(false);
  const [loading,setLoading] = useState(false);
  const { isSignedIn } = useAuth();

  const {

    getTotalPrice,
    
   

    getGroupedItems,
  } = useCartStore();
useEffect(() => {
    setIsClient(true);
  },[]);
  

  if (!isClient) {
    return <Loading />;
  }
  const cartProducts = getGroupedItems();
 

  return (
    <div className="bg-gray-50 pb-52 md:pb-10">
        <Container>
          {cartProducts?.length ? (
            <>
              <div className="bg-[#F6F5FF]  h-[186px] px-[50px] md:px-[150px]">
                <h1 className="text-[36px] text-[#101750] flex items-center pt-14 font-semibold ">
                  Shipping Page
                </h1>
                <div className="mt-2 flex items-center gap-3 flex-wrap">
                  <Link href="/" className="text-black text-[16px]">
                    Home .{" "}
                  </Link>
                  <Link href="/" className="text-black text-[16px]">
                    Pages .{" "}
                  </Link>
                  <Link href="/faq" className="text-[#FB2E86] text-[16px]">
                    Shipping Info{" "}
                  </Link>
                </div>
              </div>

              <Container >
              <div className="flex flex-col lg:flex-row items-center lg:justify-between">
                <ShippingForm/>
      
                <div className=''>


              {cartProducts?.map(({ product }) => {
                
                return (
                  <div key={product?._id}>
                    <div className=" flex mt-10 ">
                      <div className="flex">

                      <div>
                        

                      

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
                        {`${product?.name?.substring(0, 20)}...`}
                        </h1>
                        <p className="text-[#A1A8C1] text-[12px]">
                          Color Brown
                        </p>
                        {/* <p className="text-[#A1A8C1] text-[12px]">
                          Status :{product?.status}
                        </p> */}
                      </div>
                      </div>
                      <div className="flex justify-center items-center mx-16">
                        <h1 className="text-[14px] font-semibold text-[#15245E]">
                          ${product?.price}
                        </h1>
                      </div>
                     
                      
                    </div>
                    <hr className="mt-8" />

                    
                    
                  </div>
                  
                );
              })}
              </div>
             
              </div>
              <div className='flex  lg:justify-end flex-row lg:items-end justify-center items-center
               px-20 mt-8'>
              
              <div className="flex    flex-col flex-wrap">
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
              </div>
              </Container>
            








            </>
          ) : (
            <EmptyCart />
          )}
        </Container>
      
    </div>
  );
};

export default ShippingPage;






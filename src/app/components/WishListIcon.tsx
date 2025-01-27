"use client";

import { Heart } from 'lucide-react'
import React from "react";


import useCartStore from "../../../store";

import Link from 'next/link';


const WishList = () => {
  const { wishlistItems } = useCartStore();
  return (
    <Link href={"/wishlist"} className="group relative mx-2">
      <Heart className="w-5 h-5  text-white " />
      <span className="absolute -top-2 -right-1  text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center">
        {wishlistItems.length ? wishlistItems.length : 0}
      </span>
    </Link>
  )
};

export default WishList;
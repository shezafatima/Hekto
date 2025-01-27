"use client";

import React from "react";
import toast from "react-hot-toast";
import useCartStore from "../../../store";
import { Product } from "../../../types/products";
import {  ShoppingCart } from "lucide-react";

interface Props {
  product: Product;
  className?: string;
}

const AddToCartIcon = ({ product }: Props) => {
  const { addItem } = useCartStore();
 

  return (
    <div className="w-full h-12 flex items-center">
    
        
        <button
          onClick={() => {
            addItem(product);
                toast.success(`${product?.name?.substring(0, 12)}... added to wishlist successfully!`);
              }
          }
       
          
        >
          <ShoppingCart className="w-5   text-[#0D134E] " />
        </button>
      
    </div>
  );
};

export default AddToCartIcon;
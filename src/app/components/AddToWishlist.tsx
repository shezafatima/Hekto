"use client";

import React from "react";
import toast from "react-hot-toast";
import useCartStore from "../../../store";
import { Product } from "../../../types/products";
import { Heart } from "lucide-react";
interface Props {
  product: Product;
  className?: string;
}

const AddToWishlist = ({ product }: Props) => {
  const {  addWishlistItem} = useCartStore();
 
  

  return (
    <div className="w-full h-12 flex items-center">
    
        
        <button
          onClick={() => {
            addWishlistItem(product);
                toast.success(`${product?.name?.substring(0, 12)}... added to wishlist successfully!`);
              }
          }
       
          
        >
          <Heart className="w-5 h-5  text-[#0D134E] " />
        </button>
      
    </div>
  );
};

export default AddToWishlist;
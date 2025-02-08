"use client";

import { client } from "@/sanity/lib/client";
import { Trash2 } from "lucide-react";
import toast from "react-hot-toast";

export default function DeleteButton({ productId }: { productId: string }) {
  const deleteProduct = async () => {
    try {
      await client.delete(productId);
      
      window.location.reload(); 
    } catch (error) {
      console.error("Error deleting product:", error);
      
    }
  };

  return (
    <button
      onClick={async () => {
        await deleteProduct();
        toast.success(`Product Deleted successfully!`);
    }}
      
      className="p-2  rounded-sm  text-white bg-[#FB2E86] hover:bg-transparent hover:border hover:text-[#FB2E86] hover:border-[#FB2E86]"
    >
      <Trash2/>
    </button>
  );
}

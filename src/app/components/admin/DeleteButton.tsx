"use client";

import { client } from "@/sanity/lib/client";
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
      
      className="py-2 text-xs rounded-sm px-4 text-white bg-[#FB2E86] hover:bg-transparent hover:border hover:text-[#FB2E86] hover:border-[#FB2E86]"
    >
      Delete
    </button>
  );
}

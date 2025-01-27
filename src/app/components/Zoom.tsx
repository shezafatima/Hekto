"use client";

import React, { useState } from "react";
import { ZoomIn } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image"; 
import Conatainer from "./Container";

interface Product {
  image?: { asset: { _ref: string } }; 
}

interface Props {
  product: Product;
}

const Zoom = ({ product }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Conatainer>
      <div className="flex items-center justify-center">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <button>
              <ZoomIn className="text-[#2F1AC4] w-5  cursor-pointer" />
            </button>
          </DialogTrigger>

          <DialogOverlay />
          <DialogContent className="fixed ">
            <DialogTitle className="sr-only">Zoomed Product Image</DialogTitle>
            <div>
              {product.image?.asset?._ref ? (
                <Image
                  src={urlFor(product.image.asset._ref).url()} 
                  width={1000}
                  height={1000}
                  alt="Zoomed Product"
                  className="max-w-full max-h-[80vh] object-contain rounded-md"
                />
              ) : (
                <p>No Image Available</p>
              )}
              <DialogClose></DialogClose>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </Conatainer>
  );
};

export default Zoom;

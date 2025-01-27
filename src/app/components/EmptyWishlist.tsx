import React from 'react'
import Link from 'next/link';
import { motion } from "motion/react";
import { Heart } from "lucide-react";

function EmptyWishlist() {
    return (
        <div className="py-10 md:py-20 bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full space-y-8"
          >
            <motion.div
            //   animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
            //   transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              
            >
        
              <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="flex justify-center items-center "
              >
                <Heart size={80} className="text-[#0D134E]" />
              </motion.div>
            </motion.div>
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">
              You don&apos;t have any products in the wishlist yet.
              </h2>
              <p className="text-gray-600">
              You will find a lot of interesting products on our &quot;Products&quot; page.
              </p>
            </div>
            <Link
              href={"/products"}
              className="block border  text-center py-2.5 rounded-full text-sm tracking-wide text-white  bg-[#FB2E86] hover:bg-transparent hover:border hover:text-[#FB2E86] hover:border-[#FB2E86]   "
            >
              Discover Products
            </Link>
          </motion.div>
        </div>
      );
}

export default EmptyWishlist
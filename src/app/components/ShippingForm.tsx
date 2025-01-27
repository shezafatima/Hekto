
"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import useCartStore from "../../../store";
import { useRouter } from "next/navigation";


const ShippingForm = () => {
  const [address, setAddress] = useState("");
  const [emailno, setEmailno] = useState("");
  const [firstname, setFirstname] = useState("");
  const [city, setCity] = useState("");
  const [postalcode, setPostalcode] = useState("");
  const [error] = useState("");

//  if (
//       !address ||
//       !firstname ||
//       !emailno ||
//       !city ||
//       !postalcode ||
//       parseFloat(firstname) <= 0
//     ) {
//       setError("Please provide complete information.");
//       return;
//     }
const router = useRouter();
const resetCart = useCartStore((state) => state.resetCart);
const handleSubmit = async (event: React.FormEvent) => {
  event.preventDefault();
  // Add your form submission logic here
  resetCart();
  // If form submission is successful, redirect to /ordercompleted
  router.push('/ordercompleted');
};

  return (
    <div className="bg-gray-200 p-8 rounded-lg lg:mt-0 mt-12">
      <h1 className="text-[#1D3178] text-xl font-bold">Contact Information</h1>

      <form onSubmit={handleSubmit}  className="space-y-6">
        {/* Email or mobile */}
        <div className="mt-4">
          <input
            type="text"
            value={emailno}
            onChange={(e) => setEmailno(e.target.value)}
            required
            className="w-full p-2 border-none outline-none text-sm bg-gray-200 text-[#999eac]"
            placeholder="Email or mobile phone number"
          />
          <hr className="bg-black" />
        </div>

        {/* Keep me updated */}
        <div className="flex gap-2">
          <Checkbox className="w-4" />
          <p className="text-[#999eac] text-sm">
            Keep me up to date on news and exclusive offers
          </p>
        </div>

        <h1 className="text-[#1D3178] text-xl font-bold">Shipping Address</h1>

        {/* Name fields */}
        <div className="flex justify-between gap-4">
          <input
            type="text"
            value={firstname}
            required
            onChange={(e) => setFirstname(e.target.value)}
            className="w-full p-2 border-none outline-none text-sm bg-gray-200 text-[#999eac]"
            placeholder="First name"
          />
          <input
            type="text"
            className="w-full p-2 border-none outline-none text-sm bg-gray-200 text-[#999eac]"
            placeholder="Last name (optional)"
          />
        </div>

        {/* Address */}
        <input
          type="text"
          value={address}
          required
          onChange={(e) => setAddress(e.target.value)}
          className="w-full p-2 border-none outline-none text-sm bg-gray-200 text-[#999eac]"
          placeholder="Address"
        />

        {/* Apartment/suite (optional) */}
        <input
          type="text"
          className="w-full p-2 border-none outline-none text-sm bg-gray-200 text-[#999eac]"
          placeholder="Apartment, suite, etc. (optional)"
        />

        {/* City */}
        <input
          type="text"
          value={city}
          required
          onChange={(e) => setCity(e.target.value)}
          className="w-full p-2 border-none outline-none text-sm bg-gray-200 text-[#999eac]"
          placeholder="City"
        />

        {/* Country and Postal Code */}
        <div className="flex justify-between gap-4">
          <input
            type="text"
            className="w-full p-2 border-none outline-none text-sm bg-gray-200 text-[#999eac]"
            placeholder="Country"
            defaultValue="Pakistan"
            disabled
          />
          <input
            type="text"
            value={postalcode}
            required
            onChange={(e) => setPostalcode(e.target.value)}
            className="w-full p-2 border-none outline-none text-sm bg-gray-200 text-[#999eac]"
            placeholder="Postal Code"
          />
        </div>

        {/* Submit button */}
        <Button
          type="submit"
         
          className="py-2 rounded-sm px-4 mt-6 text-white bg-[#FB2E86] hover:bg-transparent hover:border hover:text-[#FB2E86] hover:border-[#FB2E86]"
        >
          Continue Shipping
        </Button>
      </form>

      
      {error && <p className="text-red-500 mt-2">{error}</p>}

    
    </div>
  );
};

export default ShippingForm;

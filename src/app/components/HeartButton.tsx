"use client"
import { Heart } from "lucide-react";

import React, { useState } from "react";


const HeartButton = () => {
  const [isFilled, setIsFilled] = useState(false);

  const handleHeartClick = () => {
    setIsFilled(!isFilled); // Toggle the state
  };

  return (
    <button
      onClick={handleHeartClick}
      className="border-2 text-[#151875] px-2.5 py-1.5 rounded-md"
    >
      <Heart
        className={`w-5 h-5 transition-colors ${
          isFilled ? "fill-[#151875]" : "fill-none"
        }`}
      />
    </button>
  );
};

export default HeartButton;

'use client';
import React from 'react';
import Image from 'next/image';
const BestOfAirMax = () => {
  return (
    <div>
      {/* Top Section */}
      <div className="w-full max-w-full mt-[64px] h-[52px] px-[24px] sm:px-[48px] py-[3px] flex justify-between items-center">
        {/* Left Side Text - "Best of Air Max" */}
        <div className="w-full sm:w-[161.59px] flex items-center">
          <span className="text-xl font-bold text-black">Best of Air Max</span>
        </div>

        {/* Right Side Container */}
        <div className="flex items-center gap-[12.38px] opacity-100">
          {/* Shop Text */}
          <div className="text-sm font-bold text-black hidden sm:block">
            Shop
          </div>

          {/* Left Control Icon Image */}
          <div className="w-[48px] h-[48px] flex items-center justify-center">
  <Image
    src="/left.svg" // Ensure this file is inside the "public" folder
    alt="Left Control Icon"
    width={48}
    height={48}
    className="w-[48px] h-[48px]"
  />
</div>

{/* Right Control Icon Image */}
<div className="w-[48px] h-[48px] flex items-center justify-center">
  <Image
    src="/right.svg" // Ensure this file is inside the "public" folder
    alt="Right Control Icon"
    width={48}
    height={48}
    className="w-[48px] h-[48px]"
  />
</div>
        </div>
      </div>

      {/* Hero Image Section */}
      <div className="w-full max-w-full mt-[34px] px-[6px] sm:px-[10px] pb-[30px] opacity-100 relative group">
        {/* Image */}
        <div className="w-full aspect-w-16 aspect-h-9 relative">
        <Image
  src="/Frame (1).svg" // Ensure this file is inside the "public" folder
  alt="Hero Image"
  width={800} // Adjust as needed
  height={600} // Adjust as needed
  className="w-full h-full object-cover rounded-lg"
/>
        </div>

        {/* Hover Overlay */}
        <a
          href="#"
          className="absolute inset-0 flex justify-center items-center"
        >
        </a>
      </div>
    </div>
  );
};

export default BestOfAirMax;

'use client';
import ShoppingCartIcon from '@heroicons/react/24/outline/ShoppingCartIcon';
import React from 'react';

const CartPage = () => {
  return (
    <div className="flex flex-col lg:flex-row p-6 max-w-screen-lg mx-auto">
      {/* Hero Image Section */}
      <div className="w-full lg:w-1/2 pr-6 mb-6 lg:mb-0">
        <img
          src="/details.svg"
          alt="Nike Air Force 1"
          className="w-full h-[300px] md:h-[400px] object-cover rounded-lg"
        />
      </div>

      {/* Product Info Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-between">
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-black">
          Nike Air Force 1 PLT.AF.ORM
        </h2>
        <p className="text-black mt-2 text-sm sm:text-base md:text-lg">
          Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.
        </p>
        <div className="mt-4 flex items-center">
          <span className="text-xl sm:text-2xl font-bold text-black">₹ 8,695.00</span>
        </div>

        {/* Add to Cart Button with Custom Styles */}
        <button className="mt-6 bg-black text-white py-[7.5px] px-[23.92px] flex items-center gap-2 rounded-[30px_0px_0px_0px] hover:bg-gray-800 w-full sm:w-auto transition duration-300 ease-in-out">
          <ShoppingCartIcon className="h-5 w-5 text-white" /> {/* Cart Icon */}
          <span className="text-sm sm:text-base">Add to Cart</span> {/* Button Text */}
        </button>
      </div>
    </div>
  );
};

export default CartPage;

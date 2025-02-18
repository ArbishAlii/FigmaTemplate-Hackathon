'use client';
import ShoppingCartIcon from '@heroicons/react/24/outline/ShoppingCartIcon';
import React from 'react';
// import { useRouter } from 'next/router';
const CartPage = () => {
  // const router = useRouter();
  // // const { id, name,description, price ,image} = router.query;
  // console.log(router.query)
  return (
    <div className="flex flex-col lg:flex-row p-6 max-w-screen-lg mx-auto">
      {/* Hero Image Section */}
      <div className="w-full lg:w-1/2 pr-6 mb-6 lg:mb-0">
        <img
          src="img.png"
          alt="Nike Air Force 1"
          className="w-full h-[300px] md:h-[400px] object-cover rounded-lg"
        />
      </div>

      {/* Product Info Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-between">
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-black">
          {/* {name} */}
        </h2>
        <p className="text-black mt-2 text-sm sm:text-base md:text-lg">
          {/* {description} */}
        </p>
        <div className="mt-4 flex items-center">
          <span className="text-xl sm:text-2xl font-bold text-black">₹ </span>
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

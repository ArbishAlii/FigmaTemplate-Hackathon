import React from 'react';
import Link from 'next/link';

const CheckoutSummary = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-7xl mx-auto flex flex-col sm:flex-row mt-6">
            {/* Product Section: Using Flex for Horizontal Layout */}
            <div className="flex flex-wrap sm:flex-nowrap w-full mb-6 sm:mb-0">
                {/* Product 1 */}
                <div className="w-full sm:w-1/2 mb-6 sm:mb-0 sm:pr-6">
                    <div className="flex w-full">
                        {/* Product Image */}
                        <div className="w-1/3">
                            <img
                                src="/buy.svg" // Replace with actual product image
                                alt="Nike Product"
                                className="w-full h-auto object-cover rounded-md"
                            />
                        </div>
                        {/* Product Details */}
                        <div className="w-2/3 pl-4">
                            <p className="text-lg font-semibold">Nike Dri-FIT ADV TechKnit Ultra</p>
                            <p className="text-sm text-gray-500">₹ 3,895.00</p>
                            <div className="mt-4">
                                <p className="text-sm">Mens Short-Sleeve Running Top</p>
                                <p className="text-xs text-gray-500">Ashen Slate/Cobalt Bliss</p>
                                <p className="text-sm">Size: L</p>
                                <p className="text-sm">Qty: 1</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product 2 */}
                <div className="w-full sm:w-1/2 mb-6 sm:mb-0 sm:pl-6">
                    <div className="flex w-full">
                        {/* Product Image */}
                        <div className="w-1/3">
                            <img
                                src="/nike max.jpg" // Replace with actual product image
                                alt="Nike Product"
                                className="w-full h-auto object-cover rounded-md"
                            />
                        </div>
                        {/* Product Details */}
                        <div className="w-2/3 pl-4">
                            <p className="text-lg font-semibold">Nike Air Max 97 SE</p>
                            <p className="text-sm text-gray-500">₹ 16,995.00</p>
                            <div className="mt-4">
                                <p className="text-sm">Mens Shoes</p>
                                <p className="text-xs text-gray-500">Flat Pewter/Light Bone/Black/White</p>
                                <p className="text-sm">Size: 8</p>
                                <p className="text-sm">Qty: 1</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Section: Summary */}
            <div className="w-full sm:w-1/3 sm:pl-6 mt-6 sm:mt-0">
                <div className="flex flex-col w-full">
                    {/* Free Delivery */}
                    <div className="flex items-center justify-between mb-4">
                        <p className="text-xl font-semibold">Free Delivery</p>
                        <span className="text-green-500 text-lg"></span>
                    </div>
                    <div className="text-gray-700 mb-6">
                        <p className="text-sm">Applies to orders of ₹ 14,000.00 or more.</p>
                        <a href="#" className="text-blue-600 text-xs hover:underline">View details</a>
                    </div>

                    {/* Price Summary */}
                    <div className="border-t border-gray-300 py-4">
                        <div className="flex justify-between mb-4">
                            <p className="font-semibold">Bag</p>
                            <p className="text-lg font-bold">₹ 20,890.00</p>
                        </div>
                        <div className="flex justify-between mb-4">
                            <p className="font-semibold">Estimated Delivery & Handling</p>
                            <p className="text-green-500">Free</p>
                        </div>
                        <div className="flex justify-between mb-4">
                            <p className="font-semibold">Total</p>
                            <p className="text-lg font-bold">₹ 20,890.00</p>
                        </div>
                    </div>

                    <div className="mt-6">
                        <Link href="/CheckoutPage">
                            <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800">
                                Member Checkout
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutSummary;

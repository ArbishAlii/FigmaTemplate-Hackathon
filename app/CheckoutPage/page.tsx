import React from 'react';
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaApplePay } from 'react-icons/fa';  // For payment icons

const CheckoutPage = () => {
    return (
        <div className="w-full max-w-screen-xl mx-auto mt-6 p-6 flex flex-col lg:flex-row space-x-0 lg:space-x-6">
            {/* Left Side: Form */}
            <div className="w-full lg:w-2/3 bg-white p-6 rounded-lg shadow-md mb-6 lg:mb-0">
                <h2 className="text-2xl font-semibold mb-4">How would you like to get your order?</h2>
                
                <div className="mb-6">
                    <p className="text-lg font-medium">Customs Regulation Notice</p>
                    <p className="text-sm text-gray-600">
                        Customs regulation for India requires a copy of the recipients KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns.
                    </p>
                    <p className="text-sm text-blue-600">
                        <a href="#" className="hover:underline">Learn More</a>
                    </p>
                </div>

                {/* Shipping Details */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-4">Enter your name and address:</h3>
                    <input type="text" placeholder="First Name" className="w-full p-2 border border-gray-300 rounded-md mb-2" />
                    <input type="text" placeholder="Last Name" className="w-full p-2 border border-gray-300 rounded-md mb-2" />
                    <input type="text" placeholder="Address Line 1" className="w-full p-2 border border-gray-300 rounded-md mb-2" />
                    <input type="text" placeholder="Address Line 2" className="w-full p-2 border border-gray-300 rounded-md mb-2" />
                    <input type="text" placeholder="Address Line 3" className="w-full p-2 border border-gray-300 rounded-md mb-2" />
                    <input type="text" placeholder="Postal Code" className="w-full p-2 border border-gray-300 rounded-md mb-2" />
                    <input type="text" placeholder="Locality" className="w-full p-2 border border-gray-300 rounded-md mb-2" />
                    <input type="text" placeholder="State/Territory" className="w-full p-2 border border-gray-300 rounded-md mb-2" />
                    <input type="text" value="India" disabled className="w-full p-2 border border-gray-300 rounded-md mb-2" />
                    <div className="mb-4">
                        <input type="checkbox" className="mr-2" /> Save this address to my profile
                        <input type="checkbox" className="ml-4" /> Make this my preferred address
                    </div>
                </div>

                {/* Contact Information */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-4">Whats your contact information?</h3>
                    <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded-md mb-2" />
                    <input type="tel" placeholder="Phone Number" className="w-full p-2 border border-gray-300 rounded-md" />
                </div>

                {/* PAN Details */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-4">Whats your PAN?</h3>
                    <input type="text" placeholder="Enter your PAN" className="w-full p-2 border border-gray-300 rounded-md mb-2" />
                    <div className="mb-4">
                        <input type="checkbox" className="mr-2" /> Save PAN details to Nike Profile
                    </div>
                </div>

                {/* Terms & Consent */}
                <div className="mb-6">
                    <input type="checkbox" className="mr-2" /> I have read and consent to eShopWorld processing my information in accordance with the Privacy Statement and Cookie Policy.
                </div>

                {/* Continue Button */}
                <div className="flex justify-end">
                    <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">
                        Continue
                    </button>
                </div>
            </div>

            {/* Right Side: Order Summary */}
            <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
                
                {/* Product Images and Summary */}
                <div className="mb-6">
                    <img src="buy.svg" alt="Nike Dri-FIT ADV TechKnit Ultra Men's Short-Sleeve Running Top" className="w-full mb-4" />
                    <div className="flex justify-between mb-4">
                        <p className="font-semibold">Nike Dri-FIT ADV TechKnit Ultra Mens Short-Sleeve Running Top</p>
                        <span>₹ 3,895.00</span>
                    </div>
                    <p>Qty: 1 | Size: L</p>
                </div>

                <div className="mb-6">
                    <img src="buy2.svg" alt="Nike Air Max 97 SE Men's Shoes" className="w-full mb-4" />
                    <div className="flex justify-between mb-4">
                        <p className="font-semibold">Nike Air Max 97 SE Mens Shoes</p>
                        <span>₹ 16,995.00</span>
                    </div>
                    <p>Qty: 1 | Size: UK 8</p>
                </div>

                {/* Order Total */}
                <div className="mb-6">
                    <div className="flex justify-between mb-2">
                        <span className="font-semibold">Subtotal</span>
                        <span>₹ 20,890.00</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span className="font-semibold">Delivery/Shipping</span>
                        <span>Free</span>
                    </div>
                    <div className="flex justify-between mb-4">
                        <span className="font-semibold">Total</span>
                        <span className="font-bold">₹ 20,890.00</span>
                    </div>
                    <div className="text-sm text-gray-500">
                        <p>The total reflects the price of your order, including all duties and taxes.</p>
                        <p>Arrives Mon, 27 Mar - Wed, 12 Apr</p>
                    </div>
                </div>

                {/* Payment Methods */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-4">Payment Methods</h3>
                    <div className="flex space-x-4">
                        <FaCcVisa size={30} />
                        <FaCcMastercard size={30} />
                        <FaCcPaypal size={30} />
                        <FaApplePay size={30} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;

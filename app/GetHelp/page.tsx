import React from 'react';
import Image from 'next/image';

const HelpPage = () => {
  return (
    <div>
      {/* Navbar with Search */}
      <div className="text-black py-4 px-6 flex flex-col sm:flex-row items-center">
        <h1 className="text-2xl font-bold mb-4 sm:mb-0">GET HELP</h1>
        <div className="relative sm:flex ml-4 mt-4 sm:mt-0">
          <input
            type="text"
            placeholder="Search"
            className="w-[180px] sm:w-[250px] md:w-[350px] h-[40px] px-4 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      {/* Payment Options Section with Image on the Right */}
      <div className="flex flex-wrap py-10 px-6">
        {/* Text content on the left (70%) */}
        <div className="w-full sm:w-7/12 pr-8 mb-6 sm:mb-0">
          <h2 className="text-2xl font-semibold text-black mb-4">
            WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
          </h2>
          <p className="text-black mb-6">
            We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:
            Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro.
            If you enter your PAN information at checkout, you will be able to pay for your order with PayTM or a local credit or debit card.
            Nike Members can store multiple debit or credit cards in their profile for faster checkout. If you are not already a Member, join us today.
          </p>

          {/* Buttons */}
          <div className="space-x-4">
            <button className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800">
              JOIN US
            </button>
            <button className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800">
              SHOP NIKE
            </button>
          </div>

          {/* FAQs Section */}
          <h3 className="text-xl font-semibold text-black mt-8">FAQs</h3>
          <div className="text-black mb-4">
            <p><strong>Does my card need international purchases enabled?</strong></p>
            <p>Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled. Some banks may charge a small transaction fee for international orders.</p>
          </div>

          <div className="text-black mb-4">
            <p><strong>Can I pay for my order with multiple methods?</strong></p>
            <p>No, payment for Nike orders can not be split between multiple payment methods.</p>
          </div>

          <div className="text-black mb-4">
            <p><strong>What payment method is accepted for SNKRS orders?</strong></p>
            <p>You can use any accepted credit card to pay for your SNKRS order.</p>
          </div>

          <div className="text-black mb-4">
            <p><strong>Why do not I see Apple Pay as an option?</strong></p>
            <p>To see Apple Pay as an option in the Nike App or on Nike.com, you will need to use a compatible Apple device running the latest OS, be signed in to your iCloud account, and have a supported card in your Wallet. Additionally, you will need to use Safari to use Apple Pay on Nike.com.</p>
          </div>

          <div className="mt-4 text-black">
            <p>Was this answer helpful?</p>
            {/* Add thumbs up/down icons here */}
            <p>👍🏻 👎🏻</p>
          </div>
        </div>

        {/* Image on the Right (30%) */}
        <div className="w-full sm:w-3/12 mb-6 sm:mb-0 sm:pl-10 pl-48 ml-36">
        <Image
  src="/side.svg" // Ensure this file is inside the "public" folder
  alt="Nike Payment Options"
  width={500} // Adjust as needed
  height={300} // Adjust as needed
  className="w-full h-auto object-cover rounded-md"
/>
        </div>
      </div>

      {/* Additional Links */}
      <div className="py-6 text-center text-blue-600">
        <p><a href="#">WHAT ARE NIKE'S DELIVERY OPTIONS?</a></p>
        <p><a href="#">HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</a></p>
      </div>
    </div>
  );
};

export default HelpPage;

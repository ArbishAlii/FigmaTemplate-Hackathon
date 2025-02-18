'use client'
import React from 'react'
import Image from 'next/image'

export const Featured = () => {
    return (
        <div className="w-full max-w-full mt-[34px] px-[6px] sm:px-[10px] pb-[30px] opacity-100">
            {/* Image 1 */}
            <div className="w-full aspect-w-16 aspect-h-9 mb-4">
                <a href="#" className="block w-full h-full">
                <Image
      src="/Frame2.svg" // Ensure this file is inside the "public" folder
      alt="Hero Image"
      width={800} // Adjust width as needed
      height={600} // Adjust height as needed
      className="w-full h-full object-cover rounded-lg"
    />
                </a>
            </div>

            {/* Image 2 */}
            <div className="w-full aspect-w-16 aspect-h-9 mb-4">
                <a href="/CheckoutSummary" className="block w-full h-full">
                <Image
      src="/Frame3.svg" // Ensure this file is inside the "public" folder
      alt="Hero Image"
      width={800} // Adjust width as needed
      height={600} // Adjust height as needed
      className="w-full h-full object-cover rounded-lg"
    />
                </a>
            </div>

            {/* Image 3 */}
            <div className="w-full aspect-w-16 aspect-h-9 mb-4">
                <a href="/AnotherPage" className="block w-full h-full">
                <Image
      src="/Frame5.svg" // Ensure this file is inside the "public" folder
      alt="Hero Image"
      width={800} // Adjust width as needed
      height={600} // Adjust height as needed
      className="w-full h-full object-cover rounded-lg"
    />
                </a>
            </div>

            {/* Image 4 */}
            <div className="mb-4">
                <a href="/AnotherPage" className="block w-full h-full">
                <Image
      src="/Frame4.svg" // Ensure this file is inside the "public" folder
      alt="Hero Image"
      width={800} // Adjust width as needed
      height={600} // Adjust height as needed
      className="w-full h-full object-cover rounded-lg"
    />
                </a>
            </div>

            
            <div className="flex justify-center items-center mt-10">
            <Image
      src="/frame6.svg" // Ensure this file is inside the "public" folder
      alt="Hero Image"
      width={800} // Adjust width as needed
      height={600} // Adjust height as needed
      className="w-full h-full object-cover rounded-lg"
    />
            </div>
        </div>
    )
}

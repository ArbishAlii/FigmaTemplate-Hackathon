'use client'
import React from 'react'

export const Featured = () => {
    return (
        <div className="w-full max-w-full mt-[34px] px-[6px] sm:px-[10px] pb-[30px] opacity-100">
            {/* Image 1 */}
            <div className="w-full aspect-w-16 aspect-h-9 mb-4">
                <a href="#" className="block w-full h-full">
                    <img
                        src="/Frame2.svg"
                        alt="Hero Image"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </a>
            </div>

            {/* Image 2 */}
            <div className="w-full aspect-w-16 aspect-h-9 mb-4">
                <a href="/CheckoutSummary" className="block w-full h-full">
                    <img
                        src="/Frame3.svg"
                        alt="Hero Image"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </a>
            </div>

            {/* Image 3 */}
            <div className="w-full aspect-w-16 aspect-h-9 mb-4">
                <a href="/AnotherPage" className="block w-full h-full">
                    <img
                        src="/frame5.svg"
                        alt="Hero Image"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </a>
            </div>

            {/* Image 4 */}
            <div className="mb-4">
                <a href="/AnotherPage" className="block w-full h-full">
                    <img
                        src="/frame4.svg"
                        alt="Hero Image"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </a>
            </div>

            
            <div className="flex justify-center items-center mt-10">
                <img
                    src="/frame6.svg"
                    alt="Hero Image"
                    className="w-[90%] max-w-[300px] sm:max-w-[400px] md:max-w-[500px] h-auto object-contain rounded-lg"
                />
            </div>
        </div>
    )
}

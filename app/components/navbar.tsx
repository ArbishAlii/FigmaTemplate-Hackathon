'use client'
import { useState } from "react";
import Image from "next/image";
import { MagnifyingGlassIcon, HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Header Section (top bar) */}
      <header className="w-full h-9 bg-gray-100 flex items-center justify-between px-4 shadow-md">
        <div className="relative">
          <Link href="/">
            <Image src="/Vector.svg" alt="Logo" width={19.2} height={17.97} />
          </Link>
        </div>
        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } flex-col sm:flex-row sm:flex items-center gap-4 text-sm text-black`}
        >
          <a href="#" className="hover:text-black">Find a Store</a>
          <span>|</span>
          <a href="/GetHelp" className="hover:text-black">Help</a>
          <span>|</span>
          <a href="/JoinUs" className="hover:text-black">Join Us</a>
          <span>|</span>
          <a href="/LoginForm" className="hover:text-black">Signup</a>
        </nav>
        <button
          className="sm:hidden flex items-center text-black hover:text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </header>

      {/* Navbar Section (main navbar) */}
      <header className="w-full bg-white flex items-center justify-between px-4 py-2 shadow-md">
        {/* Left side - Logo */}
        <Link href="/">
          <Image src="/Vector1.svg" alt="Logo" width={58.85} height={20.54} />
        </Link>
        
        {/* Center - Menu Items */}
        <nav
          className={`sm:flex items-center justify-center gap-8 text-sm text-black ${
            menuOpen
              ? "flex flex-col absolute top-16 left-0 right-0 bg-white shadow-lg p-4 z-50"
              : "hidden sm:flex"
          }`}
        >
          <a href="/Features" className="hover:text-black py-2">New & Featured</a>
          <a href="#men" className="hover:text-black py-2">Men</a>
          <a href="#women" className="hover:text-black py-2">Women</a>
          <a href="#kids" className="hover:text-black py-2">Kids</a>
          <a href="#sale" className="hover:text-black py-2">Sale</a>
          <a href="#snkrs" className="hover:text-black py-2">SNKRS</a>
        </nav>

        {/* Right side - Search Box and Icons */}
        <div className="flex items-center gap-4">
          {/* Search Box (Visible on larger screens only) */}
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Search"
              className="w-[180px] h-[40px] px-9 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <MagnifyingGlassIcon className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
          </div>

          {/* Favorite Heart Icon */}
          <div className="flex items-center justify-center w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] gap-3 px-2 py-3">
            <HeartIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 hover:text-red-500 cursor-pointer" />
          </div>

          {/* Bag Icon */}
          <div className="flex items-center justify-center w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] gap-3 px-2 py-3">
            <ShoppingBagIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 hover:text-black cursor-pointer" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;

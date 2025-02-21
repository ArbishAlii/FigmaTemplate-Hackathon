// components/Footer.tsx
import React from 'react';
import Link from 'next/link'; 
import { FaTwitter, FaFacebookF, FaYoutube, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <h3 className="text-sm font-semibold mb-4">FIND A STORE</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:underline">Become Link Member</Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">Sign Up for Email</Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">Student Discounts</Link>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-sm font-semibold mb-4">GET HELP</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:underline">Order Status</Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">Delivery</Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">Returns</Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">Payment Options</Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">Contact Us on Nike.com</Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">Contact Us on All Other Inquiries</Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-sm font-semibold mb-4">ABOUT NIKE</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:underline">News</Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">Careers</Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">Investors</Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">Sustainability</Link>
            </li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-start lg:justify-end items-start gap-4">
          <FaTwitter className="text-lg cursor-pointer hover:text-gray-400" />
          <FaFacebookF className="text-lg cursor-pointer hover:text-gray-400" />
          <FaYoutube className="text-lg cursor-pointer hover:text-gray-400" />
          <FaInstagram className="text-lg cursor-pointer hover:text-gray-400" />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto mt-8 flex flex-wrap justify-between items-center text-xs text-gray-400 gap-4">
        {/* Country and Copyright */}
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-lg" />
          <p>India</p>
          <p>© 2023 Nike, Inc. All Rights Reserved</p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-end">
          <Link href="#" className="hover:underline">Guides</Link>
          <Link href="#" className="hover:underline">Terms of Sale</Link>
          <Link href="#" className="hover:underline">Terms of Use</Link>
          <Link href="#" className="hover:underline">Nike Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

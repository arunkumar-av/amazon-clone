import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#131A22] text-white">
      {/* Back to top button */}
      <div className="bg-[#232F3E] p-3 text-center cursor-pointer hover:bg-[#37475A]">
        <p className="text-sm">Back to top</p>
      </div>

      {/* Main footer content */}
      <div className="py-10 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        <div>
          <h3 className="font-bold text-lg mb-3">Get to Know Us</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:underline cursor-pointer">Careers</li>
            <li className="hover:underline cursor-pointer">Blog</li>
            <li className="hover:underline cursor-pointer">About Amazon</li>
            <li className="hover:underline cursor-pointer">Investor Relations</li>
            <li className="hover:underline cursor-pointer">Amazon Devices</li>
            <li className="hover:underline cursor-pointer">Amazon Science</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-3">Make Money with Us</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:underline cursor-pointer">Sell products on Amazon</li>
            <li className="hover:underline cursor-pointer">Sell on Amazon Business</li>
            <li className="hover:underline cursor-pointer">Sell apps on Amazon</li>
            <li className="hover:underline cursor-pointer">Become an Affiliate</li>
            <li className="hover:underline cursor-pointer">Advertise Your Products</li>
            <li className="hover:underline cursor-pointer">Self-Publish with Us</li>
            <li className="hover:underline cursor-pointer">Host an Amazon Hub</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-3">Amazon Payment Products</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:underline cursor-pointer">Amazon Business Card</li>
            <li className="hover:underline cursor-pointer">Shop with Points</li>
            <li className="hover:underline cursor-pointer">Reload Your Balance</li>
            <li className="hover:underline cursor-pointer">Amazon Currency Converter</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-3">Let Us Help You</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:underline cursor-pointer">Amazon and COVID-19</li>
            <li className="hover:underline cursor-pointer">Your Account</li>
            <li className="hover:underline cursor-pointer">Your Orders</li>
            <li className="hover:underline cursor-pointer">Shipping Rates & Policies</li>
            <li className="hover:underline cursor-pointer">Returns & Replacements</li>
            <li className="hover:underline cursor-pointer">Manage Your Content and Devices</li>
            <li className="hover:underline cursor-pointer">Amazon Assistant</li>
            <li className="hover:underline cursor-pointer">Help</li>
          </ul>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="border-t border-gray-700 py-6 text-center">
        <div className="mb-4">
          <Link href="/">
            <div className="cursor-pointer">
              <span className="text-2xl font-bold text-white">amazon<span className="text-[#FF9900]">.clone</span></span>
            </div>
          </Link>
        </div>
        <p className="text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Amazon Clone. All rights reserved. This is a demo project.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

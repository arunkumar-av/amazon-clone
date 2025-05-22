'use client';

import React from 'react';
import Link from 'next/link';
import CartIcon from '@/components/product/CartIcon';

const Header = () => {
  return (
    <header className="bg-[#131921] text-white sticky top-0 z-50">
      {/* Top Navigation Bar */}
      <div className="flex items-center p-2 flex-grow">
        {/* Logo */}
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0 mr-4">
          <Link href="/">
            <div className="cursor-pointer">
              <span className="text-2xl font-bold text-white">amazon<span className="text-[#FF9900]">.clone</span></span>
            </div>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-[#FEBD69] hover:bg-[#F3A847]">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            type="text"
            placeholder="Search products"
          />
          <div className="h-10 p-2 bg-[#F3A847] rounded-r-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-[#131921]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </div>

        {/* Right Side Navigation */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>Hello, Sign in</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>

          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>          <CartIcon />
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-[#232F3E] text-white text-sm">
        <p className="link flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          All
        </p>
        <p className="link">Today&apos;s Deals</p>
        <p className="link">Customer Service</p>
        <p className="link">Registry</p>
        <p className="link">Gift Cards</p>
        <p className="link">Sell</p>
      </div>
    </header>
  );
};

export default Header;

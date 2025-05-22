import React from 'react';
import Link from 'next/link';

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
          </div>

          <div className="relative link flex items-center">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-[#F3A847] text-center rounded-full text-black font-bold">
              0
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-10 w-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">Cart</p>
          </div>
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

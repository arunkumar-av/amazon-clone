'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useCartStore } from '@/lib/cartStore';
import Image from 'next/image';
import Link from 'next/link';

export default function Cart() {
  const { items, removeFromCart, updateQuantity, getTotalPrice } = useCartStore();
  const totalPrice = getTotalPrice();
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  if (items.length === 0) {
    return (
      <main className="bg-gray-100 min-h-screen">
        <Header />
        <div className="max-w-screen-xl mx-auto p-6">
          <div className="bg-white p-8 rounded-md shadow-sm text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mx-auto text-gray-400 mb-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            <h2 className="text-xl font-medium mb-2">Your Amazon Cart is empty</h2>
            <p className="text-gray-500 mb-4">
              Your shopping cart is waiting. Give it purpose – fill it with groceries, clothing, household supplies, electronics, and more.
            </p>
            <Link href="/products">
              <button className="bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="bg-gray-100 min-h-screen">
      <Header />
      
      <div className="max-w-screen-xl mx-auto p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Cart Items */}
          <div className="flex-grow bg-white p-6 rounded-md shadow-sm">
            <h1 className="text-3xl font-medium border-b pb-4">Shopping Cart</h1>
            
            <div className="text-right text-sm text-gray-500 mt-2 mb-4">Price</div>
            
            {items.map((item) => (
              <div key={item.id} className="border-b py-4 flex">
                <div className="relative h-36 w-36 flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                
                <div className="ml-4 flex-grow">
                  <Link href={`/product/${item.id}`}>
                    <h2 className="text-lg font-medium text-blue-600 hover:text-orange-500 hover:underline">{item.title}</h2>
                  </Link>
                  
                  <p className="text-sm text-green-600 mb-2">In Stock</p>
                  
                  {item.hasPrime && (
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-12">
                        <Image
                          src="https://links.papareact.com/fdw"
                          alt="Prime"
                          width={48}
                          height={48}
                          layout="responsive"
                        />
                      </div>
                      <span className="text-xs text-gray-500">FREE Next-day Delivery</span>
                    </div>
                  )}
                  
                  <div className="flex items-center mt-2">
                    <select 
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                      className="p-1 border rounded-md text-sm bg-gray-100 focus:ring-1 focus:ring-yellow-500"
                    >
                      {[...Array(10)].map((_, i) => (
                        <option key={i} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                    
                    <span className="mx-2 text-gray-400">|</span>
                    
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-sm text-blue-600 hover:text-orange-500 hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                
                <div className="text-right font-medium">
                  ${item.price.toFixed(2)}
                </div>
              </div>
            ))}
            
            <div className="text-right mt-4 text-lg">
              Subtotal ({totalItems} {totalItems === 1 ? 'item' : 'items'}): <span className="font-bold">${totalPrice.toFixed(2)}</span>
            </div>
          </div>
          
          {/* Checkout */}
          <div className="lg:w-72 bg-white p-6 rounded-md shadow-sm h-fit">
            <div className="text-lg mb-4">
              Subtotal ({totalItems} {totalItems === 1 ? 'item' : 'items'}): <span className="font-bold">${totalPrice.toFixed(2)}</span>
            </div>
            
            <div className="flex items-center mb-4">
              <input type="checkbox" className="h-4 w-4 text-yellow-500 focus:ring-yellow-500 border-gray-300 rounded" />
              <label className="ml-2 text-sm text-gray-700">This order contains a gift</label>
            </div>
            
            <Link href="/checkout">
              <button className="w-full bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500">
                Proceed to checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}

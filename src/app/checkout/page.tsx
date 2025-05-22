'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useCartStore } from '@/lib/cartStore';
import Link from 'next/link';

export default function Checkout() {
  const { items, clearCart, getTotalPrice } = useCartStore();
  const totalPrice = getTotalPrice();
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  });
  
  const [step, setStep] = useState(1);
  const [orderComplete, setOrderComplete] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      // Process order
      setOrderComplete(true);
      clearCart();
    }
  };
  
  if (orderComplete) {
    return (
      <main className="bg-gray-100 min-h-screen">
        <Header />
        <div className="max-w-screen-md mx-auto p-6">
          <div className="bg-white p-8 rounded-md shadow-sm text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-green-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-medium mb-2">Order Confirmed!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for your purchase. Your order has been placed successfully.
            </p>
            <p className="text-gray-600 mb-6">
              Order confirmation has been sent to <span className="font-medium">{formData.email}</span>
            </p>
            <Link href="/">
              <button className="bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] rounded-md py-2 px-6 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500">
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
          {/* Checkout Form */}
          <div className="flex-grow bg-white p-6 rounded-md shadow-sm">
            <h1 className="text-3xl font-medium border-b pb-4">Checkout ({totalItems} {totalItems === 1 ? 'item' : 'items'})</h1>
            
            <div className="flex items-center my-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-[#F3A847] text-white' : 'bg-gray-200'}`}>1</div>
              <div className={`h-1 w-16 ${step >= 2 ? 'bg-[#F3A847]' : 'bg-gray-200'}`}></div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-[#F3A847] text-white' : 'bg-gray-200'}`}>2</div>
            </div>
            
            <h2 className="text-xl font-medium mb-4">
              {step === 1 ? 'Shipping Information' : 'Payment Information'}
            </h2>
            
            <form onSubmit={handleSubmit}>
              {step === 1 ? (
                <div className="space-y-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State</label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      required
                      placeholder="XXXX XXXX XXXX XXXX"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">Name on Card</label>
                    <input
                      type="text"
                      id="cardName"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                      <input
                        type="text"
                        id="expiryDate"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleChange}
                        required
                        placeholder="MM/YY"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleChange}
                        required
                        placeholder="XXX"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                      />
                    </div>
                  </div>
                </div>
              )}
              
              <div className="mt-6 flex justify-between">
                {step === 2 && (
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="bg-gray-200 hover:bg-gray-300 rounded-md py-2 px-4 focus:outline-none"
                  >
                    Back
                  </button>
                )}
                
                <button
                  type="submit"
                  className="bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] rounded-md py-2 px-6 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 ml-auto"
                >
                  {step === 1 ? 'Continue to Payment' : 'Place Your Order'}
                </button>
              </div>
            </form>
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-72 bg-white p-6 rounded-md shadow-sm h-fit">
            <h2 className="text-lg font-medium mb-4">Order Summary</h2>
            
            <div className="space-y-2 text-sm border-b pb-4 mb-4">
              <div className="flex justify-between">
                <span>Items ({totalItems}):</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping & handling:</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between">
                <span>Total before tax:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated tax:</span>
                <span>${(totalPrice * 0.1).toFixed(2)}</span>
              </div>
            </div>
            
            <div className="flex justify-between text-lg font-bold text-red-700">
              <span>Order total:</span>
              <span>${(totalPrice * 1.1).toFixed(2)}</span>
            </div>
            
            <div className="mt-4 space-y-2">
              <h3 className="font-medium text-sm">Order Contains:</h3>
              {items.map((item) => (
                <div key={item.id} className="flex items-center text-sm">
                  <span className="bg-gray-200 text-gray-700 rounded-full w-5 h-5 flex items-center justify-center mr-2">
                    {item.quantity}
                  </span>
                  <span className="truncate">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}

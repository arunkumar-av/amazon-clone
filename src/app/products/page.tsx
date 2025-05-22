'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Sidebar from '@/components/layout/Sidebar';
import ProductCard from '@/components/product/ProductCard';
import { products, categories } from '@/lib/data';

export default function Products() {
  // In a real app, we would use useSearchParams() to get filter parameters
  // For this demo, we'll just show all products with filter UI

  return (
    <main className="bg-gray-100 min-h-screen">
      <Header />
      
      <div className="max-w-screen-2xl mx-auto pt-4">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="md:w-64 flex-shrink-0 mb-6 md:mb-0 px-4">
            <Sidebar categories={categories} />
          </div>

          {/* Main Content */}
          <div className="flex-grow px-4">
            <div className="mb-4">
              <h1 className="text-3xl font-bold">All Products</h1>
              <p className="text-sm text-gray-500">Showing {products.length} results</p>
            </div>

            {/* Sort Options */}
            <div className="flex justify-between items-center mb-6 bg-white p-3 rounded-md shadow-sm">
              <div>
                <span className="text-sm font-medium">Sort by: </span>
                <select className="text-sm border-none focus:ring-0">
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Customer Reviews</option>
                  <option>Newest Arrivals</option>
                </select>
              </div>
              <div className="flex space-x-2">
                <button className="p-1 bg-gray-100 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                  </svg>
                </button>
                <button className="p-1 bg-gray-200 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  description={product.description}
                  category={product.category}
                  image={product.image}
                  rating={Math.round(product.rating.rate)}
                  hasPrime={product.hasPrime}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8 mb-8">
              <nav className="flex items-center">
                <button className="px-3 py-1 border rounded-l-md bg-gray-100">Previous</button>
                <button className="px-3 py-1 border-t border-b bg-[#F3A847] font-bold">1</button>
                <button className="px-3 py-1 border-t border-b">2</button>
                <button className="px-3 py-1 border-t border-b">3</button>
                <button className="px-3 py-1 border rounded-r-md bg-gray-100">Next</button>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

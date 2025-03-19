import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { products } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductDetail({ params }: { params: { id: string } }) {
  // In a real app, we would fetch the product by ID from an API
  // For this demo, we'll just use the mock data
  const product = products.find(p => p.id === params.id) || products[0];
  
  return (
    <main className="bg-gray-100 min-h-screen">
      <Header />
      
      <div className="max-w-screen-2xl mx-auto p-4">
        {/* Breadcrumb */}
        <div className="text-sm breadcrumbs mb-4">
          <ul className="flex space-x-2">
            <li><Link href="/" className="text-blue-600 hover:underline">Home</Link></li>
            <li><span className="mx-2">&gt;</span></li>
            <li><Link href="/products" className="text-blue-600 hover:underline">{product.category}</Link></li>
            <li><span className="mx-2">&gt;</span></li>
            <li className="text-gray-500">{product.title}</li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="flex justify-center items-center bg-white p-4">
              <div className="relative h-[300px] w-full">
                <Image
                  src={product.image}
                  alt={product.title}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            
            {/* Product Details */}
            <div>
              <h1 className="text-xl md:text-2xl font-medium mb-2">{product.title}</h1>
              
              <div className="border-b pb-3">
                <Link href="#reviews" className="flex items-center mb-2">
                  <div className="flex">
                    {Array(Math.round(product.rating.rate))
                      .fill(0)
                      .map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 text-yellow-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                  </div>
                  <span className="text-blue-600 ml-2 text-sm">{product.rating.count} ratings</span>
                </Link>
                
                <div className="text-sm mb-2">
                  <span className="text-blue-600 hover:underline cursor-pointer">
                    {product.category}
                  </span>
                </div>
              </div>
              
              <div className="border-b py-3">
                <div className="flex items-center">
                  <span className="text-red-700 text-xs mr-1">-10%</span>
                  <span className="text-3xl font-medium">${product.price.toFixed(2)}</span>
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  List Price: <span className="line-through">${(product.price * 1.1).toFixed(2)}</span>
                </div>
                
                {product.hasPrime && (
                  <div className="flex items-center mt-2">
                    <div className="w-12">
                      <Image
                        src="https://links.papareact.com/fdw"
                        alt="Prime"
                        width={48}
                        height={48}
                        layout="responsive"
                      />
                    </div>
                    <span className="text-xs text-gray-500 ml-2">FREE Next-day Delivery</span>
                  </div>
                )}
              </div>
              
              <div className="py-3">
                <h2 className="font-medium mb-2">About this item</h2>
                <p className="text-sm text-gray-700">{product.description}</p>
              </div>
              
              <div className="mt-4 space-y-3">
                <button className="w-full bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] rounded-full py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500">
                  Add to Cart
                </button>
                <button className="w-full bg-[#FFA41C] hover:bg-[#FA8900] border border-[#FF8F00] rounded-full py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Description */}
        <div className="bg-white p-6 rounded-lg shadow-sm mt-6">
          <h2 className="text-xl font-medium mb-4">Product Description</h2>
          <p className="text-gray-700">
            {product.description}
            {/* Extended description would go here in a real product */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
          </p>
        </div>
        
        {/* Customer Reviews */}
        <div id="reviews" className="bg-white p-6 rounded-lg shadow-sm mt-6">
          <h2 className="text-xl font-medium mb-4">Customer Reviews</h2>
          
          <div className="flex items-center mb-4">
            <div className="flex mr-2">
              {Array(Math.round(product.rating.rate))
                .fill(0)
                .map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 text-yellow-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
            </div>
            <span className="font-medium">{product.rating.rate} out of 5</span>
          </div>
          
          <p className="text-sm text-gray-500 mb-4">{product.rating.count} global ratings</p>
          
          {/* Sample Reviews */}
          <div className="border-t pt-4">
            <div className="mb-4">
              <div className="flex items-center mb-1">
                <span className="font-medium mr-2">John Doe</span>
                <div className="flex">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                </div>
              </div>
              <p className="text-sm text-gray-700">Great product! Exactly as described and arrived quickly.</p>
            </div>
            
            <div>
              <div className="flex items-center mb-1">
                <span className="font-medium mr-2">Jane Smith</span>
                <div className="flex">
                  {Array(4)
                    .fill(0)
                    .map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                </div>
              </div>
              <p className="text-sm text-gray-700">Good quality but a bit pricier than I expected. Overall satisfied with my purchase.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

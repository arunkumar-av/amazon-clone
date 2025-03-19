import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Sidebar from '@/components/layout/Sidebar';
import ProductCard from '@/components/product/ProductCard';
import Carousel from '@/components/ui/Carousel';
import { products, categories, bannerImages } from '@/lib/data';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <Header />
      
      <div className="max-w-screen-2xl mx-auto">
        {/* Banner Carousel */}
        <div className="mb-8">
          <Carousel autoSlide={true} autoSlideInterval={5000}>
            {bannerImages.map((image, i) => (
              <div key={i} className="w-full h-[300px] md:h-[400px] relative flex-shrink-0">
                <Image
                  src={image}
                  alt={`Banner ${i+1}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </Carousel>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="md:w-64 flex-shrink-0 mb-6 md:mb-0 px-4">
            <Sidebar categories={categories} />
          </div>

          {/* Main Content */}
          <div className="flex-grow px-4">
            {/* Featured Products Section */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {products.slice(0, 4).map((product) => (
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
            </div>

            {/* Top Rated Products Section */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Top Rated Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {products
                  .sort((a, b) => b.rating.rate - a.rating.rate)
                  .slice(0, 4)
                  .map((product) => (
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
            </div>

            {/* Recently Added Products Section */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Recently Added</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {products.slice(5, 9).map((product) => (
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
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

'use client';

import React from 'react';
import { useCartStore } from '@/lib/cartStore';
import { Product } from '@/lib/data';

interface AddToCartButtonProps {
  product: Product;
  className?: string;
}

const AddToCartButton = ({ product, className = '' }: AddToCartButtonProps) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart(product);
    // Show a confirmation or redirect to cart
    alert('Product added to cart!');
  };

  return (
    <button 
      onClick={handleAddToCart}
      className={`bg-[#F7CA00] border border-[#F7CA00] rounded-md p-2 text-xs md:text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500 active:from-yellow-500 hover:bg-[#F0B800] ${className}`}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;

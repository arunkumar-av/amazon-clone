import React from 'react';
import Image, { PRIME_LOGO_DATA_URL } from '@/components/ui/Image';
import AddToCartButton from './AddToCartButton';

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  rating: number | { rate: number; count: number };
  image: string;
  description: string;
  category: string;
  hasPrime?: boolean;
}

const ProductCard = ({
  id,
  title,
  price,
  rating,
  image,
  description,
  category,
  hasPrime = false,
}: ProductCardProps) => {
  // Product data is passed directly to AddToCartButton
  
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10 rounded-md">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>      <div className="relative h-52 w-full mx-auto mb-3">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "contain" }}
          className="cursor-pointer"
        />
      </div>

      <h4 className="my-3 line-clamp-2 font-medium">{title}</h4>      <div className="flex">
        {Array(typeof rating === 'number' 
          ? Math.round(rating) 
          : Math.round(rating.rate))
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

      <p className="text-xs my-2 line-clamp-2">{description}</p>

      <div className="mb-5">
        <p className="font-bold text-lg">${price.toFixed(2)}</p>
      </div>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5 mb-3">            <div className="w-12">
              <Image
                src={PRIME_LOGO_DATA_URL}
                alt="Prime"
                width={48}
                height={48}
              />
            </div>
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}      <AddToCartButton 
        product={{ 
          id, 
          title, 
          price, 
          rating: typeof rating === 'number' ? { rate: rating, count: 0 } : rating, 
          image, 
          description, 
          category, 
          hasPrime 
        }} 
        className="mt-auto"
      />
    </div>
  );
};

export default ProductCard;

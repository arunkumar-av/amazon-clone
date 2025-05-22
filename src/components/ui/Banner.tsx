'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface BannerProps {
  backgroundColor: string; 
  textColor: string;
  text: string;
  imageUrl?: string;
}

// Using a named function component for clarity
const Banner: React.FC<BannerProps> = ({backgroundColor, textColor, text, imageUrl }) => {
  // State to track if image has failed to load
  const [imageError, setImageError] = useState(false);

  // Reset error state if imageUrl changes
  useEffect(() => {
    setImageError(false);
  }, [imageUrl]);
  // If imageUrl is provided and hasn't failed, render an image banner
  if (imageUrl && !imageError) {
    return (
      <div className="w-full h-full relative" style={{ backgroundColor }}>
        <Image
          src={imageUrl}
          alt={text || "Banner image"}
          fill
          style={{
            objectFit: 'cover',
          }}
          priority
          unoptimized={true} // Skip Next.js optimization for external URLs
          onError={() => {
            console.error(`Failed to load image: ${imageUrl}`);
            setImageError(true);
          }}
        />
        {/* Optional overlay text if needed */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
          <h2 
            className="text-3xl md:text-5xl font-bold"
            style={{ color: textColor || '#FFFFFF' }}
          >
            {text}
          </h2>
        </div>
      </div>
    );
  }
  
  // Default text-based banner (also fallback if image fails to load)
  return (
    <div 
      className="w-full h-full flex items-center justify-center"
      style={{ backgroundColor }}
    >
      <h2 
        className="text-3xl md:text-5xl font-bold"
        style={{ color: textColor }}
      >
        {text}
      </h2>
    </div>
  );
};

// Log to verify the component is being exported correctly
console.log("Banner component loaded", Banner);
export default Banner;
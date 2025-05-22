'use client';

import React, { useState } from 'react';
import NextImage, { ImageProps as NextImageProps } from 'next/image';

// Define the legacy props type
interface LegacyImageProps {
  layout?: 'fill' | 'fixed' | 'intrinsic' | 'responsive';
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  objectPosition?: string;
}  // Define the combined props type
type CombinedImageProps = NextImageProps & LegacyImageProps & { 
  style?: React.CSSProperties;
  fallbackSrc?: string;
  unoptimized?: boolean;
};

/**
 * This component is a wrapper around Next.js Image component that handles
 * both legacy and new API formats, automatically converting from the old
 * format to the new one if needed.
 * 
 * It provides backward compatibility with older Next.js Image props while
 * using the new API under the hood.
 */
// Use a data URL for the fallback image (a simple gray box with text)
const DEFAULT_FALLBACK_IMAGE = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6I2RkZDt9LmJ7ZmlsbDojOTk5O2ZvbnQtZmFtaWx5OkFyaWFsLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNnB4O308L3N0eWxlPjwvZGVmcz48cmVjdCBjbGFzcz0iYSIgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiLz48dGV4dCBjbGFzcz0iYiIgeD0iMTQwIiB5PSIyMDAiPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';

// Prime logo as data URL
export const PRIME_LOGO_DATA_URL = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48c3R5bGU+LnByaW1le2ZpbGw6IzAwQThFMTt9LnRleHR7ZmlsbDojZmZmO2ZvbnQtZmFtaWx5OkFyaWFsLEJvbGQ7Zm9udC13ZWlnaHQ6NzAwO2ZvbnQtc2l6ZToxMHB4O308L3N0eWxlPjwvZGVmcz48cmVjdCBjbGFzcz0icHJpbWUiIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgcng9IjYiLz48dGV4dCBjbGFzcz0idGV4dCIgeD0iNyIgeT0iMjgiPlBSSU1FPC90ZXh0Pjwvc3ZnPg==';

const Image = (props: CombinedImageProps) => {
  // Clone props to avoid mutation
  const {
    layout,
    objectFit,
    objectPosition,
    style,
    fallbackSrc = DEFAULT_FALLBACK_IMAGE,
    ...nextImageProps
  } = props;
    // State for tracking image loading errors
  const [error, setError] = useState(false);
  
  // Handle special case for prime logo
  const isPrimeLogo = typeof props.src === 'string' && 
    props.src.includes('text=Prime');
    // Create new props object for the NextImage component
  const imageProps: NextImageProps & { style?: React.CSSProperties; sizes?: string } = { 
    ...nextImageProps,
    src: error ? fallbackSrc : 
         isPrimeLogo ? PRIME_LOGO_DATA_URL : 
         props.src,
    onError: () => {
      console.warn(`Image with src "${props.src}" failed to load, using fallback`);
      setError(true);
    },
    // Always use these settings for more reliable image loading
    unoptimized: true, // Skip Next.js image optimization for external URLs
    loading: "eager",  // Load images eagerly instead of lazy loading
  };

  // Handle legacy layout prop
  if (layout) {
    console.warn(
      `Warning: Image with src "${props.src}" has legacy prop "layout". ` +
      `Did you forget to run the codemod? ` +
      `See: https://nextjs.org/docs/messages/next-image-upgrade-to-13`
    );

    if (layout === 'fill') {
      imageProps.fill = true;

      if (!imageProps.sizes) {
        imageProps.sizes = '100vw';
      }
    }

    if (layout === 'responsive' && !imageProps.sizes) {
      imageProps.sizes = '100vw';
    }
  }

  // Handle legacy objectFit and objectPosition props
  if (objectFit || objectPosition || style) {
    if (objectFit) {
      console.warn(
        `Warning: Image with src "${props.src}" has legacy prop "objectFit". ` +
        `Did you forget to run the codemod? ` +
        `See: https://nextjs.org/docs/messages/next-image-upgrade-to-13`
      );
    }

    if (objectPosition) {
      console.warn(
        `Warning: Image with src "${props.src}" has legacy prop "objectPosition". ` +
        `Did you forget to run the codemod? ` +
        `See: https://nextjs.org/docs/messages/next-image-upgrade-to-13`
      );
    }    imageProps.style = {
      ...(style || {}),
      ...(objectFit && { objectFit }),
      ...(objectPosition && { objectPosition }),
    };
  }
  
  return <NextImage {...imageProps} />;
};

export default Image;

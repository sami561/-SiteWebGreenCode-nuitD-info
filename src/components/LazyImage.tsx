import React, { useState, memo } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface LazyImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const LazyImage: React.FC<LazyImageProps> = memo(({ src, alt, width, height, className = '' }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px',
  });

  return (
    <div
      ref={targetRef as React.RefObject<HTMLDivElement>}
      className="relative overflow-hidden"
      // Aspect ratio helps to reserve space before the image loads
      style={{
        aspectRatio: `${width}/${height}`,
        width: '100%', // Ensure the image container occupies full width of the parent container
      }}
    >
      {isIntersecting && (
        <>
          <img
            src={src}
            alt={alt}
            width={width}  
            height={height}
            loading="lazy" // Charger l'image uniquement lorsqu'elle devient visible
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          />
          {!isLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse" />
          )}
        </>
      )}
    </div>
  );
});




LazyImage.displayName = 'LazyImage';
export default LazyImage;

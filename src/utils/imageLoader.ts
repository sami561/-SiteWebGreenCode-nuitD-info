// Utility function to generate optimized image URLs
export const getOptimizedImageUrl = (url: string): string => {
  return `${url}?w=800&h=450&fit=crop`;
};

// Preload critical images
export const preloadCriticalImages = (urls: string[]) => {
  urls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = getOptimizedImageUrl(url);
    document.head.appendChild(link);
  });
};
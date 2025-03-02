import { useState, useEffect } from 'react';

export function useScrollHeader(threshold = 100) {
  const [showMinimalHeader, setShowMinimalHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show header when scrolling down past threshold
      if (currentScrollY > threshold && !showMinimalHeader) {
        setShowMinimalHeader(true);
      } 
      // Hide header when scrolling back up above threshold
      else if (currentScrollY <= threshold && showMinimalHeader) {
        setShowMinimalHeader(false);
      }
      
      // Update last scroll position
      setLastScrollY(currentScrollY);
    };
    
    // Add scroll event listener with passive option for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold, showMinimalHeader, lastScrollY]);
  
  return showMinimalHeader;
} 
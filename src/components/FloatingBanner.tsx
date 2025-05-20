
import React, { useState, useEffect } from 'react';
import Timer from './Timer';

const FloatingBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.4) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 py-3 px-4 transform transition-transform duration-300">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex-1 mb-3 md:mb-0">
          <Timer />
        </div>
        
        <div className="flex-1 text-center">
          <a href="#register" className="cta-button inline-block">
            Забронировать место
          </a>
        </div>
      </div>
    </div>
  );
};

export default FloatingBanner;

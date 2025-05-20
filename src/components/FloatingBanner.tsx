
import React, { useState, useEffect } from 'react';
import Timer from './Timer';
import { ArrowRight, X } from 'lucide-react';

const FloatingBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  
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
  
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
    }, 300);
  };
  
  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-0 left-0 right-0 bg-white shadow-2xl z-50 py-3 px-4 transform transition-transform duration-300 ${isClosing ? 'translate-y-full' : 'translate-y-0'}`}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex-1 mb-3 md:mb-0">
          <div className="flex items-center">
            <div className="mr-4 hidden md:block">
              <div className="h-12 w-12 rounded-full bg-theme-light-blue flex items-center justify-center">
                <span className="text-theme-blue text-xl font-bold">⏰</span>
              </div>
            </div>
            <div>
              <p className="text-sm text-theme-gray mb-1">Бесплатная запись закроется через:</p>
              <Timer />
            </div>
          </div>
        </div>
        
        <div className="flex-1 text-center md:text-right">
          <a 
            href="#register" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-theme-blue to-theme-cyan text-white font-bold py-3 px-6 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Забронировать место
            <ArrowRight size={18} />
          </a>
        </div>
        
        <button 
          onClick={handleClose}
          className="absolute top-1 right-2 text-gray-400 hover:text-gray-600" 
          aria-label="Закрыть"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

export default FloatingBanner;

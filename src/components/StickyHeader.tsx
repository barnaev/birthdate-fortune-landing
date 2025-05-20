
import React, { useState, useEffect } from 'react';

const StickyHeader: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isSticky ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <h1 className={`font-bold transition-all duration-300 ${
            isSticky ? 'text-theme-black text-lg' : 'text-theme-black text-xl'
          }`}>
            <span className="text-theme-purple">Деньги</span> в дате рождения
          </h1>
        </div>
        
        <nav>
          <a 
            href="#register" 
            className={`transition-all duration-300 ${
              isSticky 
                ? 'bg-gradient-to-r from-theme-purple to-theme-dark-purple text-white px-5 py-2 rounded-full text-sm shadow-md hover:shadow-lg hover:scale-105' 
                : 'bg-white/20 backdrop-blur-sm text-theme-purple font-medium px-5 py-2 rounded-full border border-theme-purple/30 hover:bg-white/50'
            }`}
          >
            Записаться бесплатно
          </a>
        </nav>
      </div>
    </header>
  );
};

export default StickyHeader;

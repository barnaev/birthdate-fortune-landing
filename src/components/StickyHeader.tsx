
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
      isSticky ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <h1 className={`font-bold transition-all duration-300 ${
            isSticky ? 'text-theme-black text-lg' : 'text-theme-black text-xl'
          }`}>
            Деньги в дате рождения
          </h1>
        </div>
        
        <nav>
          <a 
            href="#register" 
            className={`transition-all duration-300 ${
              isSticky 
                ? 'bg-theme-purple text-white px-4 py-2 rounded-full text-sm' 
                : 'text-theme-purple font-medium text-base'
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

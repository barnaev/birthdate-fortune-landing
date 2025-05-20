
import React, { useState, useEffect } from 'react';

const Timer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set end date to 7 days from now
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7);
    
    const timerInterval = setInterval(() => {
      const now = new Date();
      const difference = endDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        clearInterval(timerInterval);
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    
    return () => clearInterval(timerInterval);
  }, []);

  return (
    <div className="mb-6">
      <p className="text-lg font-medium text-theme-purple mb-3">
        Бесплатная запись закроется через:
      </p>
      
      <div className="flex justify-center gap-4">
        <div className="flex flex-col items-center">
          <div className="bg-theme-purple text-white text-2xl font-bold w-16 h-16 rounded-xl flex items-center justify-center">
            {timeLeft.days}
          </div>
          <span className="text-sm mt-1">дней</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="bg-theme-purple text-white text-2xl font-bold w-16 h-16 rounded-xl flex items-center justify-center">
            {timeLeft.hours}
          </div>
          <span className="text-sm mt-1">часов</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="bg-theme-purple text-white text-2xl font-bold w-16 h-16 rounded-xl flex items-center justify-center">
            {timeLeft.minutes}
          </div>
          <span className="text-sm mt-1">минут</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="bg-theme-purple text-white text-2xl font-bold w-16 h-16 rounded-xl flex items-center justify-center">
            {timeLeft.seconds}
          </div>
          <span className="text-sm mt-1">секунд</span>
        </div>
      </div>
    </div>
  );
};

export default Timer;

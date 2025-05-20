
import React from 'react';
import RegistrationForm from './RegistrationForm';

const HeroSection: React.FC = () => {
  const startDate = new Date();
  startDate.setDate(startDate.getDate() + 7); // Starting in a week
  const formattedDate = startDate.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long'
  });

  return (
    <section className="relative bg-gradient-to-br from-white to-theme-light-purple py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-7/12">
            <div className="badge mb-4">
              <span className="mr-2">Онлайн-интенсив</span> | 
              <span className="mx-2">Старт: {formattedDate}</span> | 
              <span className="ml-2">Длительность: 3 дня</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-theme-black">
              Деньги в дате рождения
            </h1>
            
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 text-theme-purple">
              Стань цифровым психологом за 3 дня и измени жизнь через авторскую методику Савелия
            </h2>
            
            <div className="bg-white p-6 rounded-xl shadow-md mb-8">
              <p className="text-lg mb-4">
                Готовая инструкция по вашей дате рождения для прорыва в:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-theme-green text-xl mr-2">✓</span>
                  <span>Доходах <span className="highlight">(×2 за 3 месяца)</span></span>
                </li>
                <li className="flex items-start">
                  <span className="text-theme-green text-xl mr-2">✓</span>
                  <span>Отношениях <span className="highlight">(гармония за 21 день)</span></span>
                </li>
                <li className="flex items-start">
                  <span className="text-theme-green text-xl mr-2">✓</span>
                  <span>Состоянии <span className="highlight">(устранение блокировок энергии)</span></span>
                </li>
              </ul>
            </div>
            
            <div className="mb-8 text-center md:text-left">
              <a href="#register" className="cta-button cta-button-pulse inline-block">
                Принять участие — бесплатно до {formattedDate}
              </a>
              <div className="mt-4 text-lg">
                <span className="lined-through text-theme-red font-semibold">7990₽</span>
                <span className="text-theme-green font-bold ml-2">0₽</span>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-5/12">
            <div className="relative">
              <div className="absolute -z-10 w-64 h-64 bg-theme-light-purple rounded-full blur-3xl opacity-70 -top-10 -right-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80" 
                alt="Савелий - эксперт по цифровой психологии"
                className="w-full h-auto rounded-xl shadow-xl"
              />
              <div className="absolute -bottom-4 -left-4 bg-white px-4 py-3 rounded-lg shadow-lg">
                <p className="font-semibold text-theme-purple">Савелий</p>
                <p className="text-sm text-theme-gray">Эксперт по цифровой психологии</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div id="register" className="mt-16 bg-white py-10 px-4 sm:px-6 rounded-t-3xl shadow-[0_-10px_60px_-15px_rgba(0,0,0,0.1)]">
        <div className="container mx-auto">
          <RegistrationForm />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

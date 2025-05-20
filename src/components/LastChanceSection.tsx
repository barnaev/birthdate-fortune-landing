
import React from 'react';
import Timer from './Timer';
import RegistrationForm from './RegistrationForm';

const LastChanceSection: React.FC = () => {
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 7);
  const formattedDate = endDate.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long'
  });

  return (
    <section className="py-16 bg-gradient-to-b from-theme-purple to-theme-dark-purple text-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center text-white mb-2">
          Бесплатный доступ закроется через:
        </h2>
        
        <div className="max-w-xl mx-auto mb-10">
          <Timer />
        </div>
        
        <p className="text-xl md:text-2xl text-center mb-12">
          После {formattedDate} участие будет стоить 7990₽.<br />
          <span className="font-bold">Не упустите шанс изменить жизнь сейчас!</span>
        </p>
        
        <div className="bg-white rounded-xl p-8 shadow-xl max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-theme-black text-center">
            Что вы теряете, если не запишитесь сейчас?
          </h3>
          
          <ul className="space-y-4 mb-8 text-theme-black">
            <li className="flex items-start">
              <span className="text-theme-red text-xl mr-2">✗</span>
              <span>Упускаете бесплатный доступ → после {formattedDate} цена 7990₽.</span>
            </li>
            <li className="flex items-start">
              <span className="text-theme-red text-xl mr-2">✗</span>
              <span>Лишаетесь бонусов:
                <ul className="pl-6 mt-2">
                  <li>— Персональная карта желаний по дате рождения.</li>
                  <li>— Доступ к чату с кураторами.</li>
                </ul>
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-theme-red text-xl mr-2">✗</span>
              <span>Откладываете свой прорыв → «Ваши конкуренты уже начали действовать».</span>
            </li>
          </ul>
          
          <RegistrationForm />
        </div>
      </div>
    </section>
  );
};

export default LastChanceSection;

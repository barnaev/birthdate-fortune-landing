
import React from 'react';
import { Rocket, Computer, ChartLine } from 'lucide-react';

const ForWhoSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-theme-light-purple/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16">
          Этот интенсив создан <span className="text-theme-purple">для вас</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="transform transition-all duration-500 hover:-translate-y-2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full">
              <div className="bg-gradient-to-r from-theme-purple to-theme-dark-purple p-6 relative">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-lg absolute -bottom-8 left-6">
                  <Rocket size={32} className="text-theme-purple" />
                </div>
              </div>
              
              <div className="p-6 pt-12">
                <h3 className="text-xl font-bold mb-3 text-theme-black">
                  Для тех, кто хочет изменить свою жизнь
                </h3>
                
                <div className="bg-theme-purple/10 rounded-xl p-4 mb-6">
                  <p className="text-theme-purple font-medium">
                    Устали от пробуксовки? Получите инструменты для прорыва!
                  </p>
                </div>
                
                <div className="space-y-6 mb-6">
                  <div className="rounded-xl bg-white shadow-md p-5 border-l-4 border-theme-purple">
                    <h4 className="font-bold mb-2 text-theme-black flex items-center">
                      <span className="inline-block w-2 h-2 bg-theme-purple rounded-full mr-2"></span>
                      Хотите выйти из замкнутого круга
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex">
                        <span className="text-theme-purple mr-2">—</span>
                        <span>Понимаете, что «все как раньше» не работает</span>
                      </li>
                      <li className="flex">
                        <span className="text-theme-purple mr-2">—</span>
                        <span>Устали от повторяющихся кризисов</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="rounded-xl bg-white shadow-md p-5 border-l-4 border-theme-purple">
                    <h4 className="font-bold mb-2 text-theme-black flex items-center">
                      <span className="inline-block w-2 h-2 bg-theme-purple rounded-full mr-2"></span>
                      Мечтаете о быстрых переменах
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex">
                        <span className="text-theme-purple mr-2">—</span>
                        <span>Нуждаетесь в четкой инструкции</span>
                      </li>
                      <li className="flex">
                        <span className="text-theme-purple mr-2">—</span>
                        <span>Готовы за 3 дня перезагрузить мышление</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="rounded-xl bg-white shadow-md p-5 border-l-4 border-theme-purple">
                    <h4 className="font-bold mb-2 text-theme-black flex items-center">
                      <span className="inline-block w-2 h-2 bg-theme-purple rounded-full mr-2"></span>
                      Стремитесь к конкретным целям
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex">
                        <span className="text-theme-purple mr-2">—</span>
                        <span>Увеличить доход в 2-3 раза</span>
                      </li>
                      <li className="flex">
                        <span className="text-theme-purple mr-2">—</span>
                        <span>Найти гармонию в отношениях за 21 день</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-theme-light-purple rounded-xl p-4 shadow-inner">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-theme-purple/20 flex items-center justify-center">
                      <span className="text-theme-purple font-bold">М</span>
                    </div>
                    <p className="font-semibold">Пример Марии:</p>
                  </div>
                  <p className="text-sm italic">
                    после интенсива она сменила профессию в 45 лет и вышла на доход 115 000₽/мес, работая 3 часа в день из дома.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="transform transition-all duration-500 hover:-translate-y-2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full">
              <div className="bg-gradient-to-r from-theme-purple to-theme-dark-purple p-6 relative">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-lg absolute -bottom-8 left-6">
                  <Computer size={32} className="text-theme-purple" />
                </div>
              </div>
              
              <div className="p-6 pt-12">
                <h3 className="text-xl font-bold mb-3 text-theme-black">
                  Для будущих цифровых психологов
                </h3>
                
                <div className="bg-theme-purple/10 rounded-xl p-4 mb-6">
                  <p className="text-theme-purple font-medium">
                    Зарабатывайте на новом навыке уже во время интенсива!
                  </p>
                </div>
                
                <div className="space-y-6 mb-6">
                  <div className="rounded-xl bg-white shadow-md p-5 border-l-4 border-theme-purple">
                    <h4 className="font-bold mb-2 text-theme-black flex items-center">
                      <span className="inline-block w-2 h-2 bg-theme-purple rounded-full mr-2"></span>
                      Профессия без вложений
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex">
                        <span className="text-theme-purple mr-2">—</span>
                        <span>Освойте востребованный навык за 3 дня</span>
                      </li>
                      <li className="flex">
                        <span className="text-theme-purple mr-2">—</span>
                        <span>Зарабатывайте от 2 000₽ за консультацию</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="rounded-xl bg-white shadow-md p-5 border-l-4 border-theme-purple">
                    <h4 className="font-bold mb-2 text-theme-black flex items-center">
                      <span className="inline-block w-2 h-2 bg-theme-purple rounded-full mr-2"></span>
                      Идеально подходит для
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex">
                        <span className="text-theme-purple mr-2">—</span>
                        <span>Мам в декрете: +15 000₽ к бюджету</span>
                      </li>
                      <li className="flex">
                        <span className="text-theme-purple mr-2">—</span>
                        <span>Офисных работников: пассивный доход</span>
                      </li>
                      <li className="flex">
                        <span className="text-theme-purple mr-2">—</span>
                        <span>Пенсионеров: монетизация опыта</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="rounded-xl bg-white shadow-md p-5 border-l-4 border-theme-purple">
                    <h4 className="font-bold mb-2 text-theme-black flex items-center">
                      <span className="inline-block w-2 h-2 bg-theme-purple rounded-full mr-2"></span>
                      Для тех, кто сомневается
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex">
                        <span className="text-theme-purple mr-2">—</span>
                        <span>Проведите первую консультацию с поддержкой</span>
                      </li>
                      <li className="flex">
                        <span className="text-theme-purple mr-2">—</span>
                        <span>Получите доступ к базе клиентов</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-theme-light-purple rounded-xl p-4 shadow-inner">
                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-2xl font-bold text-theme-purple">91%</p>
                  </div>
                  <p className="text-sm">
                    участников прошлого потока получили первых клиентов <span className="font-bold">ДО</span> окончания 3-дневного интенсива.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="transform transition-all duration-500 hover:-translate-y-2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full">
              <div className="bg-gradient-to-r from-theme-purple to-theme-dark-purple p-6 relative">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-lg absolute -bottom-8 left-6">
                  <ChartLine size={32} className="text-theme-purple" />
                </div>
              </div>
              
              <div className="p-6 pt-12">
                <h3 className="text-xl font-bold mb-3 text-theme-black">
                  Для экспертов (психологи, коучи, HR)
                </h3>
                
                <div className="bg-theme-purple/10 rounded-xl p-4 mb-6">
                  <p className="text-theme-purple font-medium">
                    Усилите свою экспертизу и увеличьте чек!
                  </p>
                </div>
                
                <div className="space-y-6 mb-6">
                  <div className="rounded-xl bg-white shadow-md p-5 border-l-4 border-theme-purple">
                    <h4 className="font-bold mb-2 text-theme-black flex items-center">
                      <span className="inline-block w-2 h-2 bg-theme-purple rounded-full mr-2"></span>
                      Выделиться на рынке
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex">
                        <span className="text-theme-purple mr-2">—</span>
                        <span>+30% к стоимости консультаций</span>
                      </li>
                      <li className="flex">
                        <span className="text-theme-purple mr-2">—</span>
                        <span>Сократите диагностику с 2 часов до 15 минут</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="rounded-xl bg-white shadow-md p-5 border-l-4 border-theme-purple">
                    <h4 className="font-bold mb-2 text-theme-black flex items-center">
                      <span className="inline-block w-2 h-2 bg-theme-purple rounded-full mr-2"></span>
                      Работа с командами
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex">
                        <span className="text-theme-purple mr-2">—</span>
                        <span>Решите конфликты через совместимость по датам</span>
                      </li>
                      <li className="flex">
                        <span className="text-theme-purple mr-2">—</span>
                        <span>Определите мотивацию по сильным сторонам</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="rounded-xl bg-white shadow-md p-5 border-l-4 border-theme-purple">
                    <h4 className="font-bold mb-2 text-theme-black flex items-center">
                      <span className="inline-block w-2 h-2 bg-theme-purple rounded-full mr-2"></span>
                      Масштабирование
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex">
                        <span className="text-theme-purple mr-2">—</span>
                        <span>Создайте онлайн-курс, средний чек 25 000₽</span>
                      </li>
                      <li className="flex">
                        <span className="text-theme-purple mr-2">—</span>
                        <span>Партнерская программа с 20% роялти</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-theme-light-purple rounded-xl p-4 shadow-inner">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-theme-purple/20 flex items-center justify-center">
                      <span className="text-theme-purple font-bold">А</span>
                    </div>
                    <p className="font-semibold">Анна, HR-менеджер:</p>
                  </div>
                  <p className="text-sm italic">
                    внедрила анализ дат в подбор персонала — сократила текучку на 40% за полгода.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;

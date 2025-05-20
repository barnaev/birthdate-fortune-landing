
import React from 'react';
import { Rocket, Computer, ChartLine } from 'lucide-react';

const ForWhoSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-theme-light-blue/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">
          Этот интенсив создан <span className="text-theme-blue">для вас</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="h-3 bg-gradient-to-r from-theme-blue to-theme-cyan"></div>
            <div className="p-6 relative">
              <div className="w-16 h-16 rounded-full bg-theme-light-blue flex items-center justify-center mb-6 mx-auto">
                <Rocket size={32} className="text-theme-blue" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-center">
                Для тех, кто хочет изменить жизнь
              </h3>
              
              <div className="bg-theme-light-blue rounded-xl p-4 mb-6">
                <p className="text-theme-blue font-medium text-center">
                  Устали от пробуксовки? Получите инструменты для прорыва!
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="min-w-6 h-6 rounded-full bg-theme-blue flex items-center justify-center mt-1 mr-3">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">Хотите выйти из замкнутого круга</h4>
                    <p className="text-sm text-theme-gray">
                      «Все как раньше» не работает, пора найти новый путь
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="min-w-6 h-6 rounded-full bg-theme-blue flex items-center justify-center mt-1 mr-3">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">Мечтаете о быстрых переменах</h4>
                    <p className="text-sm text-theme-gray">
                      Перезагрузите мышление за 3 дня и начните действовать
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="min-w-6 h-6 rounded-full bg-theme-blue flex items-center justify-center mt-1 mr-3">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">Стремитесь к конкретным целям</h4>
                    <p className="text-sm text-theme-gray">
                      Увеличьте доход в 2-3 раза через анализ даты рождения
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-theme-light-blue flex items-center justify-center mr-3">
                    <span className="text-theme-blue font-bold">М</span>
                  </div>
                  <p className="text-sm">
                    <span className="font-semibold">Мария, 35 лет:</span> после интенсива вышла на доход 115 000₽/мес
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="h-3 bg-gradient-to-r from-theme-blue to-theme-cyan"></div>
            <div className="p-6 relative">
              <div className="w-16 h-16 rounded-full bg-theme-light-blue flex items-center justify-center mb-6 mx-auto">
                <Computer size={32} className="text-theme-blue" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-center">
                Для будущих цифровых психологов
              </h3>
              
              <div className="bg-theme-light-blue rounded-xl p-4 mb-6">
                <p className="text-theme-blue font-medium text-center">
                  Зарабатывайте на новом навыке уже во время интенсива!
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="min-w-6 h-6 rounded-full bg-theme-blue flex items-center justify-center mt-1 mr-3">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">Профессия без вложений</h4>
                    <p className="text-sm text-theme-gray">
                      Освоите востребованный навык за 3 дня
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="min-w-6 h-6 rounded-full bg-theme-blue flex items-center justify-center mt-1 mr-3">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">Идеально подходит для</h4>
                    <p className="text-sm text-theme-gray">
                      Мам в декрете, офисных работников и пенсионеров
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="min-w-6 h-6 rounded-full bg-theme-blue flex items-center justify-center mt-1 mr-3">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">Даже для сомневающихся</h4>
                    <p className="text-sm text-theme-gray">
                      Первую консультацию проведёте с поддержкой наставника
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-center">
                  <div className="bg-theme-light-blue rounded-lg px-4 py-2">
                    <p className="text-sm">
                      <span className="font-bold text-theme-blue">91%</span> участников получили клиентов еще во время интенсива
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="h-3 bg-gradient-to-r from-theme-blue to-theme-cyan"></div>
            <div className="p-6 relative">
              <div className="w-16 h-16 rounded-full bg-theme-light-blue flex items-center justify-center mb-6 mx-auto">
                <ChartLine size={32} className="text-theme-blue" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-center">
                Для экспертов и специалистов
              </h3>
              
              <div className="bg-theme-light-blue rounded-xl p-4 mb-6">
                <p className="text-theme-blue font-medium text-center">
                  Усилите свою экспертизу и увеличьте доход!
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="min-w-6 h-6 rounded-full bg-theme-blue flex items-center justify-center mt-1 mr-3">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">Выделиться на рынке</h4>
                    <p className="text-sm text-theme-gray">
                      +30% к стоимости консультаций благодаря цифровой психологии
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="min-w-6 h-6 rounded-full bg-theme-blue flex items-center justify-center mt-1 mr-3">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">Работа с командами</h4>
                    <p className="text-sm text-theme-gray">
                      Решайте конфликты через совместимость по датам рождения
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="min-w-6 h-6 rounded-full bg-theme-blue flex items-center justify-center mt-1 mr-3">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">Масштабирование</h4>
                    <p className="text-sm text-theme-gray">
                      Создайте онлайн-курс со средним чеком 25 000₽
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-theme-light-blue flex items-center justify-center mr-3">
                    <span className="text-theme-blue font-bold">А</span>
                  </div>
                  <p className="text-sm">
                    <span className="font-semibold">HR Анна:</span> сократила текучку на 40% за полгода
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

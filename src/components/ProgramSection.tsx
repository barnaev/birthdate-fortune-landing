
import React from 'react';
import { Key, Brain, DollarSign } from 'lucide-react';

const ProgramSection: React.FC = () => {
  return (
    <section className="py-16 bg-theme-light-purple">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Структура интенсива</h2>
        
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-xl shadow-md mb-8">
            <h3 className="text-xl font-semibold mb-4">Формат каждого дня:</h3>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center">
                <span className="text-xl mr-2">⏰</span>
                <span>Время: <strong>19:00–21:00 МСК</strong> (2 часа в день)</span>
              </div>
              <div className="flex items-center">
                <span className="text-xl mr-2">🔥</span>
                <span>После урока — 30-минутный практикум</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-12">
          {/* Day 1 */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/5 flex justify-center">
                <div className="w-20 h-20 bg-theme-purple rounded-full flex items-center justify-center text-white text-3xl font-bold">
                  1
                </div>
              </div>
              <div className="md:w-4/5">
                <div className="flex items-center mb-4">
                  <Key className="text-theme-purple mr-2" size={24} />
                  <h3 className="text-2xl font-bold">День 1. «Старт: ваш денежный код по дате рождения»</h3>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Теория (60 минут):</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-theme-green text-xl mr-2">✓</span>
                      <span>Как дата рождения влияет на финансовый потолок (разбор на примере участников)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-theme-green text-xl mr-2">✓</span>
                      <span>Топ-3 ошибки, которые блокируют ваш доход (чек-лист для самодиагностики)</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Практика (60 минут):</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-theme-green text-xl mr-2">✓</span>
                      <span>Задание: Рассчитайте свой «денежный вектор» по формуле Савелия (шаблон Excel в подарок)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-theme-green text-xl mr-2">✓</span>
                      <span>Разбор кейса: «Как Ирина увеличила доход в 4 раза, сменив профессию на основе своей даты»</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-theme-light-purple p-4 rounded-lg">
                  <p className="font-medium">Бонус дня:</p>
                  <p>Чек-лист «5 профессий будущего для вашей даты рождения»</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Day 2 */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/5 flex justify-center">
                <div className="w-20 h-20 bg-theme-purple rounded-full flex items-center justify-center text-white text-3xl font-bold">
                  2
                </div>
              </div>
              <div className="md:w-4/5">
                <div className="flex items-center mb-4">
                  <Brain className="text-theme-purple mr-2" size={24} />
                  <h3 className="text-2xl font-bold">День 2. «Нейропрактики: перепрошивка мышления»</h3>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Теория (45 минут):</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-theme-green text-xl mr-2">✓</span>
                      <span>Почему 90% людей не выходят из «денежного болота» (нейробиология + нумерология)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-theme-green text-xl mr-2">✓</span>
                      <span>Как за 10 минут в день убрать страхи через дату рождения (аудиопрактика в подарок)</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Практика (75 минут):</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-theme-green text-xl mr-2">✓</span>
                      <span>Групповая медитация: «Точка изобилия» (синхронизация с энергией даты рождения)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-theme-green text-xl mr-2">✓</span>
                      <span>Работа в парах: Проработайте блок партнера по шаблону (кураторы проверят и дадут фидбек)</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-theme-light-purple p-4 rounded-lg">
                  <p className="font-medium">Бонус дня:</p>
                  <p>Гайд «7 вопросов, которые заставят клиента сказать вам «да» (для будущих психологов)»</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Day 3 */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/5 flex justify-center">
                <div className="w-20 h-20 bg-theme-purple rounded-full flex items-center justify-center text-white text-3xl font-bold">
                  3
                </div>
              </div>
              <div className="md:w-4/5">
                <div className="flex items-center mb-4">
                  <DollarSign className="text-theme-purple mr-2" size={24} />
                  <h3 className="text-2xl font-bold">День 3. «Монетизация: первые деньги на цифровой психологии»</h3>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Теория (30 минут):</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-theme-green text-xl mr-2">✓</span>
                      <span>Где искать клиентов: Telegram-чаты, форумы мам, HR-сообщества (список из 50+ площадок)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-theme-green text-xl mr-2">✓</span>
                      <span>Как оформить услугу без юрлица (шаблон договора и инструкция)</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Практика (90 минут):</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-theme-green text-xl mr-2">✓</span>
                      <span>Хакатон: Проведите мини-консультацию в Zoom-группах (гостевой доступ к программе расчета совместимости)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-theme-green text-xl mr-2">✓</span>
                      <span>Разбор «на горячую»: Савелий прокомментирует 3 случайных кейса из чата</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-theme-light-purple p-4 rounded-lg">
                  <p className="font-medium">Бонус дня:</p>
                  <p>Доступ к закрытому каналу с заявками от клиентов («горячие» контакты ищущих помощь)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="section-subtitle text-center">Супер-бонусы после интенсива</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="icon-container mx-auto">
                <span className="text-2xl">🗺️</span>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-center">Карта желаний</h4>
              <p className="text-center">
                Персонализированная PDF-карта с вашей датой рождения (пример: «Ваш идеальный месяц для старта бизнеса — март 2025»)
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="icon-container mx-auto">
                <span className="text-2xl">🧠</span>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-center">Доступ к нейротренажеру</h4>
              <p className="text-center">
                14-дневный курс с аудиопрактиками («Перепрограммируйте подсознание за 10 минут в день»)
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="icon-container mx-auto">
                <span className="text-2xl">💬</span>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-center">Чат поддержки</h4>
              <p className="text-center">
                3 месяца бесплатного участия в закрытом Telegram-чате с наставниками
              </p>
            </div>
          </div>
          
          <div className="mt-10 bg-white p-6 rounded-xl shadow-md">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="md:w-1/4">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
                  alt="Анастасия, участница потока"
                  className="rounded-full w-32 h-32 object-cover mx-auto"
                />
              </div>
              <div className="md:w-3/4">
                <p className="italic mb-2">
                  "На третьем дне я уже провела платную консультацию! Клиентка заплатила 3 000₽ за анализ совместимости с мужем. Это нереально!"
                </p>
                <p className="font-medium text-theme-purple">
                  Анастасия, участница потока марта 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;

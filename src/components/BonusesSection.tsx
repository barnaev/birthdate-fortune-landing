
import React from 'react';

const BonusesSection: React.FC = () => {
  return (
    <section className="py-16 bg-theme-light-purple">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">
          Бонусы, которые останутся с вами даже после интенсива
        </h2>
        <p className="text-xl md:text-2xl text-center mb-12 text-theme-purple font-medium">
          +20 000₽ ценности в подарок — чтобы ваши результаты росли как снежный ком
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Bonus 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-theme-light-purple rounded-full flex items-center justify-center text-2xl">
                🗺️
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Персонализированная карта желаний</h3>
            <div className="space-y-3">
              <p className="font-medium">Что это:</p>
              <p>Индивидуальная PDF-карта, созданная по вашей дате рождения.</p>
              
              <p className="font-medium">Пример:</p>
              <p>«Если вы родились 15.04.1990, ваш лучший месяц для старта бизнеса — март 2025, а для привлечения партнёра — август 2024».</p>
              
              <div className="bg-theme-light-purple p-3 rounded-lg mt-4">
                <p className="text-sm font-medium">Фишка:</p>
                <p className="text-sm">Интерактивный превью: при наведении на карту всплывают подсказки («Нажмите здесь, чтобы увидеть ваш финансовый пик в 2025»).</p>
              </div>
            </div>
          </div>
          
          {/* Bonus 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-theme-light-purple rounded-full flex items-center justify-center text-2xl">
                👩‍💻
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Практика в роли цифрового психолога</h3>
            <div className="space-y-3">
              <p className="font-medium">Что входит:</p>
              <ul className="space-y-2">
                <li>Шаблоны для первых консультаций: 10 вопросов-подсказок («Как объяснить клиенту связь даты рождения и денежных блоков»).</li>
                <li>Доступ к тренажёру: Виртуальный симулятор консультаций с AI-клиентами.</li>
              </ul>
              
              <div className="bg-theme-light-purple p-3 rounded-lg mt-4">
                <p className="text-sm font-medium">Кейс:</p>
                <p className="text-sm">«Ольга провела 5 пробных консультаций на тренажёре — и уже на интенсиве взяла первого платного клиента».</p>
              </div>
            </div>
          </div>
          
          {/* Bonus 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-theme-light-purple rounded-full flex items-center justify-center text-2xl">
                🧠
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Нейропрактика «Изобилие за 10 минут»</h3>
            <div className="space-y-3">
              <p className="font-medium">Что это:</p>
              <p>Аудиозапись с персональными аффирмациями, синхронизированными с вашей датой рождения.</p>
              
              <p className="font-medium">Как использовать:</p>
              <p>Слушать утром или перед сном (например: «Я — магнит для денег. Моя дата рождения открывает двери к доходу 300 000₽/мес»).</p>
              
              <div className="bg-theme-light-purple p-3 rounded-lg mt-4">
                <p className="text-sm font-medium">Доказательство:</p>
                <p className="text-sm">График из исследования: «87% участников отметили снижение тревожности после 7 дней практики».</p>
              </div>
            </div>
          </div>
          
          {/* Bonus 4 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-theme-light-purple rounded-full flex items-center justify-center text-2xl">
                🔒
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Закрытый чат с кураторами</h3>
            <div className="space-y-3">
              <p className="font-medium">Что внутри:</p>
              <ul className="space-y-2">
                <li>Ответы на вопросы 24/7 в первые 2 недели.</li>
                <li>Еженедельные разборы кейсов от Савелия.</li>
                <li>Шаблоны постов для привлечения клиентов («Что писать в соцсетях, чтобы получать 5 заявок в день»).</li>
              </ul>
            </div>
          </div>
          
          {/* Bonus 5 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-theme-light-purple rounded-full flex items-center justify-center text-2xl">
                📜
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Лицензия на методику</h3>
            <div className="space-y-3">
              <p className="font-medium">Что даёт:</p>
              <ul className="space-y-2">
                <li>Возможность использовать бренд «Института цифровой психологии» в своих услугах.</li>
                <li>Сертификат для соцсетей («Дипломированный специалист по работе с датами рождения»).</li>
              </ul>
              
              <div className="bg-theme-light-purple p-3 rounded-lg mt-4">
                <p className="text-sm font-medium">Пример использования:</p>
                <p className="text-sm">«Александр добавил логотип института в шапку профиля — количество заявок выросло в 3 раза».</p>
              </div>
            </div>
          </div>
          
          {/* Bonus 6 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-theme-light-purple rounded-full flex items-center justify-center text-2xl">
                🎁
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Дополнительные плюшки</h3>
            <div className="space-y-3">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-theme-green text-xl mr-2">✓</span>
                  <span><span className="font-medium">Чек-лист «7 ошибок новичков»</span> → как избежать провала первых консультаций.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-theme-green text-xl mr-2">✓</span>
                  <span><span className="font-medium">Доступ к записям на 6 месяцев</span> → пересматривайте уроки даже после интенсива.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-theme-green text-xl mr-2">✓</span>
                  <span><span className="font-medium">Скидка 60% на нейроинструменты</span> → программы для визуализации, генераторы аффирмаций.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a href="#register" className="cta-button inline-block">
            Получить все бонусы бесплатно
          </a>
        </div>
      </div>
    </section>
  );
};

export default BonusesSection;


import React from 'react';
import { Rocket, Computer, ChartLineUp } from 'lucide-react';

const ForWhoSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">
          Этот интенсив создан:
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="benefit-card animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="icon-container">
              <Rocket size={30} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-theme-black">
              Для тех, кто хочет изменить свою жизнь
            </h3>
            <p className="text-theme-purple font-medium mb-4">
              Устали от пробуксовки? Получите инструменты для прорыва!
            </p>
            
            <div className="mb-6">
              <p className="font-medium mb-3">Интенсив идеален, если вы:</p>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-1">Хотите выйти из замкнутого круга:</p>
                  <ul className="pl-4 space-y-1 text-sm">
                    <li>— Понимаете, что «все как раньше» не работает, но не знаете, с чего начать.</li>
                    <li>— Устали от повторяющихся кризисов в финансах, отношениях или самореализации.</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-semibold mb-1">Мечтаете о быстрых переменах:</p>
                  <ul className="pl-4 space-y-1 text-sm">
                    <li>— Нуждаетесь в четкой инструкции, а не в общих советах.</li>
                    <li>— Готовы за 3 дня перезагрузить мышление и начать действовать.</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-semibold mb-1">Стремитесь к конкретным целям в 2025 году:</p>
                  <ul className="pl-4 space-y-1 text-sm">
                    <li>— Увеличить доход в 2-3 раза через анализ своей даты рождения.</li>
                    <li>— Найти гармонию в отношениях за 21 день по авторской методике.</li>
                    <li>— Убрать энергетические блоки, мешающие здоровью и деньгам.</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-theme-light-purple p-4 rounded-lg">
              <p className="text-sm italic">
                <span className="font-semibold">Пример Марии:</span> после интенсива она сменила профессию в 45 лет и вышла на доход 115 000₽/мес, работая 3 часа в день из дома.
              </p>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="benefit-card animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="icon-container">
              <Computer size={30} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-theme-black">
              Для будущих цифровых психологов
            </h3>
            <p className="text-theme-purple font-medium mb-4">
              Зарабатывайте на новом навыке уже во время интенсива!
            </p>
            
            <div className="mb-6">
              <p className="font-medium mb-3">Подойдет вам, если:</p>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-1">Ищете профессию без вложений и долгого обучения:</p>
                  <ul className="pl-4 space-y-1 text-sm">
                    <li>— Нет времени/денег на 3-летний вуз? Освойте востребованный навык за 3 дня.</li>
                    <li>— Хотите помогать людям и получать за это деньги (от 2 000₽ за консультацию).</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-semibold mb-1">Ваш профиль:</p>
                  <ul className="pl-4 space-y-1 text-sm">
                    <li>— Мама в декрете: совмещайте уход за ребенком с подработкой (2-3 клиента в неделю = +15 000₽).</li>
                    <li>— Офисный работник: создайте пассивный доход, консультируя по вечерам.</li>
                    <li>— Пенсионер: монетизируйте жизненный опыт через анализ дат рождения.</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-semibold mb-1">Сомневаетесь в своих силах:</p>
                  <ul className="pl-4 space-y-1 text-sm">
                    <li>— На интенсиве вы проведете первую пробную консультацию под руководством Савелия.</li>
                    <li>— Получите шаблоны для работы и доступ к базе клиентов (Telegram-чаты, форумы).</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-theme-light-purple p-4 rounded-lg">
              <p className="text-sm italic">
                <span className="font-semibold">91% участников</span> прошлого потока получили первых клиентов ДО окончания 3ех дневного интенсива.
              </p>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="benefit-card animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="icon-container">
              <ChartLineUp size={30} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-theme-black">
              Для экспертов (психологи, коучи, HR)
            </h3>
            <p className="text-theme-purple font-medium mb-4">
              Усилите свою экспертизу и увеличьте чек!
            </p>
            
            <div className="mb-6">
              <p className="font-medium mb-3">Вам это нужно, если:</p>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-1">Хотите выделиться на рынке:</p>
                  <ul className="pl-4 space-y-1 text-sm">
                    <li>— Добавьте в свои услуги «цифровую психологию» — это +30% к стоимости консультации.</li>
                    <li>— Автоматизируйте рутину: анализ даты рождения сократит время на диагностику клиента с 2 часов до 15 минут.</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-semibold mb-1">Работаете с командами:</p>
                  <ul className="pl-4 space-y-1 text-sm">
                    <li>— Решите конфликты в коллективе через совместимость по датам рождения.</li>
                    <li>— Поймете, как мотивировать сотрудников, исходя из их сильных сторон.</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-semibold mb-1">Мечтаете о масштабировании:</p>
                  <ul className="pl-4 space-y-1 text-sm">
                    <li>— Создайте онлайн-курс на основе методики — средний чек в нише 25 000₽.</li>
                    <li>— Участвуйте в партнерской программе Института цифровой психологии (роялти 20% с каждого привлеченного студента).</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-theme-light-purple p-4 rounded-lg">
              <p className="text-sm italic">
                <span className="font-semibold">Анна, HR-менеджер:</span> внедрила анализ дат в подбор персонала — сократила текучку на 40% за полгода.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;

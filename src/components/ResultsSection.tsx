
import React from 'react';

const ResultsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Мария, 35 лет",
      location: "Москва",
      before: "Работала менеджером за 40 000₽/мес, постоянные долги.",
      after: "Провела 12 консультаций за неделю, доход — 68 000₽.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
    },
    {
      name: "Александр, 42 года",
      location: "Санкт-Петербург",
      before: "Работал в офисе по 10 часов, выгорание, зарплата 55 000₽.",
      after: "Консультирует онлайн 3-4 часа в день, доход вырос до 95 000₽.",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80"
    },
    {
      name: "Елена, 28 лет",
      location: "Екатеринбург",
      before: "Сидела в декрете с двумя детьми, финансово зависела от мужа.",
      after: "Провела 8 онлайн-консультаций, заработала первые 32 000₽.",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80"
    },
    {
      name: "Ирина, 47 лет",
      location: "Новосибирск",
      before: "Уволили после сокращения, постоянные поиски работы.",
      after: "Нашла свое призвание, за первый месяц заработала 78 000₽.",
      image: "https://images.unsplash.com/photo-1558898479-33c0057a5d12?auto=format&fit=crop&q=80"
    },
    {
      name: "Дмитрий, 39 лет",
      location: "Казань",
      before: "Работал таксистом, нестабильный график и доход.",
      after: "Консультирует 6-7 клиентов в неделю, стабильные 83 000₽ в месяц.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80"
    },
    {
      name: "Ольга, 32 года",
      location: "Краснодар",
      before: "Работала продавцом за 30 000₽, не хватало времени на семью.",
      after: "Помогает людям онлайн, доход 52 000₽ при свободном графике.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80"
    }
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">
          1 292 734₽ — столько заработали наши ученики за 3 дня.<br />
          <span className="text-theme-purple">А сколько получите вы?</span>
        </h2>
        
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid grid-cols-3 gap-6 text-center mb-8">
            <div className="bg-theme-light-purple p-4 rounded-lg">
              <p className="text-3xl font-bold text-theme-purple">18 500₽</p>
              <p>средний доход участника за интенсив</p>
            </div>
            <div className="bg-theme-light-purple p-4 rounded-lg">
              <p className="text-3xl font-bold text-theme-purple">79%</p>
              <p>учеников вышли на доход 150 000₽+ через 3 месяца</p>
            </div>
            <div className="bg-theme-light-purple p-4 rounded-lg">
              <p className="text-3xl font-bold text-theme-purple">87%</p>
              <p>выполнили денежное задание еще во время обучения</p>
            </div>
          </div>
          
          <div className="bg-white shadow-lg rounded-xl p-6 mb-10">
            <h3 className="text-xl font-bold mb-4 text-center">Рассчитайте ваш потенциальный доход</h3>
            
            <div className="space-y-4">
              <div>
                <p className="font-medium mb-2">Сколько часов в неделю готовы уделять консультациям?</p>
                <div className="flex gap-3">
                  <button className="flex-1 py-2 px-4 border border-theme-purple rounded-lg hover:bg-theme-light-purple transition-colors">3 часа</button>
                  <button className="flex-1 py-2 px-4 bg-theme-purple text-white rounded-lg">5 часов</button>
                  <button className="flex-1 py-2 px-4 border border-theme-purple rounded-lg hover:bg-theme-light-purple transition-colors">10 часов</button>
                </div>
              </div>
              
              <div>
                <p className="font-medium mb-2">Минимальный чек за консультацию?</p>
                <div className="flex gap-3">
                  <button className="flex-1 py-2 px-4 border border-theme-purple rounded-lg hover:bg-theme-light-purple transition-colors">2000₽</button>
                  <button className="flex-1 py-2 px-4 bg-theme-purple text-white rounded-lg">5000₽</button>
                  <button className="flex-1 py-2 px-4 border border-theme-purple rounded-lg hover:bg-theme-light-purple transition-colors">10 000₽</button>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-theme-light-purple rounded-lg text-center">
              <p className="text-lg">При 5 консультациях в неделю по 5000₽</p>
              <p className="text-3xl font-bold text-theme-purple">Ваш доход = 100 000₽/мес</p>
            </div>
          </div>
        </div>
        
        <h3 className="section-subtitle text-center mb-8">Истории наших учеников</h3>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100 / testimonials.length}%)`, width: `${testimonials.length * 100}%` }}
            >
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="px-4" style={{ width: `${100 / testimonials.length}%` }}>
                  <div className="bg-white shadow-lg rounded-xl p-6">
                    <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                      <div className="md:w-1/3">
                        <img 
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-32 h-32 rounded-full object-cover mx-auto"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <h4 className="font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-theme-gray">{testimonial.location}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-theme-light-purple p-4 rounded-lg">
                        <p className="font-medium mb-2">До интенсива:</p>
                        <p>{testimonial.before}</p>
                      </div>
                      <div className="bg-theme-light-purple p-4 rounded-lg">
                        <p className="font-medium mb-2">После интенсива:</p>
                        <p>{testimonial.after}</p>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex justify-center">
                      <div className="bg-white border border-theme-green rounded-lg px-4 py-2 text-sm">
                        <p className="text-theme-green font-medium">Подтвержденные результаты</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-3 h-3 rounded-full ${idx === activeIndex ? 'bg-theme-purple' : 'bg-gray-300'}`}
                aria-label={`Переключиться к отзыву ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;


import React, { useState } from 'react';

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqItems = [
    {
      question: "Что входит в бесплатное участие?",
      answer: (
        <ul className="space-y-2">
          <li>— 3 онлайн-урока с Савелием в прямом эфире.</li>
          <li>— Доступ к записям на 6 месяцев.</li>
          <li>— Закрытый чат участников для обмена опытом.</li>
        </ul>
      )
    },
    {
      question: "Как подключиться к интенсиву?",
      answer: (
        <ul className="space-y-2">
          <li>— После регистрации вы получите ссылку на Zoom-трансляцию и инструкцию.</li>
          <li>— Подойдет любое устройство: ПК, смартфон или планшет.</li>
        </ul>
      )
    },
    {
      question: "Что если я не смогу присутствовать на эфирах?",
      answer: (
        <ul className="space-y-2">
          <li>— Все уроки будут доступны в записи через 2 часа после окончания.</li>
          <li>— Вы можете задавать вопросы кураторам в чате в любое время.</li>
        </ul>
      )
    },
    {
      question: "Как получить персональную карту желаний?",
      answer: (
        <ul className="space-y-2">
          <li>— Карта автоматически сгенерируется после заполнения анкеты (ссылку пришлем на email).</li>
          <li>— Доступ к ней откроется в первый день интенсива.</li>
        </ul>
      )
    },
    {
      question: "Почему участие сейчас бесплатное?",
      answer: (
        <ul className="space-y-2">
          <li>— Это пробный запуск бесплатного онлайн-интенсива. После недели программа станет платной (7990₽).</li>
          <li>— Условия акции: только для первых 200 участников.</li>
        </ul>
      )
    },
    {
      question: "Можно ли участвовать из другой страны?",
      answer: (
        <p>Да! Но не забывайте то что время эфиров указаны по Московскому времени.</p>
      )
    }
  ];
  
  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">
          Ответы на частые вопросы
        </h2>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div key={index} className="faq-item">
              <button
                className="w-full flex justify-between items-center text-left py-4 focus:outline-none"
                onClick={() => handleToggle(index)}
              >
                <h3 className="text-xl font-semibold">{item.question}</h3>
                <span className={`text-2xl transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                  ⌄
                </span>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pb-6 text-theme-gray">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <p className="mb-4">Остались сомнения? Свяжитесь с нами:</p>
          <div className="flex justify-center gap-4">
            <a href="#" className="text-theme-purple hover:underline">Telegram</a>
            <span>|</span>
            <a href="#" className="text-theme-purple hover:underline">Позвонить</a>
          </div>
          
          <div className="mt-8">
            <a href="#register" className="cta-button inline-block">
              Записаться бесплатно → осталось 78 мест
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

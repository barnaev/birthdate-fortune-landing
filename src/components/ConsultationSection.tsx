
import React from 'react';

const ConsultationSection: React.FC = () => {
  return (
    <section className="py-16 bg-theme-light-purple">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title text-center mb-8">
            Остались вопросы?
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Получите бесплатную консультацию от команды Савелия
            </h3>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-theme-green text-xl mr-2">✓</span>
                <span>Мы свяжемся с вами и вникнем в вашу текущую ситуацию</span>
              </li>
              <li className="flex items-start">
                <span className="text-theme-green text-xl mr-2">✓</span>
                <span>Предложим несколько разных стратегий, как вам достичь желаемых результатов</span>
              </li>
              <li className="flex items-start">
                <span className="text-theme-green text-xl mr-2">✓</span>
                <span>Поможем понять, какой формат участие в онлайн-интенсиве подходит вам больше</span>
              </li>
            </ul>
            
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="form-input"
                  required
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  placeholder="Ваш телефон"
                  className="form-input"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="cta-button w-full"
              >
                Получить консультацию
              </button>
              
              <p className="text-sm text-center text-theme-gray">
                Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;

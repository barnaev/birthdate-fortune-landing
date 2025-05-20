
import React, { useState } from 'react';
import { ArrowRight, Phone, User } from 'lucide-react';

const ConsultationSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Format phone number
  const formatPhone = (input: string) => {
    const digits = input.replace(/\D/g, '');
    if (digits.length === 0) return '';
    if (digits.length <= 1) return `+${digits}`;
    if (digits.length <= 4) return `+${digits.slice(0, 1)} (${digits.slice(1)}`;
    if (digits.length <= 7) return `+${digits.slice(0, 1)} (${digits.slice(1, 4)}) ${digits.slice(4)}`;
    return `+${digits.slice(0, 1)} (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7, 11)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert('Пожалуйста, заполните все поля');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
      setIsSubmitting(false);
      setName('');
      setPhone('');
    }, 1500);
  };

  return (
    <section className="py-16 bg-theme-light-blue/70">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title text-center mb-8">
            Остались вопросы?
          </h2>
          
          <div className="bg-white rounded-xl shadow-xl p-8 hover-lift">
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
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="consultation-name" className="block text-left text-sm font-medium mb-2 text-theme-black">
                  Ваше имя
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-theme-gray">
                    <User size={18} />
                  </div>
                  <input
                    id="consultation-name"
                    type="text"
                    placeholder="Введите ваше имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-input pl-10"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="consultation-phone" className="block text-left text-sm font-medium mb-2 text-theme-black">
                  Ваш телефон
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-theme-gray">
                    <Phone size={18} />
                  </div>
                  <input
                    id="consultation-phone"
                    type="tel"
                    placeholder="+7 (900) 000-0000"
                    value={phone}
                    onChange={handlePhoneChange}
                    className="form-input pl-10"
                    required
                  />
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-theme-blue to-theme-cyan text-white py-4 px-6 rounded-lg font-medium flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                {isSubmitting ? (
                  <>
                    <span className="inline-block animate-spin mr-2">⟳</span>
                    Отправка...
                  </>
                ) : (
                  <>
                    Получить консультацию
                    <ArrowRight size={18} />
                  </>
                )}
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

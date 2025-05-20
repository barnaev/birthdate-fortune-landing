
import React, { useState } from 'react';
import { toast } from 'sonner';
import Timer from './Timer';
import { Input } from './ui/input';
import { ArrowRight, Lock, Mail, User, Phone } from 'lucide-react';

const RegistrationForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStep, setFormStep] = useState(0);
  
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
    
    if (formStep === 0) {
      if (!name.trim()) {
        toast.error('Пожалуйста, введите ваше имя');
        return;
      }
      setFormStep(1);
      return;
    }

    if (formStep === 1) {
      if (!email.trim() || !email.includes('@')) {
        toast.error('Пожалуйста, введите корректный email');
        return;
      }
      setFormStep(2);
      return;
    }
    
    if (!phone.trim() || phone.replace(/\D/g, '').length < 11) {
      toast.error('Пожалуйста, введите корректный номер телефона');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Регистрация успешна!', {
        description: 'Информация отправлена на вашу почту.',
        duration: 5000,
      });
      setIsSubmitting(false);
      setName('');
      setEmail('');
      setPhone('');
      setFormStep(0);
    }, 1500);
  };

  const renderStepIndicator = () => (
    <div className="mb-6 flex justify-center">
      <div className="flex items-center">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${formStep === 0 ? 'bg-theme-blue text-white' : 'bg-theme-light-blue text-theme-blue'}`}>
          <User size={18} />
        </div>
        <div className={`w-12 h-1 ${formStep >= 1 ? 'bg-theme-blue' : 'bg-gray-300'}`}></div>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${formStep === 1 ? 'bg-theme-blue text-white' : 'bg-theme-light-blue text-theme-blue'}`}>
          <Mail size={18} />
        </div>
        <div className={`w-12 h-1 ${formStep >= 2 ? 'bg-theme-blue' : 'bg-gray-300'}`}></div>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${formStep === 2 ? 'bg-theme-blue text-white' : 'bg-theme-light-blue text-theme-blue'}`}>
          <Phone size={18} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto text-center">
      <div className="mb-8">
        <Timer />
      </div>
      
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-theme-blue to-theme-cyan p-6">
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Записаться на бесплатный онлайн-интенсив
          </h3>
          <p className="text-white/80 mt-2">
            Старт через 7 дней — только для первых 200 участников!
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8">
          {renderStepIndicator()}
          
          <div className="max-w-md mx-auto">
            {formStep === 0 && (
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-left text-sm font-medium mb-2 text-theme-black">
                    Ваше имя
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-theme-gray">
                      <User size={18} />
                    </div>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Введите ваше имя"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="pl-10 py-6 bg-gray-50 border-theme-light-blue focus:border-theme-blue"
                      autoFocus
                    />
                  </div>
                  <p className="text-xs text-left mt-2 text-theme-gray">
                    Как к вам обращаться в сообщениях и на интенсиве
                  </p>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-theme-blue to-theme-cyan text-white py-4 px-6 rounded-lg font-medium flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                >
                  Продолжить
                  <ArrowRight size={18} />
                </button>
              </div>
            )}
            
            {formStep === 1 && (
              <div className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-left text-sm font-medium mb-2 text-theme-black">
                    Ваш email
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-theme-gray">
                      <Mail size={18} />
                    </div>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Введите ваш email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 py-6 bg-gray-50 border-theme-light-blue focus:border-theme-blue"
                      autoFocus
                    />
                  </div>
                  <p className="text-xs text-left mt-2 text-theme-gray">
                    На этот email мы отправим материалы интенсива и доступ к трансляции
                  </p>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-theme-blue to-theme-cyan text-white py-4 px-6 rounded-lg font-medium flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                >
                  Продолжить
                  <ArrowRight size={18} />
                </button>
                
                <div>
                  <button 
                    type="button" 
                    onClick={() => setFormStep(0)}
                    className="text-theme-blue underline text-sm hover:text-theme-dark-blue"
                  >
                    Вернуться назад
                  </button>
                </div>
              </div>
            )}
            
            {formStep === 2 && (
              <div className="space-y-6">
                <div>
                  <label htmlFor="phone" className="block text-left text-sm font-medium mb-2 text-theme-black">
                    Ваш телефон
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-theme-gray">
                      <Phone size={18} />
                    </div>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (900) 000-0000"
                      value={phone}
                      onChange={handlePhoneChange}
                      className="pl-10 py-6 bg-gray-50 border-theme-light-blue focus:border-theme-blue"
                      autoFocus
                    />
                  </div>
                  <p className="text-xs text-left mt-2 text-theme-gray">
                    Мы отправим СМС с напоминанием перед началом интенсива
                  </p>
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
                      Забронировать бесплатное место
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>
                
                <div>
                  <button 
                    type="button" 
                    onClick={() => setFormStep(1)}
                    className="text-theme-blue underline text-sm hover:text-theme-dark-blue"
                  >
                    Вернуться назад
                  </button>
                </div>
              </div>
            )}
            
            <div className="mt-6 flex items-center justify-center text-sm text-theme-gray gap-2">
              <Lock size={14} />
              <p>Ваши данные защищены и не передаются третьим лицам</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;

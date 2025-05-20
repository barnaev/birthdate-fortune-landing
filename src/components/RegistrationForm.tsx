
import React, { useState } from 'react';
import { toast } from 'sonner';
import Timer from './Timer';
import { Input } from './ui/input';
import { ArrowRight, Lock, Mail, User } from 'lucide-react';

const RegistrationForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStep, setFormStep] = useState(0);

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
    
    if (!email.trim() || !email.includes('@')) {
      toast.error('Пожалуйста, введите корректный email');
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
      setFormStep(0);
    }, 1500);
  };

  return (
    <div className="max-w-3xl mx-auto text-center">
      <div className="mb-8">
        <Timer />
      </div>
      
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-theme-purple to-theme-dark-purple p-6">
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Записаться на бесплатный онлайн-интенсив
          </h3>
          <p className="text-white/80 mt-2">
            Старт через 7 дней — только для первых 200 участников!
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8">
          <div className="mb-6 flex justify-center">
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${formStep === 0 ? 'bg-theme-purple text-white' : 'bg-theme-light-purple text-theme-purple'}`}>
                <User size={18} />
              </div>
              <div className={`w-16 h-1 ${formStep === 0 ? 'bg-gray-300' : 'bg-theme-purple'}`}></div>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${formStep === 1 ? 'bg-theme-purple text-white' : 'bg-theme-light-purple text-theme-purple'}`}>
                <Mail size={18} />
              </div>
            </div>
          </div>
          
          <div className="max-w-md mx-auto">
            {formStep === 0 ? (
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
                      className="pl-10 py-6 bg-gray-50 border-theme-light-purple focus:border-theme-purple"
                      autoFocus
                    />
                  </div>
                  <p className="text-xs text-left mt-2 text-theme-gray">
                    Как к вам обращаться в сообщениях и на интенсиве
                  </p>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-theme-purple to-theme-dark-purple text-white py-4 px-6 rounded-lg font-medium flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                >
                  Продолжить
                  <ArrowRight size={18} />
                </button>
              </div>
            ) : (
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
                      className="pl-10 py-6 bg-gray-50 border-theme-light-purple focus:border-theme-purple"
                      autoFocus
                    />
                  </div>
                  <p className="text-xs text-left mt-2 text-theme-gray">
                    На этот email мы отправим материалы интенсива и доступ к трансляции
                  </p>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-theme-purple to-theme-dark-purple text-white py-4 px-6 rounded-lg font-medium flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
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
                    onClick={() => setFormStep(0)}
                    className="text-theme-purple underline text-sm hover:text-theme-dark-purple"
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

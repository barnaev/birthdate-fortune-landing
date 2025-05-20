
import React, { useState } from 'react';
import { toast } from 'sonner';
import Timer from './Timer';

const RegistrationForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Регистрация успешна!', {
        description: 'Проверьте вашу почту для получения деталей.',
      });
      setIsSubmitting(false);
      setName('');
      setEmail('');
    }, 1000);
  };

  return (
    <div className="max-w-3xl mx-auto text-center">
      <div className="mb-6">
        <Timer />
      </div>
      
      <h3 className="text-2xl md:text-3xl font-bold mb-6">
        Записаться на бесплатный онлайн-интенсив
      </h3>
      
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Ваше имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="form-input"
          />
        </div>
        
        <div className="mb-6">
          <input
            type="email"
            placeholder="Ваш email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-input"
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="cta-button w-full flex justify-center items-center"
        >
          {isSubmitting ? (
            <span className="inline-block animate-spin mr-2">⟳</span>
          ) : null}
          Забронировать бесплатное место
        </button>
        
        <p className="mt-4 text-sm text-theme-gray">
          Это займет 20 секунд. После регистрации вы сразу получите PDF-план интенсива.
        </p>
      </form>
    </div>
  );
};

export default RegistrationForm;

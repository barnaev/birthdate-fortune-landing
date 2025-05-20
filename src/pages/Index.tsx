
import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import ForWhoSection from '../components/ForWhoSection';
import ProgramSection from '../components/ProgramSection';
import ResultsSection from '../components/ResultsSection';
import BonusesSection from '../components/BonusesSection';
import LastChanceSection from '../components/LastChanceSection';
import FaqSection from '../components/FaqSection';
import ConsultationSection from '../components/ConsultationSection';
import Footer from '../components/Footer';
import FloatingBanner from '../components/FloatingBanner';
import StickyHeader from '../components/StickyHeader';

const Index = () => {
  useEffect(() => {
    document.title = "Деньги в дате рождения - Онлайн-интенсив по цифровой психологии";
  }, []);

  return (
    <div className="min-h-screen">
      <StickyHeader />
      
      <main>
        <HeroSection />
        <ForWhoSection />
        <ProgramSection />
        <ResultsSection />
        <BonusesSection />
        <LastChanceSection />
        <FaqSection />
        <ConsultationSection />
      </main>
      
      <Footer />
      <FloatingBanner />
    </div>
  );
};

export default Index;

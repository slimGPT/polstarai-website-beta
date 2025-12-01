import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import VerticalAIDeliversSection from '@/components/VerticalAIDeliversSection';
import AboutUsSection from '@/components/AboutUsSection';
import BehavioralArchitectureSection from '@/components/BehavioralArchitectureSection';
import RAGSection from '@/components/RAGSection';
import AIConstellationSection from '@/components/AIConstellationSection';
import WhyPolstarSection from '@/components/WhyPolstarSection';
import PartnersSection from '@/components/PartnersSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import SpaceBackground from '@/components/SpaceBackground';
import ScrollStars from '@/components/ScrollStars';
import CursorTrail from '@/components/CursorTrail';
import SectionDivider from '@/components/SectionDivider';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function PolstarHome() {
  useEffect(() => {
    // Ensure ScrollTrigger refreshes after all components mount
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Original space background with floating elements and stars - covers entire site */}
      <SpaceBackground />
      
      {/* Scroll-based star movement */}
      <ScrollStars />
      
      {/* Cursor trail effect */}
      <CursorTrail />
      
      <Header />
      <HeroSection />
      <SectionDivider variant="gradient" className="opacity-20 my-0" />
      <ProblemSection />
      <SectionDivider variant="gradient" className="opacity-20 my-0" />
      <VerticalAIDeliversSection />
      <SectionDivider variant="gradient" className="opacity-20 my-0" />
      <AboutUsSection />
      <SectionDivider variant="gradient" className="opacity-20 my-0" />
      <BehavioralArchitectureSection />
      <SectionDivider variant="gradient" className="opacity-20 my-0" />
      <RAGSection />
      <SectionDivider variant="gradient" className="opacity-20 my-0" />
      <AIConstellationSection />
      <SectionDivider variant="gradient" className="opacity-20 my-0" />
      <WhyPolstarSection />
      <SectionDivider variant="gradient" className="opacity-20 my-0" />
      <PartnersSection />
      <SectionDivider variant="gradient" className="opacity-20 my-0" />
      <ContactSection />
      <Footer />
    </div>
  );
}

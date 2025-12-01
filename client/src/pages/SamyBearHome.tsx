import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SamyBearHeader from '@/components/samybear/SamyBearHeader';
import Footer from '@/components/Footer';
import SamyBearHeroSection from '@/components/samybear/SamyBearHeroSection';
import ProblemSection from '@/components/ProblemSection';
import VerticalAIDeliversSection from '@/components/VerticalAIDeliversSection';
import AIConstellationSection from '@/components/AIConstellationSection';
import WhyPolstarSection from '@/components/WhyPolstarSection';
import ContactSection from '@/components/ContactSection';
import SpaceBackground from '@/components/SpaceBackground';
import ScrollStars from '@/components/ScrollStars';
import CursorTrail from '@/components/CursorTrail';
import SectionDivider from '@/components/SectionDivider';

export default function SamyBearHome() {
  useEffect(() => {
    // Ensure ScrollTrigger refreshes after all components mount
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Animated space background with stars, shooting stars, and nebula clouds */}
      <SpaceBackground />
      
      {/* Scroll-based star movement */}
      <ScrollStars />
      
      {/* Cursor trail effect */}
      <CursorTrail />
      
      <SamyBearHeader />
      <main className="relative" style={{ zIndex: 10, position: 'relative' }}>
        {/* Sec 1: Hero */}
        <SamyBearHeroSection />
        
        {/* Sec 2: The Problem */}
        <ProblemSection />
        
        {/* Sec 3: What Vertical AI Delivers */}
        <VerticalAIDeliversSection />
        
        {/* Sec 4: AI Constellation */}
        <AIConstellationSection />
        <SectionDivider variant="gradient" className="opacity-20 my-0" />
        
        {/* Why Polstar Section */}
        <WhyPolstarSection />
        <SectionDivider variant="gradient" className="opacity-20 my-0" />
        
        {/* Contact Section */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}


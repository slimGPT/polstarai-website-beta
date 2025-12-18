import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SamyBearHeader from '@/components/samybear/SamyBearHeader';
import Footer from '@/components/Footer';
import SamyBearHeroSection from '@/components/samybear/SamyBearHeroSection';
import ProblemSection from '@/components/ProblemSection';
import PolstarMissionSection from '@/components/PolstarMissionSection';
import AgenticAISection from '@/components/AgenticAISection';
import SamyBearFeaturedSection from '@/components/SamyBearFeaturedSection';
import FamilyFlowSection from '@/components/FamilyFlowSection';
import ParentDashboardPlaceholderSection from '@/components/ParentDashboardPlaceholderSection';
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
        <SectionDivider variant="gradient" className="opacity-20 my-0" />
        
        {/* Sec 2: Why Children Need Humane AI */}
        <ProblemSection />
        <SectionDivider variant="gradient" className="opacity-20 my-0" />
        
        {/* Sec 3: Why PolstarAI Exists */}
        <PolstarMissionSection />
        <SectionDivider variant="gradient" className="opacity-20 my-0" />
        
        {/* Sec 4: Meet SamyBear */}
        <SamyBearFeaturedSection />
        <SectionDivider variant="gradient" className="opacity-20 my-0" />
        
        {/* Sec 5: The Tech Behind It */}
        <AgenticAISection />
        <SectionDivider variant="gradient" className="opacity-20 my-0" />
        
        {/* Sec 6: How Families Use SamyBear */}
        <FamilyFlowSection />
        <SectionDivider variant="gradient" className="opacity-20 my-0" />
        
        {/* Sec 7: Parent Dashboard Preview */}
        <ParentDashboardPlaceholderSection />
        <SectionDivider variant="gradient" className="opacity-20 my-0" />
        
        {/* Sec 8: Join the Waitlist */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}


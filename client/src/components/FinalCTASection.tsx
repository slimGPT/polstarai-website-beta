import { usePremiumScrollAnimation } from '@/hooks/usePremiumScrollAnimation';
import SectionSeparator from './SectionSeparator';
import SubtleStarBackground from './SubtleStarBackground';
import { Button } from '@/components/ui/button';

export default function FinalCTASection() {
  const titleRef = usePremiumScrollAnimation({ animation: 'fadeUp', duration: 1.2 });
  const ctaRef = usePremiumScrollAnimation({ animation: 'scaleIn', delay: 0.4, duration: 1 });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 96;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="final-cta" className="relative py-20 lg:py-32 bg-black overflow-hidden">
      <SubtleStarBackground density="medium" />
      
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/10 via-transparent to-cyan-950/10 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <SectionSeparator variant="gradient" className="mb-12 lg:mb-16" />
          
          <div ref={titleRef} className="mb-10 lg:mb-12">
            <h2 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 lg:mb-8 leading-tight"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              Join Us in Building Humane AI for the Next Generation
            </h2>
          </div>
          
          <div ref={ctaRef}>
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="px-12 py-6 text-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 shadow-lg shadow-blue-500/30 hover:scale-105"
            >
              Join the Waitlist
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}


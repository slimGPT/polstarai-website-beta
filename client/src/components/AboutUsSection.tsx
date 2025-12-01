import { usePremiumScrollAnimation } from '@/hooks/usePremiumScrollAnimation';
import SectionSeparator from './SectionSeparator';
import SubtleStarBackground from './SubtleStarBackground';
import SectionConstellation from './SectionConstellation';

export default function AboutUsSection() {
  const contentRef = usePremiumScrollAnimation({ animation: 'fadeUpBlur', delay: 0.2, duration: 1.2 });

  return (
    <section id="about-us" className="relative py-10 lg:py-12 bg-black overflow-hidden">
      <SubtleStarBackground density="medium" />
      <SectionConstellation sectionId="about-us" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <SectionSeparator variant="gradient" className="mb-8 lg:mb-10" />
          
          <div ref={contentRef} className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 lg:mb-8">
              About Us
            </h2>
            
            <p className="text-lg sm:text-xl lg:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Just like SpaceX built reusable systems that made rocket launches faster, cheaper, more reliable and infinitely scalable, PolstarAI builds AI agents powered by a shared, reusable behavioral intelligence layer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


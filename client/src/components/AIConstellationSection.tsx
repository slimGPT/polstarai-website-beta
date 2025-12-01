import AgentsCarousel from './AgentsCarousel';
import { usePremiumScrollAnimation } from '@/hooks/usePremiumScrollAnimation';
import SectionSeparator from './SectionSeparator';
import SubtleStarBackground from './SubtleStarBackground';
import SectionConstellation from './SectionConstellation';

export default function AIConstellationSection() {
  const introRef = usePremiumScrollAnimation({ animation: 'blurIn', duration: 1.2 });
  const carouselRef = usePremiumScrollAnimation({ animation: 'fadeUp', delay: 0.4, duration: 1.3 });

  return (
    <section id="ai-constellation" className="relative py-10 lg:py-12 bg-black overflow-hidden">
      <SubtleStarBackground density="high" />
      <SectionConstellation sectionId="ai-constellation" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionSeparator variant="gradient" className="mb-8 lg:mb-10" />
      
          <div ref={introRef} className="mb-8 lg:mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 text-left">AI Constellation</h2>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl text-left md:text-left">
              Our constellation of AI agents spans hospitality, finance and education, each designed for a specific mission and optimized for real-world deployment.
            </p>
          </div>
          
          {/* Agent Carousel */}
          <div ref={carouselRef}>
            <AgentsCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}


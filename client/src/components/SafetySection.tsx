import { usePremiumScrollAnimation } from '@/hooks/usePremiumScrollAnimation';
import SectionSeparator from './SectionSeparator';
import SubtleStarBackground from './SubtleStarBackground';
import SectionConstellation from './SectionConstellation';
import UNICEFPillarsSection from './samybear/UNICEFPillarsSection';

export default function SafetySection() {
  const titleRef = usePremiumScrollAnimation({ animation: 'fadeUp', duration: 1.2 });

  return (
    <section id="safety" className="relative py-20 lg:py-24 bg-black overflow-hidden">
      <SubtleStarBackground density="medium" />
      <SectionConstellation sectionId="safety" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionSeparator variant="gradient" className="mb-12 lg:mb-16" />
          
          <div ref={titleRef} className="mb-12 lg:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 lg:mb-8 leading-tight text-center">
              Safety at the Core
            </h2>
          </div>
        </div>
      </div>
      
      {/* Use the existing UNICEF Pillars Section */}
      <UNICEFPillarsSection />
    </section>
  );
}


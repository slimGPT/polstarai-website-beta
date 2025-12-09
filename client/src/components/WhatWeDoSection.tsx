import { usePremiumScrollAnimation } from '@/hooks/usePremiumScrollAnimation';
import SectionSeparator from './SectionSeparator';
import SubtleStarBackground from './SubtleStarBackground';
import SectionConstellation from './SectionConstellation';

export default function WhatWeDoSection() {
  const titleRef = usePremiumScrollAnimation({ animation: 'fadeUp', duration: 1.2 });
  const contentRef = usePremiumScrollAnimation({ animation: 'blurIn', delay: 0.3, duration: 1 });

  return (
    <section id="what-we-do" className="relative py-20 lg:py-24 bg-black overflow-hidden">
      <SubtleStarBackground density="low" />
      <SectionConstellation sectionId="what-we-do" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionSeparator variant="gradient" className="mb-12 lg:mb-16" />
          
          <div ref={titleRef} className="mb-8 lg:mb-10">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 lg:mb-8 leading-tight text-left">
              We create safe, emotionally-aware AI companions for children
            </h2>
          </div>
          
          <div ref={contentRef} className="max-w-4xl">
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed">
              PolstarAI develops voice-based AI companions that help children learn, build healthy habits, and express themselves safely. Each companion follows strict safety and developmental standards, gives parents full visibility, and grows with the child through age-appropriate interactions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


import { usePremiumScrollAnimation } from '@/hooks/usePremiumScrollAnimation';
import SubtleStarBackground from './SubtleStarBackground';
import ConstellationBackground from './ConstellationBackground';
import SectionConstellation from './SectionConstellation';

export default function WhyWeShineSection() {
  const contentRef = usePremiumScrollAnimation({ animation: 'fadeUpBlur', duration: 1.2 });
  const lineRef = usePremiumScrollAnimation({ animation: 'scaleIn', delay: 0.2, duration: 1 });

  return (
    <section id="why-we-shine" className="relative py-6 lg:py-8 bg-black overflow-hidden">
      <SubtleStarBackground density="low" />
      <ConstellationBackground density="medium" />
      <SectionConstellation sectionId="why-we-shine" />
      
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 via-transparent to-cyan-900/5 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div ref={lineRef} className="mb-5 lg:mb-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-left mb-4">
              Why We Shine
            </h2>
          </div>
          
          {/* Two-column layout on desktop, single column on mobile */}
          <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">
            {/* Left: Main statement */}
            <div className="text-left">
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed font-medium mb-6">
                We shine because we build agents that understand context, adapt to users, and deliver measurable outcomes—turning AI from an abstract idea into a practical advantage.
              </p>
            </div>
            
            {/* Right: Supporting points */}
            <div className="text-left space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-400 mt-2.5 flex-shrink-0" />
                <p className="text-base text-white/80 leading-relaxed">
                  Context-aware intelligence that adapts in real-time
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2.5 flex-shrink-0" />
                <p className="text-base text-white/80 leading-relaxed">
                  Measurable outcomes that create real operational impact
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2.5 flex-shrink-0" />
                <p className="text-base text-white/80 leading-relaxed">
                  Purpose-driven design for specific roles and workflows
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


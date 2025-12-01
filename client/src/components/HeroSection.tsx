import { useEffect, useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SectionConstellation from './SectionConstellation';
import HeroStarField from './HeroStarField';

export default function HeroSection() {
  const titleRef = useScrollAnimation({ animation: 'fadeInUp', delay: 0.1 });
  const sloganRef = useScrollAnimation({ animation: 'fadeInUp', delay: 0.2 });
  const buttonsRef = useScrollAnimation({ animation: 'fadeInUp', delay: 0.5 });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 80; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };


  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-x-hidden overflow-y-visible">
      {/* Section-specific constellation */}
      <SectionConstellation sectionId="hero" />
      
      {/* Subtle starfield background */}
      <HeroStarField />
      
      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-40 container mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16" style={{ pointerEvents: 'auto' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-8 lg:gap-12 items-start lg:items-center">
            {/* Content */}
            <div className="text-left">
              <h1 ref={titleRef} className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 lg:mb-4 leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
                  Purpose-built agents powered by a unified intelligence layer
                </span>
              </h1>
              
              <p ref={sloganRef} className="text-base sm:text-lg lg:text-xl text-cyan-300 italic mb-6 lg:mb-8 font-normal tracking-wide opacity-90">
                One agent. One painful problem. One ideal customer.
              </p>
              
              <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    scrollToSection('ai-constellation');
                  }}
                  style={{ pointerEvents: 'auto', position: 'relative', zIndex: 50 }}
                  className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-200 text-lg overflow-hidden hover:-translate-y-0.5 hover:shadow-lg whitespace-nowrap flex-shrink-0 h-[56px] flex items-center justify-center cursor-pointer"
                  type="button"
                >
                  <span className="relative z-10">Explore Our Agents</span>
                  <span className="absolute inset-0 bg-white/10 scale-0 group-active:scale-100 transition-transform duration-300 opacity-0 group-active:opacity-100 rounded-lg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

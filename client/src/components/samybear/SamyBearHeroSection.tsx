import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import SectionConstellation from '@/components/SectionConstellation';
import HeroStarField from '@/components/HeroStarField';

export default function SamyBearHeroSection() {
  const [introComplete, setIntroComplete] = useState(false);
  const aiCircleRef = useRef<HTMLDivElement>(null);
  const greetingRef = useRef<HTMLDivElement>(null);
  const explosionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // Skip animation, show content immediately
      setIntroComplete(true);
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        setIntroComplete(true);
      },
    });

    // Initial state - hide everything
    gsap.set([explosionRef.current, contentRef.current], {
      opacity: 0,
      scale: 0,
    });
    gsap.set(aiCircleRef.current, { opacity: 0, scale: 0.5 });
    gsap.set(greetingRef.current, { opacity: 0, y: 20 });
    gsap.set(contentRef.current, { opacity: 0, scale: 0.8, y: 30 });

    // Step 1: Blue AI Circle appears
    tl.to(aiCircleRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: 'back.out(1.7)',
    })
      // Step 2: Greeting appears
      .to(greetingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
      }, '-=0.3')
      // Step 3: Hold for greeting (2-3 seconds)
      .to({}, { duration: 3 })
      // Step 4: Epic Explosion - Circle explodes dramatically
      // Build up - circle pulses
      .to(aiCircleRef.current, {
        scale: 1.15,
        duration: 0.2,
        ease: 'power2.out',
      })
      .to(aiCircleRef.current, {
        scale: 0.8,
        duration: 0.15,
        ease: 'power2.in',
      })
      // Explosion starts
      .to(explosionRef.current, {
        opacity: 1,
        scale: 0.8,
        duration: 0.1,
        ease: 'power1.out',
      }, '-=0.05')
      // Circle shatters and explodes outward (no rotation)
      .to(aiCircleRef.current, {
        scale: 3,
        opacity: 0,
        duration: 0.5,
        ease: 'power3.out',
      }, '-=0.1')
      .to(greetingRef.current, {
        opacity: 0,
        scale: 0.3,
        y: -30,
        duration: 0.2,
        ease: 'power2.in',
      }, '-=0.5')
      // Massive explosion expansion (faster)
      .to(explosionRef.current, {
        scale: 2.5,
        opacity: 0.9,
        duration: 0.2,
        ease: 'power2.out',
      }, '-=0.4')
      .to(explosionRef.current, {
        scale: 4,
        opacity: 0.7,
        duration: 0.25,
        ease: 'power1.out',
      }, '-=0.15')
      .to(explosionRef.current, {
        scale: 6,
        opacity: 0.4,
        duration: 0.3,
        ease: 'power1.inOut',
      }, '-=0.15')
      .to(explosionRef.current, {
        scale: 8,
        opacity: 0,
        duration: 0.35,
        ease: 'power2.in',
      }, '-=0.2')
      // Wait 0.4 seconds after explosion
      .to({}, { duration: 0.4 });

    // Step 5: Text appears slowly after delay
    tl.to(contentRef.current, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 1.2,
      ease: 'power2.out',
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ position: 'relative', zIndex: 1 }}>
      {/* Section-specific constellation */}
      <SectionConstellation sectionId="hero" />
      
      {/* Subtle starfield background */}
      <HeroStarField />
      
      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" style={{ zIndex: 0 }} />
      
      {/* Intro Sequence */}
      {!introComplete && (
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          {/* Blue AI Circle - Radial Starburst Pattern */}
          <div ref={aiCircleRef} className="absolute z-30 flex flex-col items-center justify-center pointer-events-none">
            <div className="relative">
              {/* Radial Starburst Circle - Matching Image Pattern */}
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden">
                {/* Radial gradient background - dark blue center to light blue/white edges */}
                <div 
                  className="absolute inset-0 rounded-full" 
                  style={{ 
                    background: 'radial-gradient(circle at center, rgba(0, 0, 100, 0.8) 0%, rgba(0, 0, 200, 0.6) 30%, rgba(0, 100, 255, 0.4) 60%, rgba(150, 200, 255, 0.2) 80%, rgba(255, 255, 255, 0.1) 100%)',
                  }}
                />
                {/* Create radial rays */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                  <defs>
                    <radialGradient id="rayGradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="white" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="cyan" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="blue" stopOpacity="0.4" />
                    </radialGradient>
                  </defs>
                  {[...Array(32)].map((_, i) => {
                    const angle = (i * 360) / 32;
                    const x1 = 100 + 50 * Math.cos((angle * Math.PI) / 180);
                    const y1 = 100 + 50 * Math.sin((angle * Math.PI) / 180);
                    const x2 = 100 + 100 * Math.cos((angle * Math.PI) / 180);
                    const y2 = 100 + 100 * Math.sin((angle * Math.PI) / 180);
                    return (
                      <line
                        key={i}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="url(#rayGradient)"
                        strokeWidth="2"
                        opacity="0.6"
                      />
                    );
                  })}
                  {/* Curved white/light blue segments in quadrants */}
                  <path d="M100 0 A100 100 0 0 1 200 100 L100 100 Z" fill="rgba(255,255,255,0.1)" />
                  <path d="M0 100 A100 100 0 0 1 100 200 L100 100 Z" fill="rgba(255,255,255,0.1)" />
                  <path d="M100 0 A100 100 0 0 0 0 100 L100 100 Z" fill="rgba(150,200,255,0.1)" />
                  <path d="M200 100 A100 100 0 0 0 100 200 L100 100 Z" fill="rgba(150,200,255,0.1)" />
                </svg>
                
                {/* Center dark cross/intersection */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-blue-900 rounded-full opacity-80" />
                </div>
                
                {/* Static overlay for dynamic effect (no rotation) */}
                <div 
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent" 
                />
              </div>
              {/* Glow effect */}
              <div
                className="absolute inset-0 -z-10 blur-3xl opacity-40"
                style={{
                  background: 'radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, transparent 70%)',
                }}
              />
            </div>
            
            {/* Greeting Text */}
            <div ref={greetingRef} className="mt-6 text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-white bg-clip-text text-transparent">
                  Ever wonder what makes an agent… EXCEPTIONAL?
                </span>
              </p>
            </div>
          </div>

          {/* Big Bang Explosion Effect */}
          <div ref={explosionRef} className="absolute z-20 pointer-events-none" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
            <div className="w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/40 via-cyan-500/40 to-white/40 blur-3xl" />
            <div className="absolute inset-0 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-white/20 blur-2xl" />
            <div className="absolute inset-0 w-96 h-96 rounded-full bg-white/10 blur-xl" />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div 
        ref={contentRef}
        className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16"
        style={{ pointerEvents: 'auto', position: 'relative', zIndex: 10 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 lg:mb-4 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
                Purpose-built agents powered by a unified intelligence layer
              </span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-cyan-300 italic mb-6 lg:mb-8 font-normal tracking-wide opacity-90 max-w-3xl">
              One agent. One painful problem. One ideal customer.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6" style={{ position: 'relative', zIndex: 11 }}>
              <button
                onClick={() => {
                  console.log('CLICK REGISTERED - Explore Our Agents button');
                  scrollToSection('ai-constellation');
                }}
                style={{ position: 'relative', zIndex: 12 }}
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
    </section>
  );
}

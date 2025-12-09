import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

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
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden" 
      style={{ 
        position: 'relative', 
        zIndex: 1,
        willChange: 'transform',
        transform: 'translate3d(0, 0, 0)',
      }}
    >
      {/* Discrete background image - Lazy loaded and optimized */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ 
          zIndex: 0,
          willChange: 'transform',
          transform: 'translate3d(0, 0, 0)',
        }}
      >
        <img 
          src="/images/WhatsApp Image 2025-09-03 at 15.28.03_0f0c9650.jpg"
          alt=""
          className="w-full h-full object-cover opacity-30"
          style={{
            mixBlendMode: 'soft-light',
            loading: 'lazy' as const,
            decoding: 'async' as const,
            fetchPriority: 'low' as const,
          }}
        />
      </div>
      
      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" style={{ zIndex: 1 }} />
      
      {/* Intro Sequence */}
      {!introComplete && (
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          {/* Logo - Clean Replacement */}
          <div ref={aiCircleRef} className="absolute z-30 flex flex-col items-center justify-center pointer-events-none">
            <div className="relative">
              {/* Logo Image */}
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 flex items-center justify-center relative">
                <img 
                  src="/images/logomain.png" 
                  alt="PolstarAI Logo" 
                  className="w-full h-full object-contain drop-shadow-2xl"
                  style={{
                    filter: 'drop-shadow(0 20px 60px rgba(59, 130, 246, 0.4))',
                    imageRendering: 'high-quality',
                  }}
                />
                {/* Subtle glow effect behind logo */}
                <div
                  className="absolute inset-0 -z-10 blur-3xl opacity-30"
                  style={{
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, transparent 70%)',
                  }}
                />
              </div>
            </div>
            
            {/* Greeting Text */}
            <div ref={greetingRef} className="mt-6 text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-white bg-clip-text text-transparent">
                  Peace of Mind in an AI-Driven Childhood
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
        style={{ 
          pointerEvents: 'auto', 
          position: 'relative', 
          zIndex: 10,
          willChange: 'transform, opacity',
          transform: 'translate3d(0, 0, 0)',
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 lg:mb-4 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
                Adaptive AI for Curious Young Minds
              </span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-cyan-300 italic mb-6 lg:mb-8 font-normal tracking-wide opacity-90 max-w-3xl">
              We build AI systems that support early learning, safe exploration, and healthy digital habits.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6" style={{ position: 'relative', zIndex: 11 }}>
              <button
                onClick={() => {
                  console.log('CLICK REGISTERED - Join Waitlist button');
                  scrollToSection('contact');
                }}
                style={{ position: 'relative', zIndex: 12 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 text-lg overflow-hidden hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30 whitespace-nowrap flex-shrink-0 h-[56px] flex items-center justify-center cursor-pointer"
                type="button"
              >
                <span className="relative z-10">Join the Waitlist</span>
                <span className="absolute inset-0 bg-white/10 scale-0 group-active:scale-100 transition-transform duration-300 opacity-0 group-active:opacity-100 rounded-lg" />
              </button>
              <button
                onClick={() => {
                  console.log('CLICK REGISTERED - Learn More button');
                  scrollToSection('samybear');
                }}
                style={{ position: 'relative', zIndex: 12 }}
                className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-200 text-lg overflow-hidden hover:-translate-y-0.5 hover:shadow-lg whitespace-nowrap flex-shrink-0 h-[56px] flex items-center justify-center cursor-pointer"
                type="button"
              >
                <span className="relative z-10">Learn More</span>
                <span className="absolute inset-0 bg-white/10 scale-0 group-active:scale-100 transition-transform duration-300 opacity-0 group-active:opacity-100 rounded-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

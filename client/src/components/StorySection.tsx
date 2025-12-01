import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FloatingSparkles from './FloatingSparkles';

gsap.registerPlugin(ScrollTrigger);

export default function StorySection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const closingRef = useRef<HTMLParagraphElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const problemPoints = [
    'They overwhelm children with noise, speed, and endless content.',
    'They treat attention as something to capture, not something to protect.',
    'They rarely listen, reflect, or adapt to the child in front of them.',
  ];

  const approachPoints = [
    'Emotionally intelligent agents that listen first, then respond.',
    'Calm, child-led exploration inspired by Montessori principles.',
    'Technology that slows things down and makes room for real thinking.',
  ];

  const values = ['warm connection', 'child-led discovery', 'emotional intelligence', 'respect for attention'];

  useEffect(() => {
    if (!sectionRef.current) return;

    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Headline: Fade + slide up on scroll
    if (headlineRef.current) {
      gsap.from(headlineRef.current, {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headlineRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }

    // Left column: Stagger in (first)
    if (leftColumnRef.current) {
      const leftElements = leftColumnRef.current.querySelectorAll('.animate-item');
      gsap.from(leftElements, {
        y: 30,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: leftColumnRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }

    // Right column: Stagger in (after left)
    if (rightColumnRef.current) {
      const rightElements = rightColumnRef.current.querySelectorAll('.animate-item');
      gsap.from(rightElements, {
        y: 30,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        delay: 0.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: rightColumnRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }

    // Value pills: Stagger animation (small upward motion + fade-in)
    if (valuesRef.current) {
      const pills = valuesRef.current.querySelectorAll('.value-pill');
      gsap.from(pills, {
        y: 20,
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        stagger: 0.1,
        delay: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: valuesRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      // Hover effects for pills
      pills.forEach((pill) => {
        pill.addEventListener('mouseenter', () => {
          gsap.to(pill, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out',
          });
        });

        pill.addEventListener('mouseleave', () => {
          gsap.to(pill, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out',
          });
        });
      });
    }

    // Closing sentence: Fade-in
    if (closingRef.current) {
      gsap.from(closingRef.current, {
        y: 20,
        opacity: 0,
        duration: 1,
        delay: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: closingRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === sectionRef.current || 
            (sectionRef.current && sectionRef.current.contains(trigger.trigger as Node))) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 md:py-40 lg:py-48 overflow-hidden">
      {/* Warm background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div
          className="absolute rounded-full blur-3xl opacity-15"
          style={{
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(230, 230, 250, 0.25) 0%, transparent 70%)',
            top: '20%',
            left: '10%',
          }}
        />
        <div
          className="absolute rounded-full blur-3xl opacity-15"
          style={{
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(255, 192, 203, 0.25) 0%, transparent 70%)',
            bottom: '20%',
            right: '10%',
          }}
        />
        <div
          className="absolute rounded-full blur-3xl opacity-12"
          style={{
            width: '550px',
            height: '550px',
            background: 'radial-gradient(circle, rgba(176, 224, 230, 0.2) 0%, transparent 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>

      {/* Floating Sparkles */}
      <FloatingSparkles count={12} />

      <div className="container relative z-10 max-w-7xl mx-auto px-6">
        {/* Headline with Enhanced Visuals */}
        <h2
          ref={headlineRef}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-center mb-24 md:mb-28 lg:mb-32 leading-tight max-w-5xl mx-auto relative"
        >
          <span
            className="block bg-gradient-to-r from-blue-300 via-cyan-300 to-yellow-300 bg-clip-text text-transparent"
            style={{
              filter: 'drop-shadow(0 0 30px rgba(59, 130, 246, 0.3))',
            }}
          >
            Children don't need more content — they need better conversations.
          </span>
          {/* Subtle glow behind headline */}
          <div
            className="absolute inset-0 blur-3xl opacity-20 -z-10"
            style={{
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(6, 182, 212, 0.3) 50%, transparent 70%)',
              transform: 'scale(1.3)',
            }}
          />
        </h2>

        {/* Two-Column Layout with Enhanced Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 mb-24 md:mb-28 lg:mb-32 relative">
          {/* Visual divider between columns on desktop */}
          <div
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{
              background: 'linear-gradient(to bottom, transparent, rgba(59, 130, 246, 0.25), transparent)',
            }}
          />

          {/* Left Column - The Problem */}
          <div
            ref={leftColumnRef}
            className="text-left relative p-10 md:p-12 lg:p-14 rounded-[28px] glass-card warm-gradient-pink glass-card-hover"
          >
            {/* Decorative accent line */}
            <div
              className="absolute top-0 left-8 md:left-10 lg:left-12 w-1 h-16 rounded-full"
              style={{
                background: 'linear-gradient(to bottom, rgba(239, 68, 68, 0.6), rgba(239, 68, 68, 0.2), transparent)',
              }}
            />

            <h3
              className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-5 animate-item"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 192, 203, 0.95) 0%, rgba(255, 182, 193, 0.95) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 2px 20px rgba(255, 192, 203, 0.3)',
              }}
            >
              The Problem
            </h3>
            <p
              className="text-base md:text-lg lg:text-xl text-white/70 mb-10 md:mb-12 font-semibold animate-item uppercase tracking-wider"
              style={{
                letterSpacing: '0.1em',
              }}
            >
              The problem with today's tools
            </p>
            <ul className="space-y-6 md:space-y-7 animate-item">
              {problemPoints.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 text-base md:text-lg lg:text-xl text-white/90 leading-relaxed group"
                  style={{
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <div
                    className="flex-shrink-0 w-2 h-2 rounded-full mt-2 transition-all group-hover:scale-125"
                    style={{
                      background: 'rgba(239, 68, 68, 0.8)',
                      boxShadow: '0 0 12px rgba(239, 68, 68, 0.5)',
                    }}
                  />
                  <span className="flex-1">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Our Approach */}
          <div
            ref={rightColumnRef}
            className="text-left relative p-10 md:p-12 lg:p-14 rounded-[28px] glass-card warm-gradient-blue glass-card-hover"
          >
            {/* Decorative accent line */}
            <div
              className="absolute top-0 left-8 md:left-10 lg:left-12 w-1 h-16 rounded-full"
              style={{
                  background: 'linear-gradient(to bottom, rgba(59, 130, 246, 0.6), rgba(6, 182, 212, 0.3), transparent)',
              }}
            />

            <h3
              className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-5 animate-item"
              style={{
                background: 'linear-gradient(135deg, rgba(176, 224, 230, 0.95) 0%, rgba(230, 230, 250, 0.95) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 2px 20px rgba(176, 224, 230, 0.3)',
              }}
            >
              Our Approach
            </h3>
            <p
              className="text-base md:text-lg lg:text-xl text-white/70 mb-10 md:mb-12 font-semibold animate-item uppercase tracking-wider"
              style={{
                letterSpacing: '0.1em',
              }}
            >
              What we're building instead
            </p>
            <ul className="space-y-6 md:space-y-7 animate-item">
              {approachPoints.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 text-base md:text-lg lg:text-xl text-white/90 leading-relaxed group"
                  style={{
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <div
                    className="flex-shrink-0 w-2 h-2 rounded-full mt-2 transition-all group-hover:scale-125"
                    style={{
                      background: 'rgba(59, 130, 246, 0.8)',
                      boxShadow: '0 0 12px rgba(59, 130, 246, 0.5)',
                    }}
                  />
                  <span className="flex-1">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Value Pills Row - Enhanced with Gradients */}
        <div
          ref={valuesRef}
          className="flex flex-wrap justify-center gap-5 md:gap-6 mb-20 md:mb-24 lg:mb-28 px-4"
        >
          {values.map((value, index) => (
            <div
              key={index}
              className="value-pill px-10 py-5 md:px-12 md:py-6 rounded-full glass-card warm-gradient-bg cursor-default transition-all relative overflow-hidden group glass-card-hover"
              style={{
                willChange: 'transform',
              }}
              onMouseEnter={(e) => {
                if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                  gsap.to(e.currentTarget, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: 'power2.out',
                  });
                }
              }}
              onMouseLeave={(e) => {
                if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                  gsap.to(e.currentTarget, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out',
                  });
                }
              }}
            >
              {/* Shimmer effect on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
                  transform: 'translateX(-100%)',
                  animation: 'shimmer 2s infinite',
                }}
              />
              <span
                className="text-base md:text-lg lg:text-xl font-semibold whitespace-nowrap relative z-10"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.85) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {value}
              </span>
            </div>
          ))}
        </div>

        {/* Closing Callout - Enhanced Styling */}
        <div ref={closingRef} className="relative max-w-4xl mx-auto">
          <p
            className="text-xl md:text-2xl lg:text-3xl text-center leading-relaxed font-semibold italic relative z-10 px-10 py-8 md:py-10 rounded-[28px] glass-card warm-gradient-lavender"
            style={{
              color: 'rgba(255, 255, 255, 0.95)',
              textShadow: '0 2px 20px rgba(0, 0, 0, 0.2), 0 0 40px rgba(59, 130, 246, 0.15)',
            }}
          >
            When children feel understood and supported, their curiosity becomes unstoppable.
          </p>
        </div>
      </div>

      {/* CSS Animation for Shimmer */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </section>
  );
}

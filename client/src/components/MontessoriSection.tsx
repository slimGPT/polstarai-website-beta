import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FloatingSparkles from './FloatingSparkles';

gsap.registerPlugin(ScrollTrigger);

export default function MontessoriSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const closingRef = useRef<HTMLParagraphElement>(null);

  const mariaContentRef = useRef<HTMLDivElement>(null);
  const mariaImageRef = useRef<HTMLDivElement>(null);

  const principlesRef = useRef<HTMLDivElement>(null);

  const principles = [
    {
      number: 1,
      title: 'Respect for the Child',
      description: 'A child thrives when treated with dignity, patience, and genuine attention to their thoughts and feelings.',
    },
    {
      number: 2,
      title: 'The Absorbent Mind',
      description: 'Children naturally take in everything around them, turning experiences into understanding.',
    },
    {
      number: 3,
      title: 'Sensitive Periods',
      description: 'During certain stages, children show intense interest in specific skills and learn them effortlessly.',
    },
    {
      number: 4,
      title: 'The Prepared Environment',
      description: 'A calm, orderly space allows children to explore freely and build independence.',
    },
    {
      number: 5,
      title: 'Auto-Education (Self-Directed Learning)',
      description: 'When free to follow their curiosity, children teach themselves more deeply than any structured lesson.',
    },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Ensure content is visible by default
    if (titleRef.current) gsap.set(titleRef.current, { opacity: 1, y: 0 });
    if (subtitleRef.current) gsap.set(subtitleRef.current, { opacity: 1, y: 0 });
    if (mariaContentRef.current) gsap.set(mariaContentRef.current, { opacity: 1, y: 0 });
    if (principlesRef.current) {
      const cards = principlesRef.current.querySelectorAll('.principle-card');
      cards.forEach(card => gsap.set(card, { opacity: 1, y: 0 }));
    }
    if (closingRef.current) gsap.set(closingRef.current, { opacity: 1, y: 0 });

    if (prefersReducedMotion) return;

    // Title animation
    if (titleRef.current) {
      gsap.from(titleRef.current, {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }

    // Subtitle animation
    if (subtitleRef.current) {
      gsap.from(subtitleRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }

    // Maria unified card animation
    if (mariaContentRef.current) {
      gsap.from(mariaContentRef.current, {
        y: 50,
        opacity: 0,
        duration: 1.2,
        delay: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: mariaContentRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }

    // Principles cards - fade up with stagger
    if (principlesRef.current) {
      const cards = principlesRef.current.querySelectorAll('.principle-card');
      cards.forEach((card, index) => {
        gsap.from(card, {
          y: 60,
          opacity: 0,
          duration: 0.9,
          delay: 0.3 + (index * 0.15),
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      });
    }

    // Closing text
    if (closingRef.current) {
      gsap.from(closingRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: closingRef.current,
          start: 'top 85%',
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
    <section ref={sectionRef} className="relative py-32 md:py-40 lg:py-48 overflow-hidden warm-gradient-bg">
      {/* Warm light effects background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div
          className="absolute rounded-full blur-3xl opacity-15"
          style={{
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, rgba(230, 230, 250, 0.25) 0%, rgba(255, 192, 203, 0.2) 50%, transparent 70%)',
            top: '10%',
            left: '5%',
          }}
        />
        <div
          className="absolute rounded-full blur-3xl opacity-12"
          style={{
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(176, 224, 230, 0.25) 0%, rgba(230, 230, 250, 0.15) 50%, transparent 70%)',
            bottom: '20%',
            right: '10%',
          }}
        />
        <div
          className="absolute rounded-full blur-3xl opacity-12"
          style={{
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(255, 192, 203, 0.2) 0%, rgba(255, 182, 193, 0.15) 50%, transparent 70%)',
            top: '50%',
            right: '30%',
          }}
        />
      </div>

      <FloatingSparkles count={12} />

      <div className="container relative z-10 max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-20 md:mb-24">
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 leading-tight"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.85) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 2px 20px rgba(59, 130, 246, 0.3)',
            }}
          >
            Inspired by Montessori — adapted for today.
          </h2>
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-normal italic"
            style={{
              textShadow: '0 1px 10px rgba(0, 0, 0, 0.2)',
            }}
          >
            Maria Montessori believed children learn best when:
          </p>
        </div>

        {/* Maria Montessori Section - Unified Card with Text and Image */}
        <div ref={mariaContentRef} className="mb-20 md:mb-24 lg:mb-28">
          <div className="glass-card rounded-[28px] warm-gradient-lavender overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left Side - Storytelling Text */}
              <div className="p-10 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="montessori-story space-y-6 md:space-y-8">
                  <p className="text-lg md:text-xl lg:text-2xl text-white/95 font-normal">
                    Maria Montessori was an Italian physician, educator, and pioneering thinker who transformed the way the world understands childhood.
                  </p>
                  <p className="text-lg md:text-xl lg:text-2xl text-white/95 font-normal">
                    At a time when education was rigid and adult-centered, she championed something revolutionary: children learn best when they feel respected, curious, and free to explore at their own pace.
                  </p>
                  <p className="text-lg md:text-xl lg:text-2xl text-white/95 font-normal">
                    She believed every child carries within them an inner guide — a natural drive to discover, question, and grow when given the right environment. Her method wasn't about instruction. It was about honoring the child's intelligence and nurturing their independence, confidence, and joy of learning.
                  </p>
                </div>
              </div>

              {/* Right Side - Image */}
              <div ref={mariaImageRef} className="relative flex items-center justify-center">
                <img
                  src="/maria-montessori.jpg"
                  alt="Maria Montessori"
                  className="w-full h-full object-contain"
                  style={{
                    minHeight: '400px',
                    objectPosition: 'center',
                    imageRendering: 'high-quality',
                    filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3))',
                  }}
                  loading="lazy"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.opacity = '0.5';
                    console.error('Maria Montessori image failed to load:', img.src);
                  }}
                />
                {/* Glow effect behind image */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Montessori Principles - Individual Cards */}
        <div
          ref={principlesRef}
          className="relative mb-16 md:mb-20"
        >
          <div className="space-y-6 md:space-y-8">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="principle-card glass-card p-8 md:p-10 rounded-[28px] glass-card-hover"
                style={{
                  background: index % 2 === 0
                    ? 'linear-gradient(135deg, rgba(230, 230, 250, 0.15) 0%, rgba(230, 230, 250, 0.08) 100%)'
                    : 'linear-gradient(135deg, rgba(176, 224, 230, 0.15) 0%, rgba(176, 224, 230, 0.08) 100%)',
                }}
              >
                <div className="flex items-start gap-6 md:gap-8">
                  {/* Number badge */}
                  <div
                    className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center flex-shrink-0 glass-card"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%)',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                      boxShadow: '0 8px 24px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                    }}
                  >
                    <span
                      className="text-xl md:text-2xl font-semibold relative z-10"
                      style={{
                        color: 'rgba(255, 255, 255, 0.95)',
                        textShadow: '0 2px 10px rgba(59, 130, 246, 0.5)',
                      }}
                    >
                      {principle.number}
                    </span>
                    {/* Number glow */}
                    <div
                      className="absolute inset-0 rounded-2xl blur-lg opacity-50"
                      style={{
                        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="text-xl md:text-2xl font-semibold text-white/95 mb-3">
                      {principle.title}
                    </h4>
                    <p className="text-base md:text-lg text-white/85 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <div ref={closingRef} className="text-center relative">
          <div
            className="absolute inset-0 blur-2xl opacity-20 -z-10"
            style={{
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
              transform: 'scale(1.5)',
            }}
          />
          <p
            className="text-xl md:text-2xl lg:text-3xl text-center max-w-4xl mx-auto leading-relaxed font-semibold italic px-10 py-10 rounded-[28px] glass-card warm-gradient-lavender"
            style={{
              color: 'rgba(255, 255, 255, 0.95)',
              textShadow: '0 2px 20px rgba(0, 0, 0, 0.2), 0 0 40px rgba(59, 130, 246, 0.15)',
            }}
          >
            Samy isn't a replacement for Montessori learning —
            <br className="hidden md:block" />
            <span className="md:inline"> </span>he is a gentle companion that supports it.
          </p>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
}

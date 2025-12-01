import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Button } from '@/components/ui/button';
import HeroStarField from './HeroStarField';
import FloatingSparkles from './FloatingSparkles';
import {
  animateQuote,
  animateHeadline,
  animateSubheadline,
  setupButtonAnimations,
  animateSamyBear,
} from '@/animations/hero';

export default function PolstarHero() {
  const quoteRef = useRef<HTMLDivElement>(null);
  const blockquoteRef = useRef<HTMLQuoteElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const primaryButtonRef = useRef<HTMLButtonElement>(null);
  const secondaryButtonRef = useRef<HTMLButtonElement>(null);
  const samyRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);
  const orb4Ref = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Initialize all animations
    animateQuote(quoteRef.current, blockquoteRef.current);
    animateHeadline(headlineRef.current);
    animateSubheadline(subheadRef.current);
    setupButtonAnimations([primaryButtonRef.current, secondaryButtonRef.current]);
    animateSamyBear(samyRef.current);

    // Animate floating gradient orbs
    if (orb1Ref.current) {
      gsap.to(orb1Ref.current, {
        x: 30,
        y: -40,
        scale: 1.2,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }

    if (orb2Ref.current) {
      gsap.to(orb2Ref.current, {
        x: -50,
        y: 30,
        scale: 0.8,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1,
      });
    }

    if (orb3Ref.current) {
      gsap.to(orb3Ref.current, {
        x: 40,
        y: 50,
        scale: 1.1,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 2,
      });
    }

    if (orb4Ref.current) {
      gsap.to(orb4Ref.current, {
        x: -30,
        y: -20,
        scale: 0.9,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 0.5,
      });
    }

    // Cleanup function
    return () => {
      // Animations cleanup is handled by GSAP internally
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-32 pb-8 md:pb-16"
    >
      {/* Enhanced Star Field with Parallax */}
      <HeroStarField />

      {/* Warm Light Gradient Background Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
        {/* Large background orb - Polstar Blue */}
        <div
          ref={orb1Ref}
          className="absolute rounded-full blur-3xl opacity-25"
          style={{
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(6, 182, 212, 0.2) 50%, transparent 70%)',
            top: '10%',
            left: '5%',
            willChange: 'transform',
          }}
        />

        {/* Medium orb - Polstar Cyan */}
        <div
          ref={orb2Ref}
          className="absolute rounded-full blur-3xl opacity-20"
          style={{
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, rgba(59, 130, 246, 0.15) 50%, transparent 70%)',
            top: '50%',
            right: '10%',
            willChange: 'transform',
          }}
        />

        {/* Small orb - Polstar Yellow */}
        <div
          ref={orb3Ref}
          className="absolute rounded-full blur-3xl opacity-20"
          style={{
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(250, 204, 21, 0.25) 0%, rgba(251, 191, 36, 0.15) 50%, transparent 70%)',
            bottom: '20%',
            left: '20%',
            willChange: 'transform',
          }}
        />

        {/* Additional orb - Blue/Cyan blend */}
        <div
          ref={orb4Ref}
          className="absolute rounded-full blur-3xl opacity-18"
          style={{
            width: '700px',
            height: '700px',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(6, 182, 212, 0.15) 50%, transparent 70%)',
            top: '30%',
            right: '30%',
            willChange: 'transform',
          }}
        />
      </div>

      {/* Floating Sparkles */}
      <FloatingSparkles count={15} />

      {/* Spotlight Glow Behind Headline removed - keeping glow only behind orbs */}

      {/* Main Content */}
      <div className="container relative z-20 px-6 py-8 md:py-12 max-w-7xl">
        {/* Einstein Quote - Centered and More Visible */}
        <div ref={quoteRef} className="mb-16 md:mb-20 max-w-3xl mx-auto text-center relative">
          <div className="glass-card p-8 md:p-10 lg:p-12 warm-gradient-lavender">
            <blockquote
              ref={blockquoteRef}
              className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/95 italic leading-relaxed mb-4 relative z-10"
              style={{
                background: 'linear-gradient(90deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.98) 100%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 40px rgba(59, 130, 246, 0.3), 0 2px 10px rgba(0, 0, 0, 0.1)',
              }}
            >
              "The important thing is not to stop questioning. Curiosity has its own reason for
              existing."
            </blockquote>
            <cite className="text-sm md:text-base lg:text-lg text-white/85 not-italic font-semibold relative z-10">
              — Albert Einstein
            </cite>
          </div>
        </div>

        {/* Two-Column Layout: Left = Text, Right = Bear */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Headline, Subheadline, and Buttons */}
          <div className="text-left relative z-10">
            {/* Main Headline */}
            <h1
              ref={headlineRef}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-8 md:mb-10 leading-[1.1] relative"
              style={{
                opacity: 1,
                visibility: 'visible',
                color: '#e8f2ff',
              }}
            >
              <span className="block">
                <span style={{ color: '#e8f2ff' }}>AI that grows with </span>
                <span
                  className="bg-gradient-to-r from-[#3475bb] via-[#2da6de] to-[#fec917] bg-clip-text text-transparent"
                  style={{
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  your child's curiosity.
                </span>
              </span>
            </h1>

            {/* Subheadline */}
            <p
              ref={subheadRef}
              className="text-lg md:text-xl lg:text-2xl mb-10 md:mb-12 leading-relaxed font-normal relative z-10"
              style={{
                color: '#e8f2ff',
                textShadow: '0 2px 20px rgba(0, 0, 0, 0.3)',
                letterSpacing: '0.01em',
              }}
            >
              A warm, expressive 3D companion that listens, understands, and gently guides children
              through meaningful, curiosity-driven conversations.
            </p>

            {/* CTAs */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-5 md:gap-6 mb-0 relative z-10">
              <Button
                ref={primaryButtonRef}
                size="lg"
                className="glass-card rounded-[30px] px-10 py-7 text-base md:text-lg font-semibold transition-all relative overflow-hidden group border-2 border-white/30 glass-card-hover"
                style={{
                  background: 'linear-gradient(to right, #fec917, #ffd81c)',
                  boxShadow: '0 10px 40px rgba(254, 201, 23, 0.4), 0 0 60px rgba(254, 201, 23, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                }}
              >
                <span className="relative z-10" style={{ color: '#000000' }}>Meet Samy-Bear</span>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                    transform: 'translateX(-100%)',
                    animation: 'shimmer 2s infinite',
                  }}
                />
              </Button>
              <Button
                ref={secondaryButtonRef}
                size="lg"
                variant="outline"
                className="glass-card rounded-[30px] px-10 py-7 text-base md:text-lg font-semibold transition-all relative overflow-hidden group glass-card-hover"
                style={{
                  border: '2px solid #2da6de',
                  boxShadow: '0 10px 30px rgba(45, 166, 222, 0.2), 0 0 40px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                }}
              >
                <span className="relative z-10" style={{ color: '#e8f2ff' }}>For Parents & Schools</span>
              </Button>
            </div>
          </div>

          {/* Right Column - Samy-Bear */}
          <div
            ref={samyRef}
            className="flex justify-center lg:justify-end relative"
            style={{ willChange: 'transform' }}
          >
            <div className="relative">
              {/* Main Samy-Bear Image */}
              <img
                src="/samy-bear.png"
                alt="Samy-Bear - AI Curiosity Companion"
                className="w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 xl:w-[400px] xl:h-[400px] object-contain relative z-20 drop-shadow-2xl"
                style={{
                  filter: 'drop-shadow(0 30px 60px rgba(59, 130, 246, 0.4)) drop-shadow(0 0 80px rgba(6, 182, 212, 0.3))',
                  imageRendering: 'high-quality',
                }}
                loading="eager"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.style.opacity = '0.5';
                  console.error('Samy-Bear image failed to load:', img.src);
                }}
              />

              {/* Multiple Glow Layers for Depth */}
              <div
                className="absolute inset-0 -z-10"
                style={{
                  background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(6, 182, 212, 0.3) 50%, rgba(250, 204, 21, 0.2) 70%, transparent 80%)',
                  filter: 'blur(80px)',
                  transform: 'translateY(20%) scale(1.5)',
                  willChange: 'transform, opacity',
                  animation: 'pulse-glow 3s ease-in-out infinite',
                }}
              />

              <div
                className="absolute inset-0 -z-10"
                style={{
                  background: 'radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 70%)',
                  filter: 'blur(100px)',
                  transform: 'translateY(30%) scale(1.8)',
                  willChange: 'transform, opacity',
                  animation: 'pulse-glow 4s ease-in-out infinite 1s',
                }}
              />

              {/* Outer ring glow */}
              <div
                className="absolute inset-0 -z-10 rounded-full border-2 border-blue-400/30"
                style={{
                  width: '120%',
                  height: '120%',
                  top: '-10%',
                  left: '-10%',
                  filter: 'blur(20px)',
                  boxShadow: '0 0 100px rgba(59, 130, 246, 0.3), inset 0 0 100px rgba(6, 182, 212, 0.2)',
                  animation: 'ring-pulse 2s ease-in-out infinite',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced CSS Animations */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.6; transform: translateY(20%) scale(1.5); }
          50% { opacity: 1; transform: translateY(20%) scale(1.6); }
        }
        
        @keyframes ring-pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
      `}</style>

      {/* CSS for Noise Texture Overlay (Subtle Grain) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-soft-light"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          zIndex: 3,
        }}
      />
    </section>
  );
}

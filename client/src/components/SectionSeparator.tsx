import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Ensure plugin is registered
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface SectionSeparatorProps {
  variant?: 'line' | 'gradient' | 'stars';
  className?: string;
}

export default function SectionSeparator({ variant = 'gradient', className = '' }: SectionSeparatorProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      gsap.set(ref.current, { opacity: 1, scaleX: 1 });
      return;
    }

    gsap.from(ref.current, {
      scaleX: 0,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === ref.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  if (variant === 'line') {
    return (
      <div ref={ref} className={`h-px bg-gradient-to-r from-transparent via-white/20 to-transparent ${className}`} />
    );
  }

  if (variant === 'stars') {
    return (
      <div ref={ref} className={`relative h-12 overflow-hidden ${className}`}>
        <div className="absolute inset-0 flex items-center justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-1 h-1 bg-white/40 rounded-full"
              style={{
                animationDelay: `${i * 0.2}s`,
                animation: 'pulse 2s ease-in-out infinite',
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  // Default gradient variant
  return (
    <div ref={ref} className={`relative h-px ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent blur-sm" />
    </div>
  );
}


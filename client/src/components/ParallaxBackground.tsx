import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Ensure plugin is registered
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ParallaxBackgroundProps {
  children: React.ReactNode;
  speed?: number; // 0 to 1, where 0.5 is normal speed
  className?: string;
}

export default function ParallaxBackground({ children, speed = 0.5, className = '' }: ParallaxBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.to(ref.current, {
      yPercent: -50 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === ref.current) {
          trigger.kill();
        }
      });
    };
  }, [speed]);

  return (
    <div ref={ref} className={`parallax-background ${className}`}>
      {children}
    </div>
  );
}


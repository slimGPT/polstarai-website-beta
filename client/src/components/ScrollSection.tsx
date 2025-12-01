import { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollSectionProps {
  children: ReactNode;
  className?: string;
  animationType?: 'fade' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale';
  delay?: number;
  duration?: number;
}

export default function ScrollSection({
  children,
  className = '',
  animationType = 'fade',
  delay = 0,
  duration = 1,
}: ScrollSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const animations: Record<string, gsap.TweenVars> = {
      fade: { opacity: 0 },
      slideUp: { y: 80, opacity: 0 },
      slideLeft: { x: -80, opacity: 0 },
      slideRight: { x: 80, opacity: 0 },
      scale: { scale: 0.9, opacity: 0 },
    };

    const fromVars = animations[animationType] || animations.fade;

    gsap.from(sectionRef.current, {
      ...fromVars,
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === sectionRef.current) {
          trigger.kill();
        }
      });
    };
  }, [animationType, delay, duration]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
}

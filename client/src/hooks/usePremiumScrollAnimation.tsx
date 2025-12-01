import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Ensure plugin is registered
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface UsePremiumScrollAnimationOptions {
  trigger?: string | Element;
  start?: string;
  end?: string;
  animation?: 'fadeUp' | 'slideUp' | 'scaleIn' | 'blurIn' | 'fadeUpBlur';
  delay?: number;
  duration?: number;
  stagger?: number;
  once?: boolean;
  ease?: string;
}

export function usePremiumScrollAnimation(options: UsePremiumScrollAnimationOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const {
    trigger,
    start = 'top 85%',
    end = 'bottom 15%',
    animation = 'fadeUp',
    delay = 0,
    duration = 1.2,
    stagger = 0,
    once = true,
    ease = 'power3.out',
  } = options;

  useEffect(() => {
    if (!ref.current) return;

    // Set initial visible state as fallback
    gsap.set(ref.current, { 
      opacity: 1, 
      y: 0, 
      x: 0, 
      scale: 1,
      filter: 'blur(0px)',
    });

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    const animations = {
      fadeUp: { 
        y: 60, 
        opacity: 0,
      },
      slideUp: { 
        y: 80, 
        opacity: 0,
      },
      scaleIn: { 
        scale: 0.92, 
        opacity: 0,
      },
      blurIn: {
        opacity: 0,
        filter: 'blur(20px)',
      },
      fadeUpBlur: {
        y: 60,
        opacity: 0,
        filter: 'blur(20px)',
      },
    };

    const fromVars = animations[animation] || animations.fadeUp;

    // If stagger is set, animate children
    if (stagger > 0 && ref.current.children.length > 0) {
      const children = Array.from(ref.current.children);
      // Set initial state for children
      gsap.set(children, { opacity: 1, y: 0, x: 0, scale: 1, filter: 'blur(0px)' });
      
      gsap.from(children, {
        ...fromVars,
        duration,
        delay,
        stagger,
        ease,
        scrollTrigger: {
          trigger: trigger || ref.current,
          start,
          end,
          toggleActions: once ? 'play none none none' : 'play none reverse none',
          onEnter: () => {
            // Ensure visibility on enter
            gsap.set(children, { opacity: 1 });
          },
        },
      });
    } else {
      gsap.from(ref.current, {
        ...fromVars,
        duration,
        delay,
        ease,
        scrollTrigger: {
          trigger: trigger || ref.current,
          start,
          end,
          toggleActions: once ? 'play none none none' : 'play none reverse none',
          onEnter: () => {
            // Ensure visibility on enter
            gsap.set(ref.current, { opacity: 1 });
          },
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === ref.current || (ref.current && ref.current.contains(trigger.trigger as Node))) {
          trigger.kill();
        }
      });
    };
  }, [trigger, start, end, animation, delay, duration, stagger, once, ease]);

  return ref;
}


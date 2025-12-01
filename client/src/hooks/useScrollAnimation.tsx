import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Ensure plugin is registered
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface UseScrollAnimationOptions {
  trigger?: string | Element;
  start?: string;
  end?: string;
  animation?: 'fadeIn' | 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'blurIn';
  delay?: number;
  duration?: number;
  stagger?: number;
  once?: boolean;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const {
    trigger,
    start = 'top 80%',
    end = 'bottom 20%',
    animation = 'fadeIn',
    delay = 0,
    duration = 0.8,
    stagger = 0,
    once = true,
  } = options;

  useEffect(() => {
    if (!ref.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      gsap.set(ref.current, { opacity: 1, y: 0, x: 0, scale: 1, filter: 'blur(0px)' });
      return;
    }

    const animations = {
      fadeIn: { opacity: 0 },
      fadeInUp: { y: 40, opacity: 0 },
      fadeInDown: { y: -40, opacity: 0 },
      fadeInLeft: { x: -40, opacity: 0 },
      fadeInRight: { x: 40, opacity: 0 },
      scaleIn: { scale: 0.9, opacity: 0 },
      blurIn: { opacity: 0, filter: 'blur(20px)' },
    };

    const fromVars = animations[animation] || animations.fadeIn;

    // If stagger is set, animate children
    if (stagger > 0 && ref.current.children.length > 0) {
      const children = Array.from(ref.current.children);
      gsap.from(children, {
        ...fromVars,
        duration,
        delay,
        stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: trigger || ref.current,
          start,
          end,
          toggleActions: once ? 'play none none none' : 'play none reverse none',
        },
      });
    } else {
      gsap.from(ref.current, {
        ...fromVars,
        duration,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: trigger || ref.current,
          start,
          end,
          toggleActions: once ? 'play none none none' : 'play none reverse none',
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
  }, [trigger, start, end, animation, delay, duration, stagger, once]);

  return ref;
}


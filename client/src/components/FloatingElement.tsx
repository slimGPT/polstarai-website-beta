import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface FloatingElementProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
  duration?: number;
  xRange?: number;
  yRange?: number;
  rotation?: number;
}

export default function FloatingElement({
  src,
  alt,
  className = '',
  delay = 0,
  duration = 3,
  xRange = 20,
  yRange = 30,
  rotation = 10,
}: FloatingElementProps) {
  const elementRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Reduce animation intensity on mobile
    const isMobile = window.innerWidth < 768;
    const adjustedXRange = isMobile ? xRange * 0.5 : xRange;
    const adjustedYRange = isMobile ? yRange * 0.5 : yRange;
    const adjustedRotation = isMobile ? rotation * 0.5 : rotation;

    // Create floating animation with GSAP
    const tl = gsap.timeline({ repeat: -1, yoyo: true, delay });

    tl.to(elementRef.current, {
      x: `+=${gsap.utils.random(-adjustedXRange, adjustedXRange)}`,
      y: `+=${gsap.utils.random(-adjustedYRange, adjustedYRange)}`,
      rotation: `+=${gsap.utils.random(-adjustedRotation, adjustedRotation)}`,
      duration: duration,
      ease: 'sine.inOut',
    });

    return () => {
      tl.kill();
    };
  }, [delay, duration, xRange, yRange, rotation]);

  return (
    <img
      ref={elementRef}
      src={src}
      alt={alt}
      loading="lazy"
      className={`absolute pointer-events-none ${className}`}
      style={{ 
        willChange: 'transform',
        imageRendering: 'high-quality',
        opacity: 1,
      }}
      onError={(e) => {
        const img = e.target as HTMLImageElement;
        img.style.opacity = '0.3';
        console.error('FloatingElement image failed to load:', img.src);
      }}
    />
  );
}

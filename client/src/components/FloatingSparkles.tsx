import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface FloatingSparklesProps {
  count?: number;
  className?: string;
}

export default function FloatingSparkles({ count = 12, className = '' }: FloatingSparklesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const sparkles = containerRef.current.querySelectorAll('.sparkle-dot');
    
    sparkles.forEach((sparkle, index) => {
      const randomX = (Math.random() - 0.5) * 100; // -50 to 50
      const randomY = 10 + Math.random() * 20; // 10-30px
      const randomDuration = 3 + Math.random() * 2; // 3-5s
      const randomDelay = index * 0.2;
      const randomOpacity = 0.3 + Math.random() * 0.3; // 0.3-0.6

      gsap.to(sparkle, {
        y: `+=${randomY}`,
        x: `+=${randomX}`,
        opacity: randomOpacity,
        duration: randomDuration,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: randomDelay,
      });
    });

    return () => {
      sparkles.forEach((sparkle) => {
        gsap.killTweensOf(sparkle);
      });
    };
  }, []);

  return (
    <div ref={containerRef} className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} style={{ zIndex: 1 }}>
      {Array.from({ length: count }).map((_, i) => {
        const randomLeft = 5 + (i * (90 / count)) + Math.random() * 5;
        const randomTop = 10 + (i % 4) * 20 + Math.random() * 10;
        const randomSize = 3 + Math.random() * 2; // 3-5px
        
        return (
          <div
            key={i}
            className="sparkle-dot absolute rounded-full"
            style={{
              left: `${randomLeft}%`,
              top: `${randomTop}%`,
              width: `${randomSize}px`,
              height: `${randomSize}px`,
              background: 'rgba(255, 255, 255, 0.6)',
              boxShadow: 
                '0 0 8px rgba(59, 130, 246, 0.6), 0 0 16px rgba(6, 182, 212, 0.4)',
              opacity: 0.4,
            }}
          />
        );
      })}
    </div>
  );
}


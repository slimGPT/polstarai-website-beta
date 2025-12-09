import { useEffect, useRef, useState } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
}

export default function ScrollStars() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [stars, setStars] = useState<Star[]>([]);
  const [shouldRender, setShouldRender] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Lazy load and detect mobile
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    
    // Lazy load: Only render after hero section is scrolled past
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setShouldRender(true), 300);
          }
        });
      },
      { threshold: 0.1 }
    );

    const heroSection = document.getElementById('hero');
    if (heroSection) {
      observer.observe(heroSection);
    } else {
      setTimeout(() => setShouldRender(true), 1000);
    }

    return () => {
      if (heroSection) observer.unobserve(heroSection);
    };
  }, []);

  useEffect(() => {
    if (!shouldRender) return;

    // Create stars - exclude stars in hero section area (top 50% of viewport)
    const createStars = () => {
      const starCount = isMobile ? 15 : 30; // Reduced on mobile
      const newStars: Star[] = [];
      
      for (let i = 0; i < starCount; i++) {
        const y = Math.random() * 100;
        // Skip stars that would be in hero section (top 50% of viewport)
        if (y < 50) continue;
        
        newStars.push({
          x: Math.random() * 100,
          y: y,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.5 + 0.3,
          speed: Math.random() * 0.3 + 0.1,
        });
      }
      
      return newStars;
    };

    setStars(createStars());
  }, [shouldRender, isMobile]);

  useEffect(() => {
    if (!containerRef.current || stars.length === 0) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let rafId: number;
    let lastScrollY = 0;
    let throttleTimeout: number | null = null;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Throttle on mobile for better performance
      if (isMobile) {
        if (throttleTimeout) return;
        throttleTimeout = window.setTimeout(() => {
          throttleTimeout = null;
        }, 16); // ~60fps throttle
      }
      
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const scrollFactor = scrollY * 0.15;

        stars.forEach((star, index) => {
          const starElement = containerRef.current?.children[index] as HTMLElement;
          if (starElement) {
            const newY = (star.y + scrollFactor * star.speed) % 100;
            starElement.style.transform = `translate3d(${star.x}vw, ${newY}vh, 0)`;
          }
        });
        
        lastScrollY = scrollY;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
      if (throttleTimeout) clearTimeout(throttleTimeout);
    };
  }, [stars, isMobile]);

  if (!shouldRender) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
      style={{ willChange: 'transform' }}
    >
      {stars.map((star, index) => (
        <div
          key={index}
          className="absolute rounded-full bg-white"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}vw`,
            top: `${star.y}vh`,
            opacity: star.opacity,
            boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.5)`,
            willChange: 'transform',
            transform: 'translate3d(0, 0, 0)',
          }}
        />
      ))}
    </div>
  );
}


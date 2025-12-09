import { useEffect, useRef, useState } from 'react';

export default function SpaceBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile and lazy load
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    
    // Lazy load: Only render after hero section is scrolled past or after initial delay
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start rendering stars when hero section is no longer visible
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
      // Fallback: render after 1 second if hero not found
      setTimeout(() => setShouldRender(true), 1000);
    }

    return () => {
      if (heroSection) observer.unobserve(heroSection);
    };
  }, []);

  useEffect(() => {
    if (!shouldRender) return;

    // Add pulse animation keyframes dynamically
    const style = document.createElement('style');
    style.textContent = `
      @keyframes pulse {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 1; }
      }
      
      @keyframes shootingStar {
        0% {
          transform: translate3d(0, 0, 0);
          opacity: 1;
        }
        100% {
          transform: translate3d(120vw, 60vh, 0);
          opacity: 0;
        }
      }
      
      @keyframes floatCloud {
        0%, 100% {
          transform: translate3d(0, 0, 0);
          opacity: 0.1;
        }
        50% {
          transform: translate3d(30px, -20px, 0);
          opacity: 0.2;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [shouldRender]);

  // Generate stars - reduced density on mobile, filter hero section
  const starCount = isMobile ? 30 : 60; // Reduced on mobile
  const stars = Array.from({ length: starCount }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    top: Math.random() * 100,
    left: Math.random() * 100,
    delay: Math.random() * 3,
    duration: Math.random() * 2 + 1,
    opacity: Math.random() * 0.7 + 0.3,
  })).filter(star => star.top >= 50); // Only show stars below hero section

  // Generate shooting stars - fewer on mobile
  const shootingStarCount = isMobile ? 2 : 5;
  const shootingStars = Array.from({ length: shootingStarCount }, (_, i) => ({
    id: i,
    duration: Math.random() * 5 + 4, // Slower: 4-9s
    delay: i * 3,
    top: Math.random() * 100,
  })).filter(star => star.top >= 50); // Only show shooting stars below hero section

  // Generate clouds - fewer on mobile
  const cloudCount = isMobile ? 4 : 8;
  const clouds = Array.from({ length: cloudCount }, (_, i) => ({
    id: i,
    size: Math.random() * 400 + 300,
    top: Math.random() * 100,
    left: Math.random() * 100,
    duration: Math.random() * 10 + 15,
    delay: Math.random() * 5,
  }));


  // Don't render until lazy loaded
  if (!shouldRender) {
    return (
      <div
        ref={containerRef}
        className="fixed inset-0 overflow-hidden pointer-events-none"
        style={{ 
          zIndex: 0,
          minHeight: '100vh',
          height: '100%',
          width: '100%'
        }}
      >
        {/* Dark black background only - no animations */}
        <div className="absolute inset-0 bg-black" />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ 
        zIndex: 0,
        minHeight: '100vh',
        height: '100%',
        width: '100%',
        willChange: 'transform',
      }}
    >
      {/* Dark black background with subtle gradients */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/10 via-transparent to-cyan-950/10 opacity-60" />

      {/* Very subtle nebula clouds - much darker */}
      {clouds.map((cloud) => (
        <div
          key={`cloud-${cloud.id}`}
          className="absolute rounded-full blur-3xl"
          style={{
            width: `${cloud.size}px`,
            height: `${cloud.size}px`,
            top: `${cloud.top}%`,
            left: `${cloud.left}%`,
            background: `radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(6, 182, 212, 0.05) 50%, transparent 70%)`,
            animation: `floatCloud ${cloud.duration}s ease-in-out infinite`,
            animationDelay: `${cloud.delay}s`,
          }}
        />
      ))}

      {/* Twinkling stars - only below hero section */}
      {stars.map((star) => (
        <div
          key={`star-${star.id}`}
          className="absolute bg-white rounded-full"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: `${star.top}%`,
            left: `${star.left}%`,
            animation: 'pulse',
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
            animationIterationCount: 'infinite',
            opacity: star.opacity,
            boxShadow: `0 0 ${star.size * 3}px rgba(255, 255, 255, 0.6), 0 0 ${star.size * 5}px rgba(59, 130, 246, 0.3)`,
            willChange: 'opacity, transform',
            transform: 'translate3d(0, 0, 0)',
          }}
        />
      ))}

      {/* Shooting stars - only below hero section */}
      {shootingStars.map((shootingStar) => (
        <div
          key={`shooting-${shootingStar.id}`}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            top: `${shootingStar.top}%`,
            left: '-10%',
            animation: 'shootingStar',
            animationDuration: `${shootingStar.duration}s`,
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
            animationDelay: `${shootingStar.delay}s`,
            boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.8)',
            willChange: 'transform',
            transform: 'translate3d(0, 0, 0)',
          }}
        />
      ))}
    </div>
  );
}

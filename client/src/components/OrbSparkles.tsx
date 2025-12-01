import { useEffect, useRef } from 'react';

export default function OrbSparkles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const sparkleCount = 12;
    const radius = 220; // Distance from center (orb is ~400px)
    
    // Position sparkles in a circle around the orb
    const sparkleElements = containerRef.current.children;
    Array.from(sparkleElements).forEach((sparkle, index) => {
      const element = sparkle as HTMLElement;
      
      // Calculate position in a circle
      const angle = (index / sparkleCount) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      element.style.left = `calc(50% + ${x}px)`;
      element.style.top = `calc(50% + ${y}px)`;

      // Random delay and duration for each sparkle
      const delay = Math.random() * 2;
      const duration = Math.random() * 1.5 + 1;
      
      element.style.animation = `sparkle ${duration}s ease-in-out infinite`;
      element.style.animationDelay = `${delay}s`;
    });
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="absolute inset-0 pointer-events-none z-10"
        aria-hidden="true"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: '4px',
              height: '4px',
              boxShadow: '0 0 8px rgba(255, 255, 255, 0.8), 0 0 16px rgba(255, 255, 255, 0.4)',
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </div>
      <style>{`
        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0);
          }
          50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.5);
          }
        }
      `}</style>
    </>
  );
}


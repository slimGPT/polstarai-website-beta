interface ConstellationBackgroundProps {
  density?: 'low' | 'medium' | 'high';
  className?: string;
}

export default function ConstellationBackground({ density = 'medium', className = '' }: ConstellationBackgroundProps) {
  const starCounts = {
    low: 8,
    medium: 15,
    high: 25,
  };

  const stars = Array.from({ length: starCounts[density] }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 1.5 + 0.8,
    opacity: Math.random() * 0.4 + 0.2,
    delay: Math.random() * 2,
  }));

  // Create constellation lines (connect some stars)
  const connections: Array<{ from: number; to: number }> = [];
  for (let i = 0; i < stars.length - 1; i += 2) {
    if (Math.random() > 0.5) {
      connections.push({ from: i, to: i + 1 });
    }
  }

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {/* Constellation lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        {connections.map((conn, idx) => {
          const fromStar = stars[conn.from];
          const toStar = stars[conn.to];
          return (
            <line
              key={idx}
              x1={`${fromStar.x}%`}
              y1={`${fromStar.y}%`}
              x2={`${toStar.x}%`}
              y2={`${toStar.y}%`}
              stroke="rgba(255, 255, 255, 0.15)"
              strokeWidth="0.5"
            />
          );
        })}
      </svg>

      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.3)`,
            animation: 'pulse 4s ease-in-out infinite',
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
}


import { Heart, Sparkles, Shield } from 'lucide-react';
import { usePremiumScrollAnimation } from '@/hooks/usePremiumScrollAnimation';
import SectionSeparator from './SectionSeparator';
import SubtleStarBackground from './SubtleStarBackground';

const missionPoints = [
  {
    icon: Heart,
    title: 'Built for Childhood',
    description: "Our companions are designed around how kids think, feel, and learn. Everything we build is aligned with child development and inspired by UNICEF's principles for safe AI.",
    iconColor: 'text-blue-400',
    gradient: 'from-blue-500/30 via-blue-500/20 to-blue-400/10',
    iconBg: 'bg-blue-500/20',
    borderGlow: 'rgba(59, 130, 246, 0.3)',
  },
  {
    icon: Sparkles,
    title: 'Adaptive by Design',
    description: "Our systems evolve with each child's personality, learning style, and emotional needs — no two interactions are the same.",
    iconColor: 'text-cyan-400',
    gradient: 'from-cyan-500/30 via-cyan-500/20 to-cyan-400/10',
    iconBg: 'bg-cyan-500/20',
    borderGlow: 'rgba(6, 182, 212, 0.3)',
  },
  {
    icon: Shield,
    title: 'Parents Stay in Control',
    description: 'You see what your child sees. You shape the routines. You set the limits. Our tools are transparent by default, with full memory access and behavior logs.',
    iconColor: 'text-yellow-400',
    gradient: 'from-yellow-500/30 via-yellow-500/20 to-yellow-400/10',
    iconBg: 'bg-yellow-500/20',
    borderGlow: 'rgba(234, 179, 8, 0.3)',
  },
];

export default function PolstarMissionSection() {
  const titleRef = usePremiumScrollAnimation({ animation: 'fadeUp', duration: 1.2 });
  const contentRef = usePremiumScrollAnimation({ animation: 'slideUp', stagger: 0.1, delay: 0.3, duration: 0.9 });

  return (
    <section id="polstar-mission" className="relative py-20 lg:py-24 bg-black overflow-hidden">
      <SubtleStarBackground density="low" />
      
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/5 via-transparent to-cyan-950/5 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <SectionSeparator variant="gradient" className="mb-12 lg:mb-16" />
          
          <div ref={titleRef} className="mb-12 lg:mb-16 text-center">
            <h2 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 lg:mb-8 leading-tight"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              Why PolstarAI Exists
            </h2>
            <p 
              className="text-lg sm:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              PolstarAI is a social-impact technology company dedicated to building safe and trusted AI companions for children.
            </p>
          </div>
          
          <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {missionPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 hover:bg-white/[0.08] hover:border-white/25 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl overflow-hidden"
                  style={{
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
                    fontFamily: 'Inter, system-ui, sans-serif',
                  }}
                >
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${point.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                  />
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      boxShadow: `0 0 0 1px ${point.borderGlow}, 0 0 40px ${point.borderGlow}`,
                    }}
                  />
                  <div className="flex flex-col items-center text-center relative z-10">
                    <div 
                      className={`w-16 h-16 lg:w-20 lg:h-20 rounded-xl ${point.iconBg} border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                      style={{
                        boxShadow: `0 4px 20px ${point.borderGlow}, inset 0 1px 0 rgba(255, 255, 255, 0.1)`,
                      }}
                    >
                      <Icon 
                        className={`w-8 h-8 lg:w-10 lg:h-10 ${point.iconColor}`} 
                        style={{ 
                          strokeWidth: 2.5,
                          filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.4))',
                        }} 
                      />
                    </div>
                    <h3 
                      className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300"
                      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                      {point.title}
                    </h3>
                    <p 
                      className="text-sm lg:text-base text-white/85 leading-relaxed group-hover:text-white/95 transition-colors duration-300"
                      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                      {point.description}
                    </p>
                  </div>
                  <div 
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/0 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


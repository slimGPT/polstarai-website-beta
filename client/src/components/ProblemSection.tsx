import { AlertCircle, Brain, Zap } from 'lucide-react';
import { usePremiumScrollAnimation } from '@/hooks/usePremiumScrollAnimation';
import SectionSeparator from './SectionSeparator';
import SubtleStarBackground from './SubtleStarBackground';
import SectionConstellation from './SectionConstellation';

const problemPoints = [
  {
    icon: Brain,
    text: 'Lack domain-specific knowledge',
    iconColor: 'text-blue-400',
    cardColor: 'blue',
    gradient: 'from-blue-500/30 via-blue-500/20 to-blue-400/10',
    iconBg: 'bg-blue-500/20',
    borderGlow: 'rgba(59, 130, 246, 0.3)',
  },
  {
    icon: AlertCircle,
    text: 'Hallucinate under pressure',
    iconColor: 'text-cyan-400',
    cardColor: 'cyan',
    gradient: 'from-cyan-500/30 via-cyan-500/20 to-cyan-400/10',
    iconBg: 'bg-cyan-500/20',
    borderGlow: 'rgba(6, 182, 212, 0.3)',
  },
  {
    icon: Zap,
    text: 'Behave inconsistently across sessions',
    iconColor: 'text-yellow-400',
    cardColor: 'yellow',
    gradient: 'from-yellow-500/30 via-yellow-500/20 to-yellow-400/10',
    iconBg: 'bg-yellow-500/20',
    borderGlow: 'rgba(234, 179, 8, 0.3)',
  },
];

export default function ProblemSection() {
  const titleRef = usePremiumScrollAnimation({ animation: 'fadeUp', duration: 1.2 });
  const cardsRef = usePremiumScrollAnimation({ animation: 'slideUp', stagger: 0.12, delay: 0.4, duration: 0.9 });

  return (
    <section id="problem" className="relative py-20 lg:py-24 bg-black overflow-hidden">
      {/* Background Effects */}
      <SubtleStarBackground density="low" />
      <SectionConstellation sectionId="problem" />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/5 via-transparent to-cyan-950/5 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <SectionSeparator variant="gradient" className="mb-12 lg:mb-16" />
          
          {/* 2-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Column - Title and Subtitle */}
            <div ref={titleRef} className="flex flex-col justify-center lg:min-h-[400px]">
              <h2 
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 lg:mb-8 leading-tight"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                The Problem
              </h2>
              <p 
                className="text-xl sm:text-2xl lg:text-3xl text-white/85 leading-relaxed font-medium max-w-xl"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                Generic LLMs Seem Smart, But They Aren't Experts
              </p>
            </div>
            
            {/* Right Column - Vertical Stack of 3 Cards */}
            <div ref={cardsRef} className="space-y-5 lg:space-y-6">
              {problemPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-7 hover:bg-white/[0.08] hover:border-white/25 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl overflow-hidden"
                    style={{
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
                      fontFamily: 'Inter, system-ui, sans-serif',
                    }}
                  >
                    {/* Animated gradient background on hover */}
                    <div 
                      className={`absolute inset-0 bg-gradient-to-br ${point.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                    />
                    
                    {/* Border glow effect on hover */}
                    <div 
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        boxShadow: `0 0 0 1px ${point.borderGlow}, 0 0 40px ${point.borderGlow}`,
                      }}
                    />
                    
                    {/* Content */}
                    <div className="flex items-center gap-5 relative z-10">
                      {/* Color-coded Icon */}
                      <div 
                        className={`w-14 h-14 lg:w-16 lg:h-16 rounded-xl ${point.iconBg} border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                        style={{
                          boxShadow: `0 4px 20px ${point.borderGlow}, inset 0 1px 0 rgba(255, 255, 255, 0.1)`,
                        }}
                      >
                        <Icon 
                          className={`w-7 h-7 lg:w-8 lg:h-8 ${point.iconColor}`} 
                          style={{ 
                            strokeWidth: 2.5,
                            filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.4))',
                          }} 
                        />
                      </div>
                      
                      {/* Text */}
                      <div className="flex-1">
                        <p 
                          className="text-base lg:text-lg text-white/95 font-semibold leading-relaxed group-hover:text-white transition-colors duration-300"
                          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                        >
                          {point.text}
                        </p>
                      </div>
                    </div>
                    
                    {/* Subtle shine effect */}
                    <div 
                      className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/0 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Transition Sentence */}
          <div className="mt-14 lg:mt-20 text-center">
            <div 
              className="inline-block bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl px-8 py-6 lg:px-10 lg:py-7 max-w-3xl mx-auto hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300"
              style={{
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                fontFamily: 'Inter, system-ui, sans-serif',
              }}
            >
              <p className="text-base sm:text-lg lg:text-xl text-white/75 italic leading-relaxed">
                This is why vertical AI is the right approach. It turns general intelligence into agents built for real work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


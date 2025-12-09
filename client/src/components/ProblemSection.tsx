import { Users, Shield, TrendingUp, Heart, Eye, AlertCircle } from 'lucide-react';
import { usePremiumScrollAnimation } from '@/hooks/usePremiumScrollAnimation';
import SectionSeparator from './SectionSeparator';
import SubtleStarBackground from './SubtleStarBackground';

const childrenStats = [
  {
    icon: TrendingUp,
    text: '53% of kids 8–12 use AI tools daily.',
    source: 'OECD, 2023',
    explanation: "They're entering the AI world earlier than parents expect — and without a guide.",
    iconColor: 'text-blue-400',
    gradient: 'from-blue-500/30 via-blue-500/20 to-blue-400/10',
    iconBg: 'bg-blue-500/20',
    borderGlow: 'rgba(59, 130, 246, 0.3)',
  },
  {
    icon: TrendingUp,
    text: 'Kids adapt to AI 5× faster than adults.',
    source: 'MIT Media Lab',
    explanation: 'They pick it up instantly. Parents are left trying to catch up.',
    iconColor: 'text-cyan-400',
    gradient: 'from-cyan-500/30 via-cyan-500/20 to-cyan-400/10',
    iconBg: 'bg-cyan-500/20',
    borderGlow: 'rgba(6, 182, 212, 0.3)',
  },
  {
    icon: Heart,
    text: 'They form emotional bonds with AI in just 3 interactions.',
    source: 'Developmental interaction studies (APA, 2022)',
    explanation: "Before you even realize there's trust — it's already been built.",
    iconColor: 'text-yellow-400',
    gradient: 'from-yellow-500/30 via-yellow-500/20 to-yellow-400/10',
    iconBg: 'bg-yellow-500/20',
    borderGlow: 'rgba(234, 179, 8, 0.3)',
  },
];

const parentStats = [
  {
    icon: Eye,
    text: "82% of parents have no visibility into their child's AI use.",
    source: 'Pew Research Center, 2024',
    explanation: "They don't know what's being said, saved, or suggested.",
    iconColor: 'text-blue-400',
    gradient: 'from-blue-500/30 via-blue-500/20 to-blue-400/10',
    iconBg: 'bg-blue-500/20',
    borderGlow: 'rgba(59, 130, 246, 0.3)',
  },
  {
    icon: Shield,
    text: 'Most parents feel unprepared to manage AI risks.',
    source: 'UNICEF, 2023',
    explanation: 'Families want to help — but feel overwhelmed and unsupported.',
    iconColor: 'text-cyan-400',
    gradient: 'from-cyan-500/30 via-cyan-500/20 to-cyan-400/10',
    iconBg: 'bg-cyan-500/20',
    borderGlow: 'rgba(6, 182, 212, 0.3)',
  },
  {
    icon: AlertCircle,
    text: "Today's AI tools were built for productivity, not childhood.",
    source: 'Industry analysis, UNICEF AI Guidelines',
    explanation: "You're adapting tech that was never meant for teaching, feeling, or growing.",
    iconColor: 'text-yellow-400',
    gradient: 'from-yellow-500/30 via-yellow-500/20 to-yellow-400/10',
    iconBg: 'bg-yellow-500/20',
    borderGlow: 'rgba(234, 179, 8, 0.3)',
  },
];

export default function ProblemSection() {
  const titleRef = usePremiumScrollAnimation({ animation: 'fadeUp', duration: 1.2 });
  const childrenStatsRef = usePremiumScrollAnimation({ animation: 'slideUp', stagger: 0.12, delay: 0.3, duration: 0.9 });
  const parentStatsRef = usePremiumScrollAnimation({ animation: 'slideUp', stagger: 0.12, delay: 0.5, duration: 0.9 });

  return (
    <section id="problem" className="relative py-20 lg:py-24 bg-black overflow-hidden">
      {/* Background Effects */}
      <SubtleStarBackground density="low" />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/5 via-transparent to-cyan-950/5 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <SectionSeparator variant="gradient" className="mb-12 lg:mb-16" />
          
          {/* Title */}
          <div ref={titleRef} className="mb-12 lg:mb-16 text-center">
            <h2 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 lg:mb-8 leading-tight"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              AI Is Already in Your Child's Life, But You're Locked Out of the Conversation.
            </h2>
          </div>
          
          {/* 2-Column Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Children Stats */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 lg:mb-8" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                Children
              </h3>
              <div ref={childrenStatsRef} className="space-y-5 lg:space-y-6">
                {childrenStats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-7 hover:bg-white/[0.08] hover:border-white/25 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl overflow-hidden"
                      style={{
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
                        fontFamily: 'Inter, system-ui, sans-serif',
                      }}
                    >
                      <div 
                        className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                      />
                      <div 
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{
                          boxShadow: `0 0 0 1px ${stat.borderGlow}, 0 0 40px ${stat.borderGlow}`,
                        }}
                      />
                      <div className="flex items-start gap-5 relative z-10">
                        <div 
                          className={`w-14 h-14 lg:w-16 lg:h-16 rounded-xl ${stat.iconBg} border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                          style={{
                            boxShadow: `0 4px 20px ${stat.borderGlow}, inset 0 1px 0 rgba(255, 255, 255, 0.1)`,
                          }}
                        >
                          <Icon 
                            className={`w-7 h-7 lg:w-8 lg:h-8 ${stat.iconColor}`} 
                            style={{ 
                              strokeWidth: 2.5,
                              filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.4))',
                            }} 
                          />
                        </div>
                        <div className="flex-1">
                          <p 
                            className="text-base lg:text-lg text-white/95 font-semibold leading-relaxed group-hover:text-white transition-colors duration-300 mb-2"
                            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                          >
                            {stat.text}
                          </p>
                          <p className="text-xs text-white/50 italic mb-3">{stat.source}</p>
                          <div className="flex items-start gap-2">
                            <span className="text-cyan-400 text-lg">→</span>
                            <p className="text-sm text-white/70 leading-relaxed">{stat.explanation}</p>
                          </div>
                        </div>
                      </div>
                      <div 
                        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/0 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Right Column - Parent Stats */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 lg:mb-8" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                Parents
              </h3>
              <div ref={parentStatsRef} className="space-y-5 lg:space-y-6">
                {parentStats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-7 hover:bg-white/[0.08] hover:border-white/25 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl overflow-hidden"
                      style={{
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
                        fontFamily: 'Inter, system-ui, sans-serif',
                      }}
                    >
                      <div 
                        className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                      />
                      <div 
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{
                          boxShadow: `0 0 0 1px ${stat.borderGlow}, 0 0 40px ${stat.borderGlow}`,
                        }}
                      />
                      <div className="flex items-start gap-5 relative z-10">
                        <div 
                          className={`w-14 h-14 lg:w-16 lg:h-16 rounded-xl ${stat.iconBg} border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                          style={{
                            boxShadow: `0 4px 20px ${stat.borderGlow}, inset 0 1px 0 rgba(255, 255, 255, 0.1)`,
                          }}
                        >
                          <Icon 
                            className={`w-7 h-7 lg:w-8 lg:h-8 ${stat.iconColor}`} 
                            style={{ 
                              strokeWidth: 2.5,
                              filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.4))',
                            }} 
                          />
                        </div>
                        <div className="flex-1">
                          <p 
                            className="text-base lg:text-lg text-white/95 font-semibold leading-relaxed group-hover:text-white transition-colors duration-300 mb-2"
                            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                          >
                            {stat.text}
                          </p>
                          <p className="text-xs text-white/50 italic mb-3">{stat.source}</p>
                          <div className="flex items-start gap-2">
                            <span className="text-cyan-400 text-lg">→</span>
                            <p className="text-sm text-white/70 leading-relaxed">{stat.explanation}</p>
                          </div>
                        </div>
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
        </div>
      </div>
    </section>
  );
}


import { User, Calendar, Eye, Shield, Database, BarChart } from 'lucide-react';
import { usePremiumScrollAnimation } from '@/hooks/usePremiumScrollAnimation';
import SectionSeparator from './SectionSeparator';
import SubtleStarBackground from './SubtleStarBackground';

const features = [
  {
    icon: User,
    text: 'Child profile & developmental settings',
    iconColor: 'text-blue-400',
    gradient: 'from-blue-500/30 via-blue-500/20 to-blue-400/10',
    iconBg: 'bg-blue-500/20',
    borderGlow: 'rgba(59, 130, 246, 0.3)',
  },
  {
    icon: Calendar,
    text: 'Daily routines & guided habits',
    iconColor: 'text-cyan-400',
    gradient: 'from-cyan-500/30 via-cyan-500/20 to-cyan-400/10',
    iconBg: 'bg-cyan-500/20',
    borderGlow: 'rgba(6, 182, 212, 0.3)',
  },
  {
    icon: Eye,
    text: 'Memory transparency and editing',
    iconColor: 'text-yellow-400',
    gradient: 'from-yellow-500/30 via-yellow-500/20 to-yellow-400/10',
    iconBg: 'bg-yellow-500/20',
    borderGlow: 'rgba(234, 179, 8, 0.3)',
  },
  {
    icon: Shield,
    text: 'Content filters and permissions',
    iconColor: 'text-green-400',
    gradient: 'from-green-500/30 via-green-500/20 to-green-400/10',
    iconBg: 'bg-green-500/20',
    borderGlow: 'rgba(34, 197, 94, 0.3)',
  },
  {
    icon: Database,
    text: 'Full data ownership & one-click deletion',
    iconColor: 'text-purple-400',
    gradient: 'from-purple-500/30 via-purple-500/20 to-purple-400/10',
    iconBg: 'bg-purple-500/20',
    borderGlow: 'rgba(168, 85, 247, 0.3)',
  },
  {
    icon: BarChart,
    text: 'Progress insights and weekly summaries',
    iconColor: 'text-pink-400',
    gradient: 'from-pink-500/30 via-pink-500/20 to-pink-400/10',
    iconBg: 'bg-pink-500/20',
    borderGlow: 'rgba(236, 72, 153, 0.3)',
  },
];

export default function ParentDashboardSection() {
  const titleRef = usePremiumScrollAnimation({ animation: 'fadeUp', duration: 1.2 });
  const featuresRef = usePremiumScrollAnimation({ animation: 'slideUp', stagger: 0.1, delay: 0.4, duration: 0.9 });

  return (
    <section id="parent-dashboard" className="relative py-20 lg:py-24 bg-black overflow-hidden">
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
              Parent Dashboard
            </h2>
            <p 
              className="text-xl sm:text-2xl lg:text-3xl text-white/85 leading-relaxed font-medium max-w-3xl mx-auto"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              A dedicated control centre designed to keep parents and caregivers fully involved.
            </p>
          </div>
          
          <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
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
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                  />
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      boxShadow: `0 0 0 1px ${feature.borderGlow}, 0 0 40px ${feature.borderGlow}`,
                    }}
                  />
                  <div className="flex items-center gap-5 relative z-10">
                    <div 
                      className={`w-14 h-14 lg:w-16 lg:h-16 rounded-xl ${feature.iconBg} border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                      style={{
                        boxShadow: `0 4px 20px ${feature.borderGlow}, inset 0 1px 0 rgba(255, 255, 255, 0.1)`,
                      }}
                    >
                      <Icon 
                        className={`w-7 h-7 lg:w-8 lg:h-8 ${feature.iconColor}`} 
                        style={{ 
                          strokeWidth: 2.5,
                          filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.4))',
                        }} 
                      />
                    </div>
                    <p 
                      className="text-base lg:text-lg text-white/95 font-semibold leading-relaxed group-hover:text-white transition-colors duration-300"
                      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                      {feature.text}
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


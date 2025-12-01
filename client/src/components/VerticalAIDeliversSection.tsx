import { GraduationCap, Shield, Plug, Repeat, Target } from 'lucide-react';
import { usePremiumScrollAnimation } from '@/hooks/usePremiumScrollAnimation';
import SectionSeparator from './SectionSeparator';
import SubtleStarBackground from './SubtleStarBackground';
import SectionConstellation from './SectionConstellation';

const benefits = [
  {
    icon: GraduationCap,
    text: 'Expert-level knowledge',
    gradient: 'from-blue-500/20 to-blue-400/10',
    iconColor: 'text-blue-400',
  },
  {
    icon: Shield,
    text: 'Compliance and safety',
    gradient: 'from-cyan-500/20 to-cyan-400/10',
    iconColor: 'text-cyan-400',
  },
  {
    icon: Plug,
    text: 'Integration with real systems',
    gradient: 'from-blue-500/20 to-cyan-400/10',
    iconColor: 'text-blue-400',
  },
  {
    icon: Repeat,
    text: 'Repeatable, predictable behavior',
    gradient: 'from-cyan-500/20 to-yellow-400/10',
    iconColor: 'text-cyan-400',
  },
  {
    icon: Target,
    text: 'Real-world measurable outcomes',
    gradient: 'from-yellow-500/20 to-yellow-400/10',
    iconColor: 'text-yellow-400',
  },
];

export default function VerticalAIDeliversSection() {
  const titleRef = usePremiumScrollAnimation({ animation: 'fadeUp', duration: 1.2 });
  const cardsRef = usePremiumScrollAnimation({ animation: 'slideUp', stagger: 0.08, delay: 0.3, duration: 1 });

  return (
    <section id="vertical-ai-delivers" className="relative py-10 lg:py-12 bg-black overflow-hidden">
      <SubtleStarBackground density="low" />
      <SectionConstellation sectionId="vertical-ai-delivers" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionSeparator variant="gradient" className="mb-8 lg:mb-10" />
          
          <div ref={titleRef} className="mb-8 lg:mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 text-left">
              What Vertical AI Delivers
            </h2>
          </div>
          
          {/* 5 cards in a row (mobile: vertical stack) with enhanced hover effects */}
          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-center hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* Hover pulse effect */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />
                  
                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className={`w-7 h-7 ${benefit.iconColor}`} style={{ strokeWidth: 2.5 }} />
                    </div>
                    <p className="text-sm text-white/90 leading-relaxed">
                      {benefit.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Transition sentence */}
          <div className="mt-10 lg:mt-12 text-center">
            <p className="text-base sm:text-lg text-white/70 italic max-w-2xl mx-auto">
              To reach this level of performance, every PolstarAI agent is powered by the same behavioral intelligence layer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


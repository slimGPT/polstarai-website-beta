import { AlertCircle, Brain, Zap } from 'lucide-react';
import { usePremiumScrollAnimation } from '@/hooks/usePremiumScrollAnimation';
import SectionSeparator from './SectionSeparator';
import SubtleStarBackground from './SubtleStarBackground';
import SectionConstellation from './SectionConstellation';

const problemPoints = [
  {
    icon: Brain,
    text: 'Lack domain-specific knowledge',
    gradient: 'from-blue-500/20 to-blue-400/10',
    iconColor: 'text-blue-400',
  },
  {
    icon: AlertCircle,
    text: 'Hallucinate under pressure',
    gradient: 'from-cyan-500/20 to-cyan-400/10',
    iconColor: 'text-cyan-400',
  },
  {
    icon: Zap,
    text: 'Behave inconsistently across sessions',
    gradient: 'from-yellow-500/20 to-yellow-400/10',
    iconColor: 'text-yellow-400',
  },
];

export default function ProblemSection() {
  const titleRef = usePremiumScrollAnimation({ animation: 'fadeUp', duration: 1.2 });
  const contentRef = usePremiumScrollAnimation({ animation: 'blurIn', delay: 0.3, duration: 1 });
  const cardsRef = usePremiumScrollAnimation({ animation: 'slideUp', stagger: 0.1, delay: 0.5, duration: 1 });

  return (
    <section id="problem" className="relative py-10 lg:py-12 bg-black overflow-hidden">
      <SubtleStarBackground density="low" />
      <SectionConstellation sectionId="problem" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionSeparator variant="gradient" className="mb-8 lg:mb-10" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column - Headline + Text */}
            <div ref={titleRef} className="text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-5">
                The Problem
              </h2>
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
                Generic LLMs Seem Smart, But They Aren't Experts
              </p>
            </div>
            
            {/* Right Column - Three Bullet Cards with enhanced hover */}
            <div ref={cardsRef} className="space-y-5 lg:space-y-6">
              {problemPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    {/* Hover glow */}
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${point.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />
                    
                    <div className="flex items-start gap-4 relative z-10">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${point.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <Icon className={`w-7 h-7 ${point.iconColor}`} style={{ strokeWidth: 2.5 }} />
                      </div>
                      <p className="text-base text-white/90 leading-relaxed pt-2">
                        {point.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Transition sentence */}
          <div className="mt-10 lg:mt-12 text-center">
            <p className="text-base sm:text-lg text-white/70 italic max-w-2xl mx-auto">
              This is why vertical AI is the right approach. It turns general intelligence into agents built for real work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


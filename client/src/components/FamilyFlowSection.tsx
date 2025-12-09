import { MessageCircle, Settings, Sparkles } from 'lucide-react';
import { usePremiumScrollAnimation } from '@/hooks/usePremiumScrollAnimation';
import SectionSeparator from './SectionSeparator';
import SubtleStarBackground from './SubtleStarBackground';

const steps = [
  {
    icon: MessageCircle,
    text: 'Children talk naturally to SamyBear through a 3D voice interface on phone or tablet.',
    iconColor: 'text-blue-400',
    gradient: 'from-blue-500/30 via-blue-500/20 to-blue-400/10',
    iconBg: 'bg-blue-500/20',
    borderGlow: 'rgba(59, 130, 246, 0.3)',
    stepNumber: '1',
  },
  {
    icon: Settings,
    text: 'Parents set routines, limits, memory, and learning preferences in the dashboard.',
    iconColor: 'text-cyan-400',
    gradient: 'from-cyan-500/30 via-cyan-500/20 to-cyan-400/10',
    iconBg: 'bg-cyan-500/20',
    borderGlow: 'rgba(6, 182, 212, 0.3)',
    stepNumber: '2',
  },
  {
    icon: Sparkles,
    text: "SamyBear adapts behaviour and learning to the family's priorities.",
    iconColor: 'text-yellow-400',
    gradient: 'from-yellow-500/30 via-yellow-500/20 to-yellow-400/10',
    iconBg: 'bg-yellow-500/20',
    borderGlow: 'rgba(234, 179, 8, 0.3)',
    stepNumber: '3',
  },
];

export default function FamilyFlowSection() {
  const titleRef = usePremiumScrollAnimation({ animation: 'fadeUp', duration: 1.2 });
  const stepsRef = usePremiumScrollAnimation({ animation: 'slideUp', stagger: 0.15, delay: 0.3, duration: 0.9 });

  return (
    <section id="family-flow" className="relative py-20 lg:py-24 bg-black overflow-hidden">
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
              How Families Use SamyBear
            </h2>
          </div>
          
          <div ref={stepsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
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
                    className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                  />
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      boxShadow: `0 0 0 1px ${step.borderGlow}, 0 0 40px ${step.borderGlow}`,
                    }}
                  />
                  <div className="flex flex-col items-center text-center relative z-10">
                    <div className="relative mb-6">
                      {index === 0 ? (
                        <img 
                          src="/images/Children.png" 
                          alt="Children talking to SamyBear"
                          className="w-40 h-40 lg:w-48 lg:h-48 object-contain group-hover:scale-110 transition-all duration-500"
                        />
                      ) : index === 1 ? (
                        <img 
                          src="/images/parent.png" 
                          alt="Parents setting preferences in dashboard"
                          className="w-40 h-40 lg:w-48 lg:h-48 object-contain group-hover:scale-110 transition-all duration-500"
                        />
                      ) : (
                        <img 
                          src="/images/samy.png" 
                          alt="SamyBear adapting to family priorities"
                          className="w-40 h-40 lg:w-48 lg:h-48 object-contain group-hover:scale-110 transition-all duration-500"
                        />
                      )}
                    </div>
                    <p 
                      className="text-base lg:text-lg text-white/95 font-semibold leading-relaxed group-hover:text-white transition-colors duration-300"
                      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                      {step.text}
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


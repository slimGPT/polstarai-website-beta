import { Shield, Lock, ShieldCheck, Zap, CheckCircle, DollarSign, TrendingUp } from 'lucide-react';
import { usePremiumScrollAnimation } from '@/hooks/usePremiumScrollAnimation';
import SectionSeparator from './SectionSeparator';
import ParallaxBackground from './ParallaxBackground';
import SubtleStarBackground from './SubtleStarBackground';
import SectionConstellation from './SectionConstellation';

const whyPolstarPoints = [
  {
    icon: Zap,
    title: 'Speed',
    description: 'Deploy new agents in days instead of months. Core intelligence is already built—only domain logic changes.',
    gradient: 'from-blue-500/20 to-blue-400/10',
    iconColor: 'text-blue-400',
  },
  {
    icon: CheckCircle,
    title: 'Reliability',
    description: 'Every agent inherits the same proven behavioral engine, ensuring natural, consistent, and safe responses across all domains.',
    gradient: 'from-cyan-500/20 to-cyan-400/10',
    iconColor: 'text-cyan-400',
  },
  {
    icon: DollarSign,
    title: 'Cost Efficiency',
    description: 'Reusable infrastructure dramatically reduces development costs, enabling sophisticated agents at a fraction of the usual cost.',
    gradient: 'from-blue-500/20 to-cyan-400/10',
    iconColor: 'text-blue-400',
  },
  {
    icon: TrendingUp,
    title: 'Scalability',
    description: 'Progress compounds. Each agent improves the system, and every refinement in reasoning, memory, or workflow benefits future agents.',
    gradient: 'from-cyan-500/20 to-yellow-400/10',
    iconColor: 'text-cyan-400',
  },
];

export default function WhyPolstarSection() {
  const titleRef = usePremiumScrollAnimation({ animation: 'fadeUp', duration: 1.2 });
  const contentRef = usePremiumScrollAnimation({ animation: 'blurIn', delay: 0.3, stagger: 0.08, duration: 1 });
  const securityRef = usePremiumScrollAnimation({ animation: 'scaleIn', delay: 0.6, duration: 1.1 });

  return (
    <section id="why-polstar" className="relative py-10 lg:py-12 bg-black overflow-hidden">
      <SubtleStarBackground density="low" />
      <SectionConstellation sectionId="why-polstar" />
      
      {/* Subtle parallax background */}
      <ParallaxBackground speed={0.2}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        </div>
      </ParallaxBackground>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionSeparator variant="gradient" className="mb-8 lg:mb-10" />
          
          {/* Why PolstarAI */}
          <div ref={titleRef} className="mb-6 lg:mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-5 text-left">
              Why PolstarAI
            </h2>
            
            {/* 4 vertical cards or 2×2 grid with enhanced hover */}
            <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 mb-4">
              {whyPolstarPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 lg:p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden"
                  >
                    {/* Hover glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${point.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />
                    
                    <div className="relative z-10">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${point.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <Icon className={`w-6 h-6 ${point.iconColor}`} style={{ strokeWidth: 2.5 }} />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-3">
                        {point.title}
                      </h3>
                      <p className="text-sm text-white/80 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Visual Divider */}
          <div className="my-4 lg:my-5 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          {/* Security & Compliance */}
          <div ref={securityRef} className="mb-4 lg:mb-6">
            {/* Centered Title */}
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 text-center">
              Security & Compliance
            </h3>
            
            {/* Centered Tagline with Cyan Accent */}
            <p className="text-base sm:text-lg text-cyan-400 italic mb-5 lg:mb-6 text-center max-w-3xl mx-auto">
              &quot;Your data stays protected, your users stay safe, and your systems stay in control.&quot;
            </p>
            
            {/* 3-Card Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
              {/* Card 1: Data Protection (GDPR-Ready) */}
              <div className="bg-white/5 backdrop-blur-sm border border-blue-500/20 rounded-xl p-5 hover:bg-white/10 transition-all duration-300 hover:border-blue-500/30 relative overflow-hidden group">
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-400/10 flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-blue-400" />
                  </div>
                  <h4 className="text-base font-semibold text-white mb-2">
                    Data Protection
                  </h4>
                  <p className="text-xs text-white/80 leading-relaxed">
                    We apply strict access control, least-privilege principles, and isolated data environments for each agent. Our infrastructure is designed to align with GDPR requirements, including secure processing, auditability, and user-data safeguards.
                  </p>
                </div>
              </div>

              {/* Card 2: Encrypted Communication */}
              <div className="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-5 hover:bg-white/10 transition-all duration-300 hover:border-cyan-500/30 relative overflow-hidden group">
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-400/10 flex items-center justify-center mb-4">
                    <Lock className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h4 className="text-base font-semibold text-white mb-2">
                    Encrypted Communication
                  </h4>
                  <p className="text-xs text-white/80 leading-relaxed">
                    All agent interactions use encrypted channels by default. API calls, internal workflows, and external service integrations run over secure protocols to keep sensitive information protected at every step.
                  </p>
                </div>
              </div>

              {/* Card 3: COPPA-Aligned & Enterprise Practices */}
              <div className="bg-white/5 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-5 hover:bg-white/10 transition-all duration-300 hover:border-yellow-500/30 relative overflow-hidden group md:col-span-2 lg:col-span-1">
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500/20 to-yellow-400/10 flex items-center justify-center mb-4">
                    <ShieldCheck className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h4 className="text-base font-semibold text-white mb-2">
                    COPPA-Aligned & Enterprise Practices
                  </h4>
                  <p className="text-xs text-white/80 leading-relaxed">
                    For agents interacting with minors or handling personal information, we follow COPPA-aligned guidelines, parental-consent workflows, and safe-interaction patterns. Operationally, we adopt enterprise-grade data-handling practices throughout our stack.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


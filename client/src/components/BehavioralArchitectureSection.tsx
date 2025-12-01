import { Ear, Database, Brain, Users, Zap, Globe } from 'lucide-react';
import { usePremiumScrollAnimation } from '@/hooks/usePremiumScrollAnimation';
import SectionSeparator from './SectionSeparator';
import SubtleStarBackground from './SubtleStarBackground';
import SectionConstellation from './SectionConstellation';

const architectureBlocks = [
  {
    icon: Ear,
    title: 'Natural understanding',
    description: 'Whisper + NLP layer',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Database,
    title: 'Knowledge grounding',
    description: 'RAG + Firebase/Pinecone',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Brain,
    title: 'Reasoning engine',
    description: 'PolstarAI prompt architecture + GPT-4o/5.1',
    gradient: 'from-cyan-500 to-yellow-500',
  },
  {
    icon: Users,
    title: 'Adaptive interaction',
    description: 'Tone, style, guidance rules',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Zap,
    title: 'Operational execution',
    description: 'Actions, workflows, APIs',
    gradient: 'from-yellow-500 to-cyan-500',
  },
  {
    icon: Globe,
    title: 'Multi-channel delivery',
    description: 'Web, WhatsApp, Telegram, internal systems',
    gradient: 'from-blue-500 to-cyan-500',
  },
];

export default function BehavioralArchitectureSection() {
  const titleRef = usePremiumScrollAnimation({ animation: 'fadeUp', duration: 1.2 });
  const blocksRef = usePremiumScrollAnimation({ animation: 'slideUp', stagger: 0.1, delay: 0.3, duration: 1 });

  // Tech DNA color palette - consistent theming
  const colorThemes = [
    { gradient: 'from-blue-500 to-cyan-500', border: 'border-blue-500/30', glow: 'shadow-blue-500/20' },
    { gradient: 'from-cyan-500 to-blue-500', border: 'border-cyan-500/30', glow: 'shadow-cyan-500/20' },
    { gradient: 'from-cyan-500 to-yellow-500', border: 'border-yellow-500/30', glow: 'shadow-yellow-500/20' },
    { gradient: 'from-blue-500 to-cyan-500', border: 'border-blue-500/30', glow: 'shadow-blue-500/20' },
    { gradient: 'from-yellow-500 to-cyan-500', border: 'border-yellow-500/30', glow: 'shadow-yellow-500/20' },
    { gradient: 'from-blue-500 to-cyan-500', border: 'border-blue-500/30', glow: 'shadow-blue-500/20' },
  ];

  return (
    <section id="behavioral-architecture" className="relative py-10 lg:py-12 bg-black overflow-hidden">
      <SubtleStarBackground density="medium" />
      <SectionConstellation sectionId="behavioral-architecture" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionSeparator variant="gradient" className="mb-8 lg:mb-10" />
          
          <div ref={titleRef} className="mb-8 lg:mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 text-left">
              Our Behavioral Intelligence Architecture
            </h2>
          </div>
          
          {/* Horizontal 6-block pipeline with unified styling */}
          <div ref={blocksRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6">
            {architectureBlocks.map((block, index) => {
              const Icon = block.icon;
              const theme = colorThemes[index];
              return (
                <div
                  key={index}
                  className={`group relative bg-white/5 backdrop-blur-sm border ${theme.border} rounded-xl p-6 lg:p-7 transition-all duration-300 hover:bg-white/10 hover:border-opacity-50 hover:-translate-y-1 hover:shadow-xl ${theme.glow}`}
                >
                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${block.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />
                  
                  <div className="relative z-10">
                    <div className={`inline-flex p-3.5 rounded-xl bg-gradient-to-br ${block.gradient} mb-5 shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" style={{ strokeWidth: 2.5 }} />
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold text-white mb-3">
                      {block.title}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {block.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Transition sentence */}
          <div className="mt-10 lg:mt-12 text-center">
            <p className="text-base sm:text-lg text-white/70 italic max-w-2xl mx-auto">
              Even the strongest architecture needs clean, reliable inputs, which is why input quality is a core principle of our platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


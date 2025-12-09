import { Mic2, Zap, Database } from 'lucide-react';
import { usePremiumScrollAnimation } from '@/hooks/usePremiumScrollAnimation';
import SectionSeparator from './SectionSeparator';
import SubtleStarBackground from './SubtleStarBackground';

const techPoints = [
  {
    icon: Mic2,
    title: 'Natural Voice Conversations',
    description: 'SamyBear speaks with warmth and realism using',
    tool: 'ElevenLabs',
    toolDetail: "'s Eleven v3 (alpha), their most expressive TTS model yet, tuned for child-friendly dialogue.",
    iconColor: 'text-blue-400',
    gradient: 'from-blue-500/30 via-blue-500/20 to-blue-400/10',
    iconBg: 'bg-blue-500/20',
    borderGlow: 'rgba(59, 130, 246, 0.3)',
  },
  {
    icon: Zap,
    title: 'Dynamic Routines & Prompts',
    description: 'Personalized learning paths and daily routines are synced in real time using',
    tool: 'Firestore Database',
    toolDetail: ', enabling adaptive support that evolves with your child.',
    iconColor: 'text-cyan-400',
    gradient: 'from-cyan-500/30 via-cyan-500/20 to-cyan-400/10',
    iconBg: 'bg-cyan-500/20',
    borderGlow: 'rgba(6, 182, 212, 0.3)',
  },
  {
    icon: Database,
    title: 'Transparent Memory & Recall',
    description: 'Every interaction is safely stored and searchable through',
    tool: 'Weaviate',
    toolDetail: ', a vector database designed for context-aware memory, giving parents full visibility and control.',
    iconColor: 'text-yellow-400',
    gradient: 'from-yellow-500/30 via-yellow-500/20 to-yellow-400/10',
    iconBg: 'bg-yellow-500/20',
    borderGlow: 'rgba(234, 179, 8, 0.3)',
  },
];

export default function AgenticAISection() {
  const titleRef = usePremiumScrollAnimation({ animation: 'fadeUp', duration: 1.2 });
  const bulletsRef = usePremiumScrollAnimation({ animation: 'slideUp', stagger: 0.1, delay: 0.3, duration: 0.9 });

  return (
    <section id="agentic-ai" className="relative py-20 lg:py-24 bg-black overflow-hidden">
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
              The Tech Behind It
            </h2>
            <p 
              className="text-xl sm:text-2xl lg:text-3xl text-white/85 leading-relaxed font-medium max-w-3xl mx-auto"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              Purpose-built for Safe, Adaptive, and Transparent Experiences
            </p>
          </div>
          
          <div ref={bulletsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {techPoints.map((point, index) => {
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
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${point.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                  />
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      boxShadow: `0 0 0 1px ${point.borderGlow}, 0 0 40px ${point.borderGlow}`,
                    }}
                  />
                  <div className="flex flex-col gap-4 relative z-10">
                    <div className="flex items-start gap-5">
                      <div 
                        className="w-20 h-20 lg:w-24 lg:h-24 rounded-xl border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 overflow-hidden"
                        style={{
                          boxShadow: `0 4px 20px ${point.borderGlow}, inset 0 1px 0 rgba(255, 255, 255, 0.1)`,
                        }}
                      >
                        {index === 0 ? (
                          <img 
                            src="/images/elevenlabs22.png" 
                            alt="ElevenLabs"
                            className="w-full h-full object-contain p-1.5"
                          />
                        ) : index === 1 ? (
                          <img 
                            src="/images/firebase.png" 
                            alt="Firebase"
                            className="w-full h-full object-contain p-1.5"
                          />
                        ) : (
                          <img 
                            src="/images/weaviate.png" 
                            alt="Weaviate"
                            className="w-full h-full object-contain p-1.5"
                          />
                        )}
                      </div>
                      <h3 
                        className="text-xl lg:text-2xl font-bold text-white group-hover:text-white transition-colors duration-300 flex-1"
                        style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                      >
                        {point.title}
                      </h3>
                    </div>
                    <p 
                      className="text-base lg:text-lg text-white/90 leading-relaxed group-hover:text-white/95 transition-colors duration-300"
                      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                      {point.description}{' '}
                      <span 
                        className="font-bold text-cyan-400"
                        style={{ 
                          textShadow: '0 0 10px rgba(6, 182, 212, 0.6), 0 0 20px rgba(6, 182, 212, 0.3)',
                        }}
                      >
                        {point.tool}
                      </span>
                      {point.toolDetail}
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


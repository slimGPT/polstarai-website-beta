import { Brain, Database, Cpu, Users, Zap, Globe } from 'lucide-react';
import { usePremiumScrollAnimation } from '@/hooks/usePremiumScrollAnimation';
import SectionSeparator from './SectionSeparator';
import SubtleStarBackground from './SubtleStarBackground';
import SectionConstellation from './SectionConstellation';

const pillars = [
  {
    title: 'Natural Understanding',
    tagline: 'Conversations feel human, not scripted.',
    description: 'Each agent begins with a multilingual NLP layer powered by Whisper STT that detects intent, extracts key entities, and understands tone and context.',
    icon: Brain,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Knowledge That Stays Accurate',
    tagline: 'Each agent retrieves the right information for its domain before reasoning.',
    description: 'Agents connect to structured datasets through RAG pipelines with Pinecone and Firebase data to give grounded, reliable answers and avoid hallucinations.',
    icon: Database,
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Advanced Reasoning Models',
    tagline: 'At the heart is our reasoning engine powered by GPT-4o and GPT 5.1 (Experimental).',
    description: 'Meaning that instead of just answering, it interprets, compares, evaluates, and adapts recommendations to each user\'s situation or need.',
    icon: Cpu,
    gradient: 'from-cyan-500 to-yellow-500',
  },
  {
    title: 'Adaptive Interaction Layer',
    tagline: 'Agents adjust their tone, behavior, and response style.',
    description: 'This adaptability is powered by ElevenLabs\'s TTS, character profiles and session-aware memory. The result is communication that feels personal, natural, and emotionally aligned.',
    icon: Users,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Operational Execution',
    tagline: 'Our agents don\'t just talk, they act!',
    description: 'Beyond conversation, our agents take action by triggering workflows, logging requests, updating dashboards, or pulling real-time data. This is done through Node.js backends combined with orchestration and automation layers in the stack. The outcome is AI that doesn\'t just talk, it gets things done.',
    icon: Zap,
    gradient: 'from-yellow-500 to-cyan-500',
  },
  {
    title: 'Cross-Platform Delivery',
    tagline: 'All PolstarAI agents operate seamlessly across web, mobile, Telegram, WhatsApp, and internal business tools.',
    description: 'A unified architecture powered by shared APIs, MCP servers, and orchestration layers ensures every agent behaves consistently no matter the interface. The result is a single intelligence available everywhere; reliable, responsive, and ready whenever you need it.',
    icon: Globe,
    gradient: 'from-blue-500 to-cyan-500',
  },
];

export default function HowItWorksSection() {
  const headerRef = usePremiumScrollAnimation({ animation: 'fadeUpBlur', duration: 1.2 });
  const cardsRef = usePremiumScrollAnimation({ animation: 'slideUp', stagger: 0.12, delay: 0.4, duration: 1 });

  return (
    <section id="how-it-works" className="relative py-6 lg:py-8 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
      <SubtleStarBackground density="medium" />
      <SectionConstellation sectionId="how-it-works" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionSeparator variant="gradient" className="mb-6" />
          
          <div ref={headerRef} className="mb-6 lg:mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 text-left">
              How Our Agents Work
            </h2>
            <p className="text-sm font-medium text-blue-400 mb-3 uppercase tracking-wider">
              PolstarAI Technology Overview
            </p>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
              PolstarAI agents share a common technical foundation built to make them natural, reliable, and deeply context-aware across industries.
              While each agent has its own personality and domain logic, they all run on the same core architecture: a blend of reasoning models, retrieval systems, and adaptive interaction layers.
            </p>
          </div>

          <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6" style={{ opacity: 1 }}>
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 lg:p-6 hover:bg-white/10 transition-all duration-300 hover:border-white/20"
                >
                  {/* Icon - consistent sizing */}
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${pillar.gradient} mb-4`}>
                    <Icon className="w-5 h-5 text-white" style={{ strokeWidth: 2 }} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                    {pillar.title}
                  </h3>
                  
                  {/* Tagline */}
                  <p className="text-sm font-medium text-blue-400 mb-3 italic">
                    {pillar.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-white/70 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

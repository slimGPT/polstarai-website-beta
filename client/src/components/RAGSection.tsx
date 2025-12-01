import { FileCheck, TrendingDown, Database } from 'lucide-react';
import { usePremiumScrollAnimation } from '@/hooks/usePremiumScrollAnimation';
import SectionSeparator from './SectionSeparator';
import SubtleStarBackground from './SubtleStarBackground';
import SectionConstellation from './SectionConstellation';

const whyItMatters = [
  {
    icon: FileCheck,
    title: 'Low Word Error Rate (WER)',
    microHeaders: [
      {
        header: 'Accurate capture',
        text: 'Our speech pipeline combines Whisper STT with custom noise reduction, accent-tolerant tuning, and text-cleaning layers.',
      },
      {
        header: 'Precise understanding',
        text: 'This reduces transcription mistakes and prevents misinterpretation during voice interactions.',
      },
      {
        header: 'Reliable outcomes',
        text: 'Instructions are understood precisely, even in noisy environments or with diverse accents.',
      },
    ],
    gradient: 'from-blue-500/20 to-blue-400/10',
    iconColor: 'text-blue-400',
    borderColor: 'border-blue-500/20',
  },
  {
    icon: TrendingDown,
    title: 'Up to 25% fewer hallucinations',
    microHeaders: [
      {
        header: 'Selective retrieval',
        text: 'Our retrieval system is intentionally selective.',
      },
      {
        header: 'Knowledge-first approach',
        text: 'We use domain-tuned embeddings, Pinecone vector filtering, and controlled reasoning prompts that force the model to rely on retrieved knowledge instead of guessing.',
      },
      {
        header: 'Measurable improvement',
        text: 'Up to 25% fewer hallucinations compared to generic RAG stacks used by most providers.',
      },
    ],
    gradient: 'from-cyan-500/20 to-cyan-400/10',
    iconColor: 'text-cyan-400',
    borderColor: 'border-cyan-500/20',
  },
  {
    icon: Database,
    title: 'Data grounded in reality',
    microHeaders: [
      {
        header: 'Validated inputs',
        text: 'Every RAG pipeline is enriched with high-confidence, continuously validated inputs: verified sources, audited knowledge bases, structured domain datasets.',
      },
      {
        header: 'Dynamic freshness',
        text: 'Dynamic freshness checks prevent outdated responses.',
      },
      {
        header: 'Trusted information',
        text: 'Your agent responds with information you can trust.',
      },
    ],
    gradient: 'from-yellow-500/20 to-yellow-400/10',
    iconColor: 'text-yellow-400',
    borderColor: 'border-yellow-500/20',
  },
];

export default function RAGSection() {
  const titleRef = usePremiumScrollAnimation({ animation: 'fadeUp', duration: 1.2 });
  const introRef = usePremiumScrollAnimation({ animation: 'blurIn', delay: 0.2, duration: 1 });
  const cardsRef = usePremiumScrollAnimation({ animation: 'slideUp', stagger: 0.1, delay: 0.4, duration: 1 });

  return (
    <section id="rag" className="relative py-10 lg:py-12 bg-black overflow-hidden">
      <SubtleStarBackground density="low" />
      <SectionConstellation sectionId="rag" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionSeparator variant="gradient" className="mb-8 lg:mb-10" />
          
          <div ref={titleRef} className="mb-8 lg:mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-5 text-left">
              Avoid Garbage In, Garbage Out
            </h2>
            
            <p ref={introRef} className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-3xl mb-6 lg:mb-8">
              Your agent is only as intelligent as the information it stands on. Input quality is treated as a first-class engineering challenge at PolstarAI.
            </p>
          </div>
          
          {/* 3-card layout with enhanced hover effects */}
          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-6">
            {whyItMatters.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`group relative bg-white/5 backdrop-blur-sm border ${item.borderColor} rounded-xl p-6 lg:p-7 hover:bg-white/10 hover:border-opacity-50 transition-all duration-300 overflow-hidden hover:-translate-y-1 hover:shadow-xl`}
                >
                  {/* Subtle gradient glow on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />
                  
                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className={`w-7 h-7 ${item.iconColor}`} style={{ strokeWidth: 2.5 }} />
                    </div>
                    
                    <h3 className="text-lg lg:text-xl font-bold text-white mb-4">
                      {item.title}
                    </h3>
                    
                    <div className="space-y-4">
                      {item.microHeaders.map((micro, idx) => (
                        <div key={idx}>
                          <h4 className="text-sm font-semibold text-white/95 mb-1.5">
                            {micro.header}
                          </h4>
                          <p className="text-sm text-white/70 leading-relaxed">
                            {micro.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


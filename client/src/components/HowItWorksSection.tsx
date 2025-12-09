import { useState } from 'react';
import { usePremiumScrollAnimation } from '@/hooks/usePremiumScrollAnimation';
import SectionSeparator from './SectionSeparator';
import SubtleStarBackground from './SubtleStarBackground';
import SectionConstellation from './SectionConstellation';
import { Mic, Brain, BookOpen } from 'lucide-react';

const features = [
  {
    id: 'voice-first',
    icon: Mic,
    title: 'Voice-First Interaction System',
    description: 'Proactive, personalized interactions that guide children naturally',
    details: [
      {
        subtitle: 'Greeting Ritual (Personalized & Guided)',
        example: '"Good morning, Leila! Your mom wants us to practice counting today. Should we count jungle animals together?"',
      },
      {
        subtitle: 'Parent-Triggered Learning Routines',
        example: '"Your dad added a reading goal. Want to read your story from yesterday?"',
      },
      {
        subtitle: 'Contextual Memory Prompts',
        example: '"Yesterday we talked about dinosaurs! Do you remember what T-Rex eats?"',
      },
      {
        subtitle: 'Built-In Choice Architecture',
        example: '"Should we hear a story, play a counting game, or learn a new song?"',
      },
      {
        subtitle: 'Anti-Dependency Design',
        example: '"Go show your mom the butterfly drawing you made!" (with time limits and break reminders)',
      },
    ],
  },
  {
    id: 'memory',
    icon: Brain,
    title: 'Memory Architecture',
    description: 'Contextual understanding that grows with each interaction',
    details: [
      {
        subtitle: 'Session Memory',
        example: 'Child: "What do elephants eat again?" SamyBear: "Grass, leaves, and fruit! Remember how they use their trunks to grab food?"',
      },
      {
        subtitle: 'Long-Term Memory',
        example: 'Stores safe, parent-approved details: name, age, interests, progress, favorite stories, family details',
      },
      {
        subtitle: 'Contextual Memory (Parent Goals)',
        example: '"Your mom wants us to practice the alphabet today. Ready for the ABC song?"',
      },
    ],
  },
  {
    id: 'learning',
    icon: BookOpen,
    title: 'Socratic Method Learning',
    description: 'Guiding discovery through questions, not direct answers',
    details: [
      {
        subtitle: 'Guiding, Not Answering',
        example: 'Instead of "It\'s 4", SamyBear asks: "If you have 2 apples and I give you 2 more, how many do we have? Let\'s count!"',
      },
      {
        subtitle: 'Expert-Reviewed Content',
        example: 'All material is age-appropriate, reviewed by educators, based on Montessori, Common Core, and Reggio Emilia principles',
      },
    ],
  },
];

export default function HowItWorksSection() {
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);
  const titleRef = usePremiumScrollAnimation({ animation: 'fadeUp', duration: 1.2 });
  const featuresRef = usePremiumScrollAnimation({ animation: 'slideUp', stagger: 0.1, delay: 0.3, duration: 1 });

  return (
    <section id="how-it-works" className="relative py-20 lg:py-24 bg-black overflow-hidden">
      <SubtleStarBackground density="medium" />
      <SectionConstellation sectionId="how-it-works" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionSeparator variant="gradient" className="mb-12 lg:mb-16" />
          
          <div ref={titleRef} className="mb-12 lg:mb-16 text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 lg:mb-8 leading-tight">
              How It Works
            </h2>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              SamyBear combines voice-first interaction, contextual memory, and Socratic teaching methods to create safe, engaging learning experiences for children.
            </p>
          </div>
          
          <div ref={featuresRef} className="space-y-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              const isExpanded = expandedFeature === feature.id;
              
              return (
                <div
                  key={feature.id}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all"
                >
                  <button
                    onClick={() => setExpandedFeature(isExpanded ? null : feature.id)}
                    className="w-full p-6 md:p-8 text-left flex items-start gap-4 hover:bg-white/5 transition-colors"
                  >
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed mb-3">
                        {feature.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-blue-400">
                        <span>{isExpanded ? 'Hide' : 'Show'} details</span>
                        <span className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
                          ↓
                        </span>
                      </div>
                    </div>
                  </button>
                  
                  {isExpanded && (
                    <div className="px-6 md:px-8 pb-6 md:pb-8 space-y-4 border-t border-white/10 pt-6">
                      {feature.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="bg-white/5 rounded-xl p-4 md:p-6">
                          <h4 className="text-base md:text-lg font-semibold text-white mb-2">
                            {detail.subtitle}
                          </h4>
                          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mt-3">
                            <p className="text-sm md:text-base text-blue-200 italic leading-relaxed">
                              "{detail.example}"
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

import ScrollSection from '@/components/ScrollSection';
import { Eye, Target, BarChart3, Heart, Search, Trash2, BookOpen } from 'lucide-react';

const features = [
  {
    icon: Eye,
    title: 'Conversation Transparency',
    description: 'Full visibility into every interaction',
    details: [
      'Full transcripts of all conversations',
      'Search by theme or date',
      '"Best moments" highlights',
      'Delete/pause recording controls',
    ],
    example: 'Search: "Show me all conversations about dinosaurs from last week"',
  },
  {
    icon: Target,
    title: 'Learning Goal Assignment',
    description: 'Curated libraries for structured learning',
    details: [
      'Choose from: Literacy, Numeracy, Social-emotional, Creativity, General knowledge',
      'Automatic difficulty adjustment based on performance',
      'Parent-designed learning routines',
    ],
    example: 'Goal: "Practice counting 1-20" → SamyBear automatically initiates counting activities',
  },
  {
    icon: BarChart3,
    title: 'Engagement Dashboard',
    description: 'Comprehensive activity tracking',
    details: [
      'Daily/weekly activity summaries',
      'Learning streaks and consistency',
      'Reminders and notifications',
      'Best engagement times analysis',
    ],
    example: 'Dashboard shows: "Leila is most engaged at 4 PM. 7-day streak! Great job!"',
  },
  {
    icon: Heart,
    title: 'Parent–Child Collaboration',
    description: 'Offline activities curated with examples',
    details: [
      'Weekly missions and challenges',
      'Offline activity suggestions',
      'Progress tracking for shared activities',
    ],
    example: '"Emma learned about butterflies today! Ask her to draw one and explain the life cycle."',
  },
];

export default function ParentHubSection() {
  return (
    <section id="parent-hub" className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollSection animationType="slideUp">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Parent Hub
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
              Complete transparency and control for parents and educators
            </p>
          </div>
        </ScrollSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <ScrollSection key={index} animationType="slideUp" delay={0.1 * index}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed mb-4">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  
                  {feature.details && (
                    <div className="mb-4 space-y-2">
                      {feature.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start gap-2">
                          <span className="text-cyan-400 mt-1">•</span>
                          <p className="text-sm text-white/70">{detail}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {feature.example && (
                    <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4 mt-4">
                      <p className="text-sm text-cyan-200 italic">
                        {feature.example}
                      </p>
                    </div>
                  )}
                </div>
              </ScrollSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}


import ScrollSection from '@/components/ScrollSection';
import { TrendingUp, Clock, Calendar, MessageCircle, BookOpen, Heart, Users } from 'lucide-react';

const metrics = [
  {
    icon: Calendar,
    category: 'Frequency',
    metric: 'Sessions per week',
    target: '5–7',
    description: 'Regular engagement builds consistent learning habits',
  },
  {
    icon: Clock,
    category: 'Duration',
    metric: 'Minutes per session',
    target: '15–20',
    description: 'Optimal attention span for meaningful interactions',
  },
  {
    icon: TrendingUp,
    category: 'Consistency',
    metric: 'Streaks',
    target: '7+ days',
    description: 'Building daily learning routines',
  },
  {
    icon: MessageCircle,
    category: 'Depth',
    metric: 'Multi-turn dialogues',
    target: '10+ turns',
    description: 'Deep conversations show genuine engagement',
  },
  {
    icon: BookOpen,
    category: 'Learning',
    metric: 'New concepts',
    target: '2–3/week',
    description: 'Steady progress in knowledge acquisition',
  },
  {
    icon: Heart,
    category: 'Emotional',
    metric: 'Affection signals',
    target: '"I love SamyBear" moments',
    description: 'Emotional connection indicates positive experience',
  },
  {
    icon: Users,
    category: 'Parent Involvement',
    metric: 'Dashboard visits',
    target: '3+ per week',
    description: 'Active parent engagement supports learning',
  },
  {
    icon: BookOpen,
    category: 'Collaboration',
    metric: 'Offline activities',
    target: '1+ per week',
    description: 'Extending learning beyond the screen',
  },
];

export default function EngagementMetricsSection() {
  return (
    <section id="engagement-metrics" className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollSection animationType="slideUp">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Engagement Metrics
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
              Quality over quantity—measuring depth, consistency, emotional connection, and learning outcomes, not just screen time
            </p>
          </div>
        </ScrollSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
          {metrics.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollSection key={index} animationType="scale" delay={0.05 * index}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 md:p-6 hover:bg-white/10 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-500/20 to-blue-500/20 border border-yellow-500/30 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-white/60 uppercase tracking-wide mb-1">
                        {item.category}
                      </p>
                      <p className="text-sm text-white/80 font-medium">
                        {item.metric}
                      </p>
                    </div>
                  </div>
                  <div className="mb-2">
                    <p className="text-2xl font-bold text-white">
                      {item.target}
                    </p>
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}


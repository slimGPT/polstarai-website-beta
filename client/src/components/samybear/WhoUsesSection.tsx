import ScrollSection from '@/components/ScrollSection';
import { Users, GraduationCap, Microscope, Building2 } from 'lucide-react';

const groups = [
  {
    icon: Users,
    title: 'Parents',
    description: 'Families seeking safe, educational AI companions for their children',
  },
  {
    icon: GraduationCap,
    title: 'Educators',
    description: 'Teachers and schools integrating AI into early childhood education',
  },
  {
    icon: Microscope,
    title: 'Researchers',
    description: 'Academic institutions studying child-centred AI development',
  },
  {
    icon: Building2,
    title: 'NGOs & Government Programs',
    description: 'Organizations implementing digital education initiatives',
  },
];

export default function WhoUsesSection() {
  return (
    <section id="who-is-it-for" className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollSection animationType="slideUp">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Who Uses SamyBear
            </h2>
          </div>
        </ScrollSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {groups.map((group, index) => {
            const Icon = group.icon;
            return (
              <ScrollSection key={index} animationType="slideUp" delay={0.1 * index}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                        {group.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed text-lg">
                        {group.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}


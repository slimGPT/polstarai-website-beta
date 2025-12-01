import ScrollSection from '@/components/ScrollSection';

const pillars = [
  {
    title: 'Support development & well-being',
    description: 'SamyBear uses age-appropriate Socratic teaching methods and promotes offline activities to support holistic child development.',
  },
  {
    title: 'Inclusion and accessibility',
    description: 'Voice-first interaction makes SamyBear accessible to children regardless of reading ability, with child-tuned speech recognition.',
  },
  {
    title: 'Fairness & non-discrimination',
    description: 'Our AI is designed to treat all children equitably, with contextual memory that respects individual preferences without bias.',
  },
  {
    title: 'Data protection & privacy',
    description: 'COPPA & GDPR-K compliant from day one. Parents maintain full control over their child\'s data with transparent privacy controls.',
  },
  {
    title: 'Safety',
    description: 'Real-time safety & grounding engine filters content, ensuring all interactions are age-appropriate and secure.',
  },
  {
    title: 'Transparency & explainability',
    description: 'Complete conversation logs and weekly progress insights give parents full visibility into their child\'s interactions.',
  },
  {
    title: 'Empowering institutions',
    description: 'Educators and schools can integrate SamyBear with parent-set learning goals and institutional oversight tools.',
  },
  {
    title: 'Preparing children for the AI future',
    description: 'Children learn to interact safely and effectively with AI, building digital literacy through guided, structured conversations.',
  },
  {
    title: 'Enabling supportive environments',
    description: 'SamyBear encourages co-learning and shared parent-child activities, fostering supportive family engagement.',
  },
];

export default function UNICEFPillarsSection() {
  return (
    <section id="unicef-pillars" className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollSection animationType="slideUp">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,217,255,0.5)]">
                Child-Centred by Design
              </span>
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
              Each card represents one of <span className="text-cyan-300 font-semibold">UNICEF's</span> Nine Requirements for Child-Centred AI and how SamyBear aligns with it.
            </p>
          </div>
        </ScrollSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <ScrollSection key={index} animationType="scale" delay={0.05 * index}>
              <div className="group relative bg-white/5 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-6 hover:bg-white/10 hover:border-cyan-400/60 transition-all min-h-[200px] flex flex-col overflow-hidden unicef-card">
                {/* Neon blue glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:via-cyan-500/5 group-hover:to-blue-500/10 transition-all duration-300 rounded-xl pointer-events-none" />
                
                <div className="relative z-10">
                  <h3 className="text-base md:text-lg text-white font-semibold mb-3 text-center group-hover:text-cyan-200 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/70 leading-relaxed text-center flex-1 group-hover:text-white/80 transition-colors">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </ScrollSection>
          ))}
        </div>
      </div>
      
      <style>{`
        .unicef-card {
          box-shadow: 0 0 0 0 rgba(0, 217, 255, 0);
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .unicef-card:hover {
          box-shadow: 0 0 20px rgba(0, 217, 255, 0.3), 
                      0 0 40px rgba(0, 217, 255, 0.15),
                      inset 0 0 20px rgba(0, 217, 255, 0.1);
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}


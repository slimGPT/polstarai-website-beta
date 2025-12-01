import ScrollSection from '@/components/ScrollSection';

export default function WhySamyBearSection() {
  const points = [
    'Most AI systems are made for adults — not children.',
    'Children need safe, structured, age-appropriate digital interactions.',
    'Parents and educators need transparent tools with full oversight.',
  ];

  return (
    <section id="why-samybear" className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollSection animationType="slideUp">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Why SamyBear Exists
            </h2>
          </div>
        </ScrollSection>

        <div className="max-w-4xl mx-auto space-y-6">
          {points.map((point, index) => (
            <ScrollSection key={index} animationType="slideUp" delay={0.1 * index}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
                <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                  {point}
                </p>
              </div>
            </ScrollSection>
          ))}
        </div>
      </div>
    </section>
  );
}


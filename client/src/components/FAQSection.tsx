import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ScrollSection from './ScrollSection';

const faqs = [
  {
    question: 'Can I use Genie with my team?',
    answer: 'Definitely. Genie works great solo or with a team. Everyone stays on-brand.',
  },
  {
    question: 'What formats can I export from Genie?',
    answer:
      "You can export your creations in PNG, JPG, and SVG. We're also working on adding more formats soon!",
  },
  {
    question: 'Is there a free trial?',
    answer: "Yes can try it for 14 days and then cancel if you don't like it.",
  },
  {
    question: 'What happens if I cancel?',
    answer:
      'No problem. You can cancel anytime. Your account will remain active until the end of your current billing period.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-background">
      <div className="container max-w-3xl">
        <ScrollSection animationType="slideUp">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">FAQs</h2>
        </ScrollSection>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <ScrollSection key={index} animationType="slideUp" delay={index * 0.1}>
              <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/30 transition-colors"
                >
                  <span className="font-semibold pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-40' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 text-muted-foreground">{faq.answer}</div>
                </div>
              </div>
            </ScrollSection>
          ))}
        </div>
      </div>
    </section>
  );
}

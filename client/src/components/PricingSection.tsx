import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import ScrollSection from './ScrollSection';

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-32 bg-background">
      <div className="container">
        <ScrollSection animationType="slideUp">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8">
              One plan perfect for everyone
            </h2>

            {/* Toggle */}
            <div className="inline-flex items-center gap-4 p-1 bg-muted rounded-full">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  !isYearly
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Pay monthly
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all relative ${
                  isYearly
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Pay yearly
                {isYearly && (
                  <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs px-2 py-0.5 rounded-full">
                    -25%
                  </span>
                )}
              </button>
            </div>
          </div>
        </ScrollSection>

        <ScrollSection animationType="scale" delay={0.2}>
          <div className="max-w-md mx-auto">
            <div className="bg-card border-2 border-border rounded-3xl p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-2">TBD</h3>
                <div className="text-muted-foreground">
                  <span className="text-sm">per month / dreamer</span>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full rounded-full mb-8"
                onClick={() => window.open('https://tally.so/r/mRpv2v', '_blank')}
              >
                Join the waitlist
              </Button>

              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-4">Plan Includes</p>
                <ul className="space-y-3">
                  {[
                    '**** Genie credits',
                    'Style-aware prompts',
                    'Collections you can share',
                    'Real, friendly human support',
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </ScrollSection>
      </div>
    </section>
  );
}

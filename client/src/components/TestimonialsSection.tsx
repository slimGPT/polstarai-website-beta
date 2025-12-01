import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollSection from './ScrollSection';

const testimonials = [
  {
    quote: 'Genie would be really great for prototyping brand ideas.',
    author: 'Michael Okoh',
    role: 'Founder/CEO',
  },
  {
    quote: 'The concept alone has me more excited than half the tools I already pay for.',
    author: 'Daniel Abayomi',
    role: 'Product designer',
  },
  {
    quote: "I've seen a preview of Genie and what the team is working on is wild",
    author: 'Adenekan Wondeful',
    role: 'Web Engineer',
  },
  {
    quote: "When Genie delivers on its promise, it'll be the tool startups have been wishing for.",
    author: 'Lola Salehu',
    role: 'Senior Product Designer',
  },
  {
    quote: 'Every creative director I know is going to want this.',
    author: 'Uche Divine',
    role: 'Senior Product Designer',
  },
  {
    quote: 'This is the kind of product you hear about once and never stop thinking about.',
    author: 'Seun Badejo',
    role: 'Founder/CEO',
  },
  {
    quote: 'Hard to believe no one built this before.',
    author: 'Shedrack Akintayo',
    role: 'Founder/CEO',
  },
  {
    quote: "Can't wait to use Genie internally at Codecafe.",
    author: 'Abdulazeez Abdulazeez',
    role: 'Co-founder/CEO',
  },
];

export default function TestimonialsSection() {
  const track1Ref = useRef<HTMLDivElement>(null);
  const track2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!track1Ref.current || !track2Ref.current) return;

    // Infinite scroll animation
    const track1Width = track1Ref.current.scrollWidth / 2;
    const track2Width = track2Ref.current.scrollWidth / 2;

    gsap.to(track1Ref.current, {
      x: -track1Width,
      duration: 40,
      ease: 'none',
      repeat: -1,
    });

    gsap.to(track2Ref.current, {
      x: -track2Width,
      duration: 40,
      ease: 'none',
      repeat: -1,
    });
  }, []);

  return (
    <section className="py-32 bg-muted/10 overflow-hidden">
      <div className="container mb-16">
        <ScrollSection animationType="slideUp">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Made for designers, loved by dreamers
            </h2>
            <p className="text-lg text-muted-foreground">
              See how others are turning imagination into reality
            </p>
          </div>
        </ScrollSection>
      </div>

      {/* First Row */}
      <div className="mb-8">
        <div ref={track1Ref} className="flex gap-6" style={{ width: 'fit-content' }}>
          {[...testimonials, ...testimonials].map((testimonial, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-2xl p-6 w-[350px] flex-shrink-0 hover:border-accent/50 transition-all duration-300"
            >
              <p className="text-sm mb-4 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-secondary"></div>
                <div>
                  <p className="font-semibold text-sm">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Second Row (reversed) */}
      <div>
        <div
          ref={track2Ref}
          className="flex gap-6"
          style={{ width: 'fit-content', transform: 'translateX(-50%)' }}
        >
          {[...testimonials.slice().reverse(), ...testimonials.slice().reverse()].map(
            (testimonial, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-2xl p-6 w-[350px] flex-shrink-0 hover:border-secondary/50 transition-all duration-300"
              >
                <p className="text-sm mb-4 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-accent"></div>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

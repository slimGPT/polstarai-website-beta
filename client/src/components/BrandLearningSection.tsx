import ScrollSection from './ScrollSection';
import FloatingElement from './FloatingElement';

export default function BrandLearningSection() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-background to-muted/20 overflow-hidden">
      {/* Floating cloud decorations */}
      <FloatingElement
        src="/cloud-shape.png"
        alt="Cloud decoration"
        className="w-24 h-24 md:w-32 md:h-32 top-[10%] left-[5%] opacity-40"
        delay={0}
        duration={5}
        xRange={15}
        yRange={20}
      />
      <FloatingElement
        src="/cloud-shape.png"
        alt="Cloud decoration"
        className="w-32 h-32 md:w-40 md:h-40 bottom-[10%] right-[5%] opacity-30"
        delay={0.5}
        duration={4.5}
        xRange={18}
        yRange={25}
      />

      <div className="container relative z-10">
        <ScrollSection animationType="slideUp" duration={1.2}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-center leading-relaxed text-muted-foreground">
            Genie learns your{' '}
            <span className="inline-flex items-center mx-2">
              <img src="/palette-icon.png" alt="brand" className="w-10 h-10 md:w-12 md:h-12" style={{ imageRendering: 'high-quality' }} loading="lazy" />
            </span>{' '}
            brand,
            <br />
            <span className="inline-flex items-center mx-2">
              <img src="/icon-wand.png" alt="tone" className="w-10 h-10 md:w-12 md:h-12" style={{ imageRendering: 'high-quality' }} loading="lazy" />
            </span>{' '}
            tone of voice,{' '}
            <span className="inline-flex items-center mx-2">
              <img src="/icon-colors.png" alt="colours" className="w-10 h-10 md:w-12 md:h-12" style={{ imageRendering: 'high-quality' }} loading="lazy" />
            </span>{' '}
            colours,
            <br />
            and then creates a{' '}
            <span className="inline-flex items-center mx-2">
              <img src="/icon-flower.png" alt="style" className="w-10 h-10 md:w-12 md:h-12" style={{ imageRendering: 'high-quality' }} loading="lazy" />
            </span>{' '}
            style
            <br />
            for{' '}
            <span className="inline-flex items-center mx-2">
              <img src="/icon-smiley.png" alt="you" className="w-10 h-10 md:w-12 md:h-12" style={{ imageRendering: 'high-quality' }} loading="lazy" />
            </span>{' '}
            you.
          </h2>
        </ScrollSection>
      </div>
    </section>
  );
}

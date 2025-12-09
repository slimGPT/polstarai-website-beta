import { usePremiumScrollAnimation } from '@/hooks/usePremiumScrollAnimation';
import SectionSeparator from './SectionSeparator';
import SubtleStarBackground from './SubtleStarBackground';
import WaitlistForm from './WaitlistForm';

export default function ContactSection() {
  const headerRef = usePremiumScrollAnimation({ animation: 'fadeUpBlur', duration: 1.2 });
  const leftRef = usePremiumScrollAnimation({ animation: 'fadeUp', delay: 0.3, duration: 1 });
  const formRef = usePremiumScrollAnimation({ animation: 'scaleIn', delay: 0.4, duration: 1.1 });

  return (
    <section id="contact" className="relative py-8 lg:py-10 bg-black overflow-hidden">
      <SubtleStarBackground density="low" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionSeparator variant="gradient" className="mb-6" />
          
          <div ref={headerRef} className="mb-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 text-left">
              Join the Waitlist
            </h2>
            <p className="text-base sm:text-lg text-white/70">
              Be among the first to experience our tech.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Left Side - Text */}
            <div ref={leftRef} className="flex flex-col justify-center">
              <p className="text-base text-white/90 leading-relaxed mb-3">
                We&apos;re building SamyBear with families, educators, and child development experts to create the safest, most engaging AI companion for children.
              </p>
              <p className="text-base text-white/90 leading-relaxed">
                Join our waitlist to stay updated on our progress and be notified when SamyBear becomes available.
              </p>
            </div>
            
            {/* Right Side - Form */}
            <div ref={formRef} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 lg:p-6">
              <WaitlistForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

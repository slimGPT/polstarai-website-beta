import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import StyleSection from '@/components/StyleSection';
import BrandLearningSection from '@/components/BrandLearningSection';
import UIMockupSection from '@/components/UIMockupSection';
import FeaturesSection from '@/components/FeaturesSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StyleSection />
      <BrandLearningSection />
      <UIMockupSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

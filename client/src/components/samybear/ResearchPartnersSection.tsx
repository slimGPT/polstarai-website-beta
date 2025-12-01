import { Button } from '@/components/ui/button';
import ScrollSection from '@/components/ScrollSection';
import { Handshake } from 'lucide-react';

export default function ResearchPartnersSection() {
  return (
    <section id="research-partners" className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollSection animationType="slideUp">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center">
                <Handshake className="w-10 h-10 text-blue-400" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Research & Partnerships
            </h2>
            <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed max-w-2xl mx-auto">
              Invite universities, labs, and institutions to collaborate on child-centred AI. Together, we can advance safe, ethical AI for children.
            </p>
            <Button
              size="lg"
              className="px-8 py-6 text-lg font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full transition-all shadow-lg hover:shadow-xl"
              onClick={() => {
                // In a real implementation, this would open a contact form or navigate to a contact page
                window.location.href = 'mailto:partnerships@polstarai.com?subject=SamyBear Research Partnership Inquiry';
              }}
            >
              Partner With Us
            </Button>
          </div>
        </ScrollSection>
      </div>
    </section>
  );
}


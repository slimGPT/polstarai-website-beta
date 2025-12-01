import { useState } from 'react';
import { usePremiumScrollAnimation } from '@/hooks/usePremiumScrollAnimation';
import SectionSeparator from './SectionSeparator';
import SubtleStarBackground from './SubtleStarBackground';
import SectionConstellation from './SectionConstellation';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: Add form submission logic
    alert('Thank you for your interest! We will get back to you soon.');
    setFormData({ name: '', email: '', organization: '', role: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const headerRef = usePremiumScrollAnimation({ animation: 'fadeUpBlur', duration: 1.2 });
  const leftRef = usePremiumScrollAnimation({ animation: 'fadeUp', delay: 0.3, duration: 1 });
  const formRef = usePremiumScrollAnimation({ animation: 'scaleIn', delay: 0.4, duration: 1.1 });

  return (
    <section id="contact" className="relative py-8 lg:py-10 bg-black overflow-hidden">
      <SubtleStarBackground density="low" />
      <SectionConstellation sectionId="contact" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionSeparator variant="gradient" className="mb-6" />
          
          <div ref={headerRef} className="mb-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 text-left">
              Connect With Us
            </h2>
            <p className="text-base sm:text-lg text-white/70">
              Let&apos;s build your intelligent agent.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Left Side - Text */}
            <div ref={leftRef} className="flex flex-col justify-center">
              <p className="text-base text-white/90 leading-relaxed mb-3">
                Whether you&apos;re exploring your first AI agent or scaling existing operations, we&apos;d love to hear from you.
              </p>
              <p className="text-base text-white/90 leading-relaxed">
                Tell us about your context, and we&apos;ll help you identify the right agent or custom solution.
              </p>
            </div>
            
            {/* Right Side - Form */}
            <div ref={formRef} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 lg:p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-1.5">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-white/90 mb-1.5">
                    Organization *
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    required
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="Your organization"
                  />
                </div>
                
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-white/90 mb-1.5">
                    Role (optional)
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="Your role"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-1.5">
                    Message / What problem are you trying to solve? *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                    placeholder="Tell us about your needs..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 shadow-lg shadow-blue-500/30 mt-2"
                >
                  Book a Demo
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

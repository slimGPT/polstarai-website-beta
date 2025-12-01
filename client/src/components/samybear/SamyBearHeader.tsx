import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function SamyBearHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 96;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'The Problem', href: '#problem' },
    { label: 'Vertical AI', href: '#vertical-ai-delivers' },
    { label: 'AI Constellation', href: '#ai-constellation' },
    { label: 'Why PolstarAI', href: '#why-polstar' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent'
      }`}
      style={{ position: 'fixed', zIndex: 20 }}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full h-20 lg:h-24">
          {/* LEFT: Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer group flex-shrink-0"
            onClick={() => {
              console.log('CLICK REGISTERED - Logo');
              scrollToSection('hero');
            }}
            style={{ position: 'relative', zIndex: 20 }}
          >
            <div className="relative flex items-center">
              <img 
                src="/images/logomain.png" 
                alt="PolstarAI" 
                className="h-12 sm:h-14 md:h-16 lg:h-[4.8rem] w-auto object-contain transition-all duration-300 group-hover:scale-105 group-hover:brightness-110 drop-shadow-lg filter"
                style={{ 
                  filter: 'drop-shadow(0 2px 8px rgba(59, 130, 246, 0.18))',
                  imageRendering: 'high-quality',
                }}
                loading="eager"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.style.opacity = '0.5';
                  console.error('Logo image failed to load:', img.src);
                }}
              />
              {/* Subtle glow effect on hover - Polstar AI palette */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/18 via-cyan-400/18 to-yellow-400/18 rounded-lg blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 scale-150" />
            </div>
          </div>

          {/* CENTER: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => {
                    console.log('CLICK REGISTERED - Nav link:', item.label);
                    scrollToSection(item.href.slice(1));
                  }}
                  style={{ position: 'relative', zIndex: 20 }}
                  className="text-sm font-medium text-white/90 hover:text-white transition-colors duration-200 relative group cursor-pointer"
                  type="button"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </div>
          </nav>

          {/* RIGHT: Mobile Menu Button */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <button
              className="lg:hidden text-white p-2 cursor-pointer"
              onClick={() => {
                console.log('CLICK REGISTERED - Mobile menu toggle');
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              style={{ position: 'relative', zIndex: 20 }}
              aria-label="Toggle menu"
              type="button"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => {
                    console.log('CLICK REGISTERED - Mobile nav link:', item.label);
                    scrollToSection(item.href.slice(1));
                  }}
                  style={{ position: 'relative', zIndex: 20 }}
                  className="text-left text-white/90 hover:text-white transition-colors py-2 cursor-pointer"
                  type="button"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}


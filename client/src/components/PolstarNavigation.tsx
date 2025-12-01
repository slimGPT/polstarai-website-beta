import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Menu, X } from 'lucide-react';

export default function PolstarNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-md border-b border-border/30 shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Sparkles className="w-6 h-6 text-primary" fill="currentColor" />
            <span className="text-xl font-bold text-primary">
              Polstar AI
            </span>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('agents')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Our Agents
            </button>
            <button
              onClick={() => scrollToSection('samy-bear')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Meet Samy-Bear
            </button>
            <button
              onClick={() => scrollToSection('comparison')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Compare
            </button>
          </div>

          {/* CTA Button - Desktop */}
          <Button
            className="hidden md:flex rounded-full px-6 py-2 text-sm font-semibold bg-primary hover:bg-primary/90 shadow-md"
          >
            Get Started
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border space-y-4">
            <button
              onClick={() => scrollToSection('agents')}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              Our Agents
            </button>
            <button
              onClick={() => scrollToSection('samy-bear')}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              Meet Samy-Bear
            </button>
            <button
              onClick={() => scrollToSection('comparison')}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              Compare
            </button>
            <Button className="w-full rounded-full">Get Started</Button>
          </div>
        )}
      </div>
    </nav>
  );
}

import { Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 lg:py-12 bg-black border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-white/60 text-sm">
            © {currentYear} PolstarAI. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
              Privacy
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
              Terms
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 lg:py-16 bg-black border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Links */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10">
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

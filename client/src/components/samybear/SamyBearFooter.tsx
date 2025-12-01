import { Linkedin } from 'lucide-react';

export default function SamyBearFooter() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Safety & Privacy', href: '#safety-privacy' },
    { label: 'Documentation', href: '#documentation' },
    { label: 'Research Program', href: '#research-partners' },
    { label: 'Contact', href: '#contact' },
    { label: 'About PolstarAI', href: '/' },
  ];

  return (
    <footer className="relative py-12 lg:py-16 bg-black border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/images/agents/Samybearavatar nobackground.png" 
                alt="SamyBear" 
                className="h-8 w-auto object-contain"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  // Fallback to alternative image
                  if (img.src !== '/samy-bear.png') {
                    img.src = '/samy-bear.png';
                  } else {
                    img.style.display = 'none';
                  }
                }}
              />
              <span className="text-xl font-bold text-white">SamyBear</span>
            </div>
            <p className="text-white/60 text-sm">
              A safe, voice-first 3D AI companion for children aged 4–10. Powered by PolstarAI.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex items-center gap-4">
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

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm">
              © {currentYear} PolstarAI. All rights reserved.
            </div>
            <div className="text-white/60 text-sm">
              Shaped by <span className="text-cyan-300 font-semibold">UNICEF's</span> vision for child-centred AI
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


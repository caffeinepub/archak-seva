import { Heart, ArrowUp } from 'lucide-react';
import { SiFacebook, SiInstagram, SiYoutube, SiX } from 'react-icons/si';

const footerLinks = {
  'Quick Links': [
    { label: 'About Us', href: '#about' },
    { label: 'Our Programs', href: '#programs' },
    { label: 'Impact', href: '#impact' },
    { label: 'Get Involved', href: '#get-involved' },
    { label: 'Contact', href: '#contact' },
  ],
  'Programs': [
    { label: 'Shiksha Jyoti', href: '#programs' },
    { label: 'Arogya Seva', href: '#programs' },
    { label: 'Shakti Mahila', href: '#programs' },
    { label: 'Harit Bhumi', href: '#programs' },
    { label: 'Jeevika', href: '#programs' },
  ],
  'Legal': [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Use', href: '#' },
    { label: 'Annual Reports', href: '#' },
    { label: 'Financials', href: '#' },
  ],
};

const socials = [
  { icon: SiFacebook, href: '#', label: 'Facebook' },
  { icon: SiInstagram, href: '#', label: 'Instagram' },
  { icon: SiX, href: '#', label: 'X (Twitter)' },
  { icon: SiYoutube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleNavClick = (href: string) => {
    if (href === '#') return;
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const appId = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'archak-seva'
  );

  return (
    <footer className="bg-warm-brown text-cream">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="/assets/generated/logo.dim_300x120.png"
                alt="Archak Seva"
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-cream/65 text-sm leading-relaxed mb-5 font-sans max-w-xs">
              Serving communities with compassion, transparency, and unwavering commitment since 2010.
              Together, we build a more just and equitable India.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full bg-cream/10 hover:bg-saffron/30 flex items-center justify-center transition-colors"
                  >
                    <Icon className="w-4 h-4 text-cream/80" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-serif text-base font-bold text-cream mb-4">{title}</h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                      className="text-cream/60 hover:text-saffron text-sm transition-colors font-sans"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-cream/50 text-xs font-sans text-center sm:text-left">
            © {new Date().getFullYear()} Archak Seva. All rights reserved. Registered NGO under Societies Registration Act, 1860.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-cream/50 text-xs font-sans flex items-center gap-1">
              Built with{' '}
              <Heart className="w-3 h-3 text-saffron fill-saffron" />{' '}
              using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-saffron hover:text-saffron-light transition-colors"
              >
                caffeine.ai
              </a>
            </p>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-saffron/20 hover:bg-saffron/40 flex items-center justify-center transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 text-cream" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

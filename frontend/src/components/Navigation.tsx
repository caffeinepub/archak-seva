import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Impact', href: '#impact' },
  { label: 'Get Involved', href: '#get-involved' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-warm border-b border-saffron/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
            className="flex items-center group"
          >
            <img
              src="/assets/generated/logo.dim_300x120.png"
              alt="Archak Seva Logo"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="px-4 py-2 text-sm font-medium text-warm-brown hover:text-saffron transition-colors rounded-md hover:bg-saffron/10"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#get-involved"
              onClick={(e) => { e.preventDefault(); handleNavClick('#get-involved'); }}
              className="ml-3 px-5 py-2 bg-saffron text-cream text-sm font-semibold rounded-full hover:bg-saffron-deep transition-colors shadow-warm"
            >
              Donate Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-warm-brown hover:text-saffron hover:bg-saffron/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream/98 backdrop-blur-md border-t border-saffron/20 shadow-warm-lg">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="px-4 py-3 text-base font-medium text-warm-brown hover:text-saffron hover:bg-saffron/10 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#get-involved"
              onClick={(e) => { e.preventDefault(); handleNavClick('#get-involved'); }}
              className="mt-2 px-5 py-3 bg-saffron text-cream text-base font-semibold rounded-full text-center hover:bg-saffron-deep transition-colors"
            >
              Donate Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

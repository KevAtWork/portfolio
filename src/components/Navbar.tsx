import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  const navItems: NavItem[] = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['about', 'services', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(`#${sectionId}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#0C0C0C]/85 backdrop-blur-xl border-b border-[#D7E2EA]/10 shadow-[0_10px_30px_rgba(0,0,0,0.6)]'
          : 'py-5 sm:py-7 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 flex items-center justify-between">
        {/* Left: Brand Identity & Freelance Pill */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="group flex items-center gap-2 text-xl sm:text-2xl font-black uppercase tracking-tight text-[#D7E2EA] hover:text-white transition-colors"
          >
            <span className="hero-heading tracking-tighter">KEV</span>
            <span className="text-purple-400 font-normal text-xs px-2 py-0.5 rounded-full border border-purple-500/30 bg-purple-500/10 hidden sm:inline-block">
              DEV
            </span>
          </a>

          {/* Dynamic Freelance Status Indicator */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-medium tracking-wide transition-all hover:bg-emerald-500/20 hover:border-emerald-400/50"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for Freelance</span>
          </a>
        </div>

        {/* Center: Desktop Navigation Links with Scroll Spy */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-2 px-4 py-1.5 rounded-full bg-[#141414]/60 backdrop-blur-md border border-[#D7E2EA]/10">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`relative px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-white/10 shadow-sm'
                    : 'text-[#D7E2EA]/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-gradient-to-r from-purple-400 to-pink-500 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Quick CTA & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-[0_4px_14px_rgba(147,51,234,0.35)] transition-all hover:scale-[1.03] active:scale-[0.98]"
          >
            <span>Hire Me</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-xl text-[#D7E2EA] hover:text-white bg-[#1a1a1a] border border-[#D7E2EA]/15 focus:outline-none cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden w-full bg-[#0E0E0E]/95 backdrop-blur-2xl border-b border-[#D7E2EA]/15 px-6 py-6">
          <div className="flex flex-col gap-3">
            {/* Mobile Freelance Status */}
            <div className="flex items-center gap-2 pb-3 mb-2 border-b border-[#D7E2EA]/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs text-emerald-400 font-medium">Available for Freelancing</span>
            </div>

            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-lg font-medium uppercase tracking-wider text-[#D7E2EA] hover:text-purple-400 py-2 transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                <Sparkles className="w-3.5 h-3.5 opacity-40" />
              </a>
            ))}

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="mt-3 w-full text-center py-3 rounded-xl font-bold uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-md"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

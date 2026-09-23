import React, { useState, useEffect } from 'react';
import { FadeIn } from './FadeIn';
import { ContactButton } from './ContactButton';
import {
  Mail,
  Instagram,
  Twitter,
  Linkedin,
  Github,
  Clock,
  MapPin,
  ArrowUp,
  Check,
  Copy,
  Sparkles,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const emailAddress = 'kev.darshan.dev@gmail.com';

  // Live Rajkot, Gujarat, India (IST) clock
  useEffect(() => {
    const updateRajkotTime = () => {
      try {
        const options: Intl.DateTimeFormatOptions = {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        };
        const formatter = new Intl.DateTimeFormat('en-IN', options);
        setCurrentTime(formatter.format(new Date()));
      } catch {
        setCurrentTime(new Date().toLocaleTimeString());
      }
    };

    updateRajkotTime();
    const timer = setInterval(updateRajkotTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      className="w-full bg-[#0A0A0A] px-5 sm:px-8 md:px-12 pt-20 sm:pt-28 pb-14 border-t border-[#D7E2EA]/10 flex flex-col items-center relative z-20 overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center relative z-10">
        {/* Status Badge */}
        <FadeIn delay={0.05} y={20}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for Freelance & Collaborations</span>
          </div>
        </FadeIn>

        {/* Heading */}
        <FadeIn delay={0.1} y={30}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight mb-6 select-none"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
          >
            Let&apos;s Connect
          </h2>
        </FadeIn>

        {/* Subtitle */}
        <FadeIn delay={0.2} y={20}>
          <p className="text-[#D7E2EA]/80 font-light text-base sm:text-xl max-w-xl mb-8 sm:mb-10 leading-relaxed">
            Have a project in mind, need a full-stack web developer, or looking for a freelancer?
            Let&apos;s build something exceptional together.
          </p>
        </FadeIn>

        {/* Action Buttons: Contact Me & Interactive Copy Email */}
        <FadeIn delay={0.3} y={20} className="flex flex-col sm:flex-row items-center gap-4">
          <ContactButton href={`mailto:${emailAddress}`} />

          {/* Interactive Copy Email Pill */}
          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-6 py-3 sm:py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-[#D7E2EA]/20 text-[#D7E2EA] font-medium text-xs sm:text-sm uppercase tracking-wider transition-all hover:scale-[1.03] active:scale-[0.98] cursor-pointer relative"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">Email Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-purple-400" />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </FadeIn>

        {/* Dynamic Live Clock & College Status Bar */}
        <FadeIn delay={0.35} y={20} className="w-full mt-14 sm:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
            {/* Live Rajkot Clock */}
            <div className="p-4 rounded-2xl bg-[#141414]/70 border border-[#D7E2EA]/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#D7E2EA]/50 block">
                    Local Time (IST)
                  </span>
                  <span className="text-sm font-bold text-white tracking-wide font-mono">
                    {currentTime || 'Loading...'}
                  </span>
                </div>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 font-semibold uppercase">
                Rajkot, IN
              </span>
            </div>

            {/* Academic Info */}
            <div className="p-4 rounded-2xl bg-[#141414]/70 border border-[#D7E2EA]/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#D7E2EA]/50 block">
                    Current Education
                  </span>
                  <span className="text-sm font-bold text-white tracking-wide">
                    5th Sem • Darshan Univ
                  </span>
                </div>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-semibold uppercase">
                Gujarat
              </span>
            </div>
          </div>
        </FadeIn>

        {/* Social Links */}
        <FadeIn delay={0.4} y={20} className="mt-10 sm:mt-12 flex items-center gap-4 text-[#D7E2EA]/70">
          <a
            href={`mailto:${emailAddress}`}
            aria-label="Email Kev"
            className="p-3 rounded-full border border-[#D7E2EA]/20 hover:border-purple-400 hover:text-white hover:bg-purple-500/10 transition-all hover:scale-110"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="p-3 rounded-full border border-[#D7E2EA]/20 hover:border-purple-400 hover:text-white hover:bg-purple-500/10 transition-all hover:scale-110"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="p-3 rounded-full border border-[#D7E2EA]/20 hover:border-purple-400 hover:text-white hover:bg-purple-500/10 transition-all hover:scale-110"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter / X"
            className="p-3 rounded-full border border-[#D7E2EA]/20 hover:border-purple-400 hover:text-white hover:bg-purple-500/10 transition-all hover:scale-110"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="p-3 rounded-full border border-[#D7E2EA]/20 hover:border-purple-400 hover:text-white hover:bg-purple-500/10 transition-all hover:scale-110"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </FadeIn>

        {/* Bottom Bar: Back to Top & Copyright */}
        <div className="w-full mt-14 pt-8 border-t border-[#D7E2EA]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm font-light text-[#D7E2EA]/50 tracking-wider">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>
              © {new Date().getFullYear()} Kev. Built with React & Tailwind. Darshan University, Rajkot.
            </span>
          </div>

          {/* Smooth Back to Top Button */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-[#D7E2EA]/70 hover:text-white transition-all hover:scale-105 cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

import React from 'react';
import { Navbar } from './Navbar';
import { ContactButton } from './ContactButton';
import { Magnet } from './Magnet';
import { FadeIn } from './FadeIn';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] pt-20 sm:pt-24">
      {/* Top Navbar */}
      <Navbar />

      {/* Massive Hero Heading */}
      <div className="w-full overflow-hidden flex justify-center items-center z-0 my-auto sm:my-0">
        <FadeIn delay={0.15} y={40} duration={0.8} className="w-full text-center">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-2 sm:mt-4 md:-mt-5 select-none">
            Hi, i&apos;m kev
          </h1>
        </FadeIn>
      </div>

      {/* Absolutely Centered Hero Portrait with Magnet Hover Effect */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto">
        <FadeIn delay={0.6} y={30} duration={0.9} className="w-full h-full">
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-full h-full flex justify-center items-end"
          >
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
              alt="Kev - Full-Stack Developer portrait"
              className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              loading="eager"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="w-full flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 z-20">
        <FadeIn delay={0.35} y={20} duration={0.7}>
          <div className="flex flex-col gap-1.5 max-w-[200px] sm:max-w-[280px] md:max-w-[340px]">
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-purple-400">
              5th Sem • Darshan University, Rajkot
            </span>
            <p
              className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug"
              style={{ fontSize: 'clamp(0.75rem, 1.3vw, 1.35rem)' }}
            >
              Full-Stack Developer crafting high-impact web apps, modern clones & available for freelance.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.5} y={20} duration={0.7}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
};

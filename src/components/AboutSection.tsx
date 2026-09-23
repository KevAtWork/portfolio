import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';
import { GraduationCap, Briefcase, Rocket, Code2, MapPin } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const aboutBio =
    "I'm Kev, a passionate Full-Stack Developer currently studying in my 5th semester at Darshan University, Rajkot, Gujarat, India. Driven by solving real-world challenges, I build scalable web apps ranging from healthcare ecosystems like Lifecare and e-commerce platforms like Flipcart, to mobility solutions like Kevcars. I'm actively seeking freelance projects to build impactful products. Let's build something incredible together!";

  const highlights = [
    {
      icon: GraduationCap,
      label: 'Academics',
      value: '5th Semester Student',
      sub: 'Darshan University, Rajkot',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Gujarat, India',
      sub: 'Available for Remote Freelance',
    },
    {
      icon: Rocket,
      label: 'Featured Projects',
      value: 'Lifecare, Flipcart, Kevcars',
      sub: '& many more creative solutions',
    },
    {
      icon: Code2,
      label: 'Specialization',
      value: 'Full-Stack & Modern Web',
      sub: 'React, TypeScript, Node.js, UI/UX',
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-24 sm:py-32 overflow-hidden select-none"
    >
      {/* 4 Decorative 3D images in corners */}
      {/* Top-left: Moon icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0 pointer-events-none opacity-60 sm:opacity-90">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="Decorative 3D moon"
            loading="lazy"
            className="w-[100px] sm:w-[150px] md:w-[200px] h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]"
          />
        </FadeIn>
      </div>

      {/* Bottom-left: 3D object */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0 pointer-events-none opacity-60 sm:opacity-90">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="Decorative 3D object"
            loading="lazy"
            className="w-[90px] sm:w-[130px] md:w-[170px] h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]"
          />
        </FadeIn>
      </div>

      {/* Top-right: Lego icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0 pointer-events-none opacity-60 sm:opacity-90">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="Decorative 3D lego"
            loading="lazy"
            className="w-[100px] sm:w-[150px] md:w-[200px] h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]"
          />
        </FadeIn>
      </div>

      {/* Bottom-right: 3D group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0 pointer-events-none opacity-60 sm:opacity-90">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="Decorative 3D cluster"
            loading="lazy"
            className="w-[110px] sm:w-[150px] md:w-[200px] h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]"
          />
        </FadeIn>
      </div>

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center max-w-5xl mx-auto w-full">
        {/* Sub-badge */}
        <FadeIn delay={0} y={20} duration={0.6}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Open for Freelance Work</span>
          </div>
        </FadeIn>

        {/* Heading */}
        <FadeIn delay={0.1} y={40} duration={0.8}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Spacing and Animated Paragraph */}
        <div className="mt-8 sm:mt-12 md:mt-14 w-full flex justify-center px-4">
          <AnimatedText
            text={aboutBio}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[680px] text-base sm:text-lg md:text-xl"
          />
        </div>

        {/* Highlight Cards Grid */}
        <FadeIn delay={0.25} y={30} duration={0.8} className="w-full mt-12 sm:mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl mx-auto">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#141414]/70 border border-[#D7E2EA]/10 hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-[#D7E2EA]/50">
                      {item.label}
                    </span>
                    <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white tracking-wide">
                      {item.value}
                    </p>
                    <p className="text-xs text-[#D7E2EA]/60 font-light mt-0.5">
                      {item.sub}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>

        {/* Spacing and Contact Button */}
        <div className="mt-12 sm:mt-16">
          <FadeIn delay={0.35} y={20} duration={0.7}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { FadeIn } from './FadeIn';

interface ServiceItem {
  number: string;
  name: string;
  description: string;
}

const SERVICES: ServiceItem[] = [
  {
    number: '01',
    name: 'Full-Stack Web Development',
    description:
      'Architecting and building responsive, high-performance web applications from database schemas to interactive client interfaces using modern frameworks.',
  },
  {
    number: '02',
    name: 'E-Commerce & Platform Clones',
    description:
      'Developing feature-complete e-commerce solutions (like Flipkart master clones), real-time cart systems, checkout flows, and search algorithms.',
  },
  {
    number: '03',
    name: 'Smart Systems & Mobility Platforms',
    description:
      'Engineering practical solutions for everyday challenges, such as medical portals (Lifecare) and smart carpooling ecosystems (Kevcars).',
  },
  {
    number: '04',
    name: 'Interactive UI/UX & Motion',
    description:
      'Crafting memorable, tactile digital experiences with fluid transitions, dynamic dark modes, and micro-interactions that captivate users.',
  },
  {
    number: '05',
    name: 'Freelance & MVP Acceleration',
    description:
      'Partnering with founders, businesses, and creators to turn ambitious product concepts into production-ready web apps on fast timelines.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="relative w-full bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 select-none z-0"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Heading */}
        <FadeIn delay={0} y={40} duration={0.8}>
          <h2
            className="text-[#0C0C0C] font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Services
          </h2>
        </FadeIn>

        {/* Vertical List of Services */}
        <div className="w-full flex flex-col border-t border-[#0C0C0C]/15">
          {SERVICES.map((service, index) => (
            <FadeIn
              key={service.number}
              delay={index * 0.1}
              y={30}
              duration={0.7}
              className="w-full"
            >
              <div className="w-full py-8 sm:py-10 md:py-12 border-b border-[#0C0C0C]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-10 hover:bg-neutral-50/50 transition-colors px-2 sm:px-4 rounded-xl">
                {/* Huge Number */}
                <div
                  className="font-black text-[#0C0C0C] leading-none shrink-0"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {service.number}
                </div>

                {/* Name + Description Stacked */}
                <div className="flex flex-col flex-1 max-w-2xl">
                  <h3
                    className="font-medium uppercase text-[#0C0C0C] mb-2 sm:mb-3 tracking-wide"
                    style={{ fontSize: 'clamp(1.1rem, 2.2vw, 2.1rem)' }}
                  >
                    {service.name}
                  </h3>
                  <p
                    className="font-light leading-relaxed text-[#0C0C0C] opacity-75"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

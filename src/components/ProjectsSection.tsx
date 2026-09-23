import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { LiveProjectButton } from './LiveProjectButton';
import { Github, ExternalLink, Sparkles } from 'lucide-react';

interface ProjectData {
  number: string;
  name: string;
  tagline: string;
  category: string;
  description: string;
  tags: string[];
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
  liveUrl?: string;
  githubUrl?: string;
}

const PROJECTS: ProjectData[] = [
  {
    number: '01',
    name: 'Lifecare',
    tagline: 'A Medical Revolution',
    category: 'Healthcare Platform',
    description:
      'A next-generation healthcare management web platform connecting patients with trusted doctors, appointment scheduling, health records, and emergency assistance.',
    tags: ['React', 'Node.js', 'Express', 'Healthcare UI', 'MongoDB'],
    col1Image1:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    col1Image2:
      'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=800&q=80',
    col2Image:
      'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1200&q=80',
    liveUrl: '#contact',
    githubUrl: 'https://github.com',
  },
  {
    number: '02',
    name: 'Flipcart',
    tagline: 'A Master Clone',
    category: 'E-Commerce Ecosystem',
    description:
      'A feature-rich Flipkart master clone engineered with dynamic product catalogs, faceted search filtering, live cart management, and seamless checkout experience.',
    tags: ['React', 'Tailwind CSS', 'Redux', 'E-Commerce', 'REST API'],
    col1Image1:
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80',
    col1Image2:
      'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80',
    col2Image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    liveUrl: '#contact',
    githubUrl: 'https://github.com',
  },
  {
    number: '03',
    name: 'Kevcars',
    tagline: 'A Better Carpooling Experience',
    category: 'Smart Mobility & Web App',
    description:
      'A smart ride-sharing and carpooling web application designed to connect daily commuters, split travel costs, optimize routes, and reduce urban traffic emissions.',
    tags: ['React', 'Maps Integration', 'Node.js', 'Route Matching', 'Carpooling'],
    col1Image1:
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    col1Image2:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    col2Image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    liveUrl: '#contact',
    githubUrl: 'https://github.com',
  },
];

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  totalCards: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, totalCards }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[90vh] flex items-start justify-center relative"
    >
      <motion.div
        style={{
          scale,
          top: `calc(clamp(5.5rem, 7.5vw, 7.5rem) + ${index * 28}px)`,
          transformOrigin: 'top center',
        }}
        className="sticky w-full max-w-6xl rounded-[36px] sm:rounded-[48px] md:rounded-[56px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-5 sm:p-7 md:p-9 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)]"
      >
        {/* Top Row */}
        <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-4 sm:pb-6 border-b border-[#D7E2EA]/20">
          <div className="flex items-start sm:items-baseline gap-3 sm:gap-6 flex-wrap">
            <span
              className="font-black text-[#D7E2EA] leading-none select-none"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-semibold uppercase tracking-widest text-purple-400">
                  {project.category}
                </span>
                <span className="text-xs text-[#D7E2EA]/40">•</span>
                <span className="text-xs font-light italic text-[#D7E2EA]/80">
                  {project.tagline}
                </span>
              </div>
              <h3
                className="font-medium uppercase text-[#D7E2EA] tracking-wide mt-0.5"
                style={{ fontSize: 'clamp(1.2rem, 2.2vw, 2rem)' }}
              >
                {project.name}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3 self-stretch sm:self-auto justify-between sm:justify-end mt-2 lg:mt-0">
            {project.tags && (
              <div className="hidden xl:flex items-center gap-1.5 mr-2">
                {project.tags.slice(0, 3).map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-white/5 border border-white/10 text-[#D7E2EA]/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <LiveProjectButton href={project.liveUrl} />
          </div>
        </div>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-[#D7E2EA]/70 mt-3 font-light max-w-3xl leading-relaxed">
          {project.description}
        </p>

        {/* Bottom Row: Two-Column Image Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5 pt-4 sm:pt-5">
          {/* Left Column: 42% Width (5 cols) with 2 stacked images */}
          <div className="md:col-span-5 flex flex-col gap-4 sm:gap-5">
            <div
              className="w-full overflow-hidden rounded-[28px] sm:rounded-[36px] bg-[#161616] border border-white/5 relative group"
              style={{ height: 'clamp(130px, 15vw, 210px)' }}
            >
              <img
                src={project.col1Image1}
                alt={`${project.name} detail 1`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-xs text-white font-medium">Interactive Features</span>
              </div>
            </div>
            <div
              className="w-full overflow-hidden rounded-[28px] sm:rounded-[36px] bg-[#161616] border border-white/5 relative group"
              style={{ height: 'clamp(150px, 20vw, 300px)' }}
            >
              <img
                src={project.col1Image2}
                alt={`${project.name} detail 2`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-xs text-white font-medium">Architecture & Logic</span>
              </div>
            </div>
          </div>

          {/* Right Column: 58% Width (7 cols) with 1 tall image */}
          <div className="md:col-span-7 h-[280px] sm:h-[360px] md:h-auto min-h-[280px] overflow-hidden rounded-[28px] sm:rounded-[36px] bg-[#161616] border border-white/5 relative group">
            <img
              src={project.col2Image}
              alt={`${project.name} showcase`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-6">
              <span className="text-sm text-white font-semibold tracking-wide">Live Demo & Workflow</span>
              <ExternalLink className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative z-10 w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 pt-16 sm:pt-20 md:pt-28 pb-32"
    >
      <div className="max-w-6xl mx-auto w-full mb-12 sm:mb-16 md:mb-20 text-center">
        {/* Sub-badge */}
        <FadeIn delay={0} y={20} duration={0.6}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#D7E2EA]/80 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Featured Case Studies</span>
          </div>
        </FadeIn>

        {/* Heading: "Projects" with .hero-heading gradient */}
        <FadeIn delay={0.1} y={40} duration={0.8}>
          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight select-none"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Projects
          </h2>
        </FadeIn>

        <FadeIn delay={0.2} y={20} duration={0.7}>
          <p className="mt-4 text-[#D7E2EA]/70 text-sm sm:text-base max-w-xl mx-auto font-light">
            Real-world applications built by Kev — from healthcare innovation and e-commerce scale to smart mobility.
          </p>
        </FadeIn>
      </div>

      {/* Sticky Stacking Cards */}
      <div className="w-full max-w-6xl mx-auto relative pb-10">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
            totalCards={PROJECTS.length}
          />
        ))}
      </div>

      {/* "And Many More" Dynamic Showcase Card */}
      <div className="max-w-6xl mx-auto mt-6">
        <FadeIn delay={0.3} y={30} duration={0.8}>
          <div className="relative overflow-hidden rounded-[36px] border border-[#D7E2EA]/20 bg-gradient-to-b from-[#141414] to-[#0A0A0A] p-8 sm:p-12 text-center flex flex-col items-center justify-center">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[150px] bg-purple-600/15 blur-[90px] pointer-events-none rounded-full" />

            <span className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-2">
              Expanding Portfolio
            </span>
            <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white mb-4">
              ...And Many More Projects
            </h3>
            <p className="text-sm sm:text-base text-[#D7E2EA]/70 max-w-2xl font-light leading-relaxed mb-8">
              From developer tooling, full-stack microservices, and UI libraries to innovative client solutions during my 5th semester at Darshan University. Always exploring new technologies.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium text-xs sm:text-sm uppercase tracking-wider transition-all hover:scale-[1.03] active:scale-[0.98]"
              >
                <Github className="w-4 h-4" />
                <span>Explore GitHub Repos</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-medium text-xs sm:text-sm uppercase tracking-wider shadow-[0_4px_14px_rgba(147,51,234,0.4)] transition-all hover:scale-[1.03] active:scale-[0.98]"
              >
                <span>Request Custom Project</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

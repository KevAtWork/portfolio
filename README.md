<div align="center">

# ✨ Kev — Full-Stack Developer Portfolio

<p align="center">
  <strong>Crafting high-impact web apps, modern full-stack platforms & available for freelance.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-12.4-black?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
</p>

<p align="center">
  📍 Darshan University, Rajkot, Gujarat, India (5th Semester)
</p>

---

</div>

## 🚀 Overview

A modern, high-performance personal portfolio website built with **React 18**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Framer Motion**. Designed with an ultra-sleek dark aesthetic (`#0C0C0C`), interactive micro-animations, magnetic buttons, smooth reveal scroll effects, and live interactive widgets.

---

## ✨ Features & Highlights

- 🎨 **Sleek Aesthetic**: Minimalist dark theme with purple and cyan neon accents.
- ⚡ **Lightning Fast**: Powered by Vite and optimized assets for instant page loads.
- 🧲 **Interactive Physics**: Magnetic cursor attraction effects on hero portrait and buttons.
- 🌊 **Smooth Scroll Animations**: Fluid entrance transitions and staggered reveals via Framer Motion.
- 📜 **Continuous Marquee**: Infinite marquee showcasing key tech proficiencies.
- 🕒 **Live Local Time Widget**: Real-time IST clock (Asia/Kolkata) indicating current working availability.
- 📋 **One-Click Email Copying**: Seamless clipboard interaction with instant feedback.
- 📱 **Fully Responsive**: Flawless experience across mobile, tablet, and ultra-wide screens.
- 🤖 **GitHub Actions CI/CD**: Automatic build and zero-config deployment to GitHub Pages included.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **[React 18](https://react.dev/)** | Core UI component framework |
| **[TypeScript](https://www.typescriptlang.org/)** | Type safety and developer experience |
| **[Vite](https://vitejs.dev/)** | Next-generation frontend tooling and bundler |
| **[Tailwind CSS](https://tailwindcss.com/)** | Utility-first styling with custom palette |
| **[Framer Motion](https://www.framer.com/motion/)** | Production-ready motion and physics animations |
| **[Lucide React](https://lucide.dev/)** | Clean, modern iconography |

---

## 📂 Project Showcase

- **Lifecare — Healthcare Platform**: A next-generation healthcare platform connecting patients with doctors, appointment scheduling, health records, and emergency assistance.
- **Flipcart — E-Commerce Master Clone**: A feature-rich Flipkart clone engineered with dynamic product catalogs, faceted search filtering, cart state management, and seamless checkout experience.
- **Kevcars — Smart Mobility & Carpooling**: A streamlined web application for intercity ride-sharing and carpooling.

---

## 📁 Repository Structure

```text
Portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml        # Automated GitHub Pages CI/CD workflow
├── public/                   # Static assets & favicon
├── src/
│   ├── components/           # Modular React components
│   │   ├── AboutSection.tsx
│   │   ├── AnimatedText.tsx
│   │   ├── ContactButton.tsx
│   │   ├── FadeIn.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── LiveProjectButton.tsx
│   │   ├── Magnet.tsx
│   │   ├── MarqueeSection.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── ServicesSection.tsx
│   ├── App.tsx               # Main page layout
│   ├── index.css             # Tailwind base styles & custom animations
│   └── main.tsx              # React DOM entry point
├── .gitignore                # Git ignore rules
├── index.html                # HTML template with SEO tags & fonts
├── LICENSE                   # MIT License
├── package.json              # Project dependencies & scripts
├── postcss.config.js         # PostCSS configuration
├── tailwind.config.js        # Tailwind CSS theme configuration
├── tsconfig.json             # TypeScript configuration
└── vite.config.ts            # Vite bundler configuration
```

---

## 💻 Getting Started Locally

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- `npm` (comes with Node.js) or `pnpm` / `yarn`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/<your-username>/<your-repo-name>.git
   cd <your-repo-name>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build locally:**
   ```bash
   npm run preview
   ```

---

## 🌐 Deployment

### Option 1: GitHub Pages (Automatic with GitHub Actions)
1. Push this repository to GitHub on branch `main`.
2. Go to **Settings** > **Pages** in your GitHub repository.
3. Under **Source**, select **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will automatically build and deploy the site upon every push to `main`!

### Option 2: Vercel / Netlify
1. Import your GitHub repository into [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).
2. Framework Preset: **Vite**.
3. Build command: `npm run build`.
4. Output directory: `dist`.

---

## 📬 Contact & Connect

- **Email**: [kev.darshan.dev@gmail.com](mailto:kev.darshan.dev@gmail.com)
- **Institution**: Darshan University, Rajkot, Gujarat, India

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

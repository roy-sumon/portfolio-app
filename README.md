# Sumon Roy — Developer Portfolio

My personal developer portfolio website, built with **Next.js 15 (App Router)**, **React**, and **Tailwind CSS**. It showcases my recent full-stack web applications, real-time systems, and software engineering projects with live deployments and direct GitHub repository links.

[![Next.js](https://img.shields.io/badge/Next.js-15.1-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)](https://react.dev/)

---

## Overview

I designed and built this portfolio to provide a clean, fast, and interactive overview of my work, technical background, and engineering interests.

### Key Highlights
- **Interactive Project Showcase**: Categorized by Full-Stack, Frontend, and Desktop with live count indicators, browser window mockup frames, and direct links to live Vercel deployments.
- **Theme Support**: Dark and Light mode toggling with persistence in `localStorage`.
- **Responsive Layout**: Designed mobile-first, adapting smoothly from small phone screens to widescreen desktop displays.
- **Micro-Interactions**: Scroll-reveal entrance animations and card hover elevations.
- **Contact & Resume**: Quick access to my downloadable resume, direct email, and social profiles.

---

## Featured Projects

Here are the primary projects showcased in this portfolio:

| Project | Category | Tech Stack | Live Demo | Source Code |
|:---|:---|:---|:---:|:---:|
| **Crustora** | Frontend Web App | Next.js 16, TypeScript, Tailwind v4, Framer Motion, Web Audio API, Lenis | [Visit Demo](https://crustora.vercel.app) | [GitHub](https://github.com/roy-sumon/crustora.git) |
| **Pulse Chat** | Full-Stack Web App | Next.js 16, React 19, TypeScript, Prisma, MongoDB Atlas, Pusher | [Visit Demo](https://pulse-chatme.vercel.app/) | [GitHub](https://github.com/roy-sumon/chat-applications.git) |
| **E-Bazar** | Full-Stack Web App | Next.js 15, React 19, Tailwind CSS, Lucide React | [Visit Demo](https://e-bazar-bd.vercel.app/) | [GitHub](https://github.com/roy-sumon/e-bazar.git) |
| **Facebook Web App** | Full-Stack Web App | Next.js, React, Supabase, PostgreSQL, CSS3 | [Visit Demo](https://facebook-bd.vercel.app/) | [GitHub](https://github.com/roy-sumon/fb-clone-nextjs.git) |
| **GameHub** | Frontend Web App | HTML5 Canvas, JavaScript (ES6+), CSS3, LocalStorage | [Visit Demo](https://game-hubbd.vercel.app/) | [GitHub](https://github.com/roy-sumon/game-hub.git) |
| **Mess Meal Manager** | Full-Stack Web App | React 18, Vite 6, Tailwind CSS, jsPDF | [Visit Demo](https://mess-meal-manager-app.vercel.app) | [GitHub](https://github.com/roy-sumon/mess-meal-manager-app.git) |
| **Bazar List & Budget Tracker** | Frontend Web App | React 18, Vite 6, Tailwind CSS, LocalStorage, jsPDF | [Visit Demo](https://bazar-list-app.vercel.app) | [GitHub](https://github.com/roy-sumon/bazar-list-app.git) |
| **Hospital Management System** | Desktop Application | Java Swing, MySQL, OOP Architecture, AWT | — | [GitHub](https://github.com/roy-sumon/oop-1-javaSwing-hms.git) |

---

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) (`react-icons/fi`, `react-icons/si`)
- **Typography**: Geist Sans & Geist Mono (via `next/font`)
- **Deployment**: Vercel

---

## Project Structure

```text
portfolio/
├── app/
│   ├── about/          # About section
│   ├── contact/        # Contact section
│   ├── projects/       # Featured projects showcase & filter tabs
│   ├── services/       # Engineering services cards
│   ├── skills/         # Technical skill taxonomy & experience
│   ├── globals.css     # Global styles & theme tokens
│   ├── layout.js       # Root layout, font loader & theme script
│   └── page.js         # Single-page assembled portfolio view
├── components/
│   ├── Card.jsx        # Service item card
│   ├── Footer.jsx      # Footer with copyright and social links
│   ├── Hero.jsx        # Landing hero with intro and resume CTA
│   ├── Navbar.jsx      # Responsive navigation header
│   ├── ScrollReveal.jsx# Intersection-observer scroll animation wrapper
│   ├── ThemeToggle.jsx # Dark/Light mode switcher
│   └── ...
├── public/
│   ├── project-img/    # Screenshots of live deployed applications
│   ├── skill_icons/    # Technology logos
│   └── ...
└── package.json
```

---

## Getting Started Locally

### Prerequisites
- Node.js 18.18.0 or newer
- npm, yarn, or pnpm

### 1. Clone the repository
```bash
git clone https://github.com/roy-sumon/portfolio-app.git
cd portfolio-app
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production
```bash
npm run build
npm start
```

---

## Contact

- **Name**: Sumon Roy
- **Email**: [sumonroy.cs@gmail.com](mailto:sumonroy.cs@gmail.com)
- **LinkedIn**: [linkedin.com/in/sumon-roy-0723421b3](https://www.linkedin.com/in/sumon-roy-0723421b3/)
- **GitHub**: [@roy-sumon](https://github.com/roy-sumon)
- **Twitter / X**: [@SumonRo90435026](https://x.com/SumonRo90435026)

---

## License

This project is open-source and available under the [MIT License](LICENSE).

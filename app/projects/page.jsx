"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { FiGithub, FiExternalLink, FiCheck, FiStar, FiArrowUpRight, FiCode } from "react-icons/fi";

import ProjectHms from "@/public/project-img/hms.png";
import MessMealApp from "@/public/project-img/mess-meal-app.png";
import FacebookClone from "@/public/project-img/facebook-clone.png";
import EBazar from "@/public/project-img/e-bazar.png";
import Crustora from "@/public/project-img/crustora.png";
import GameHub from "@/public/project-img/game-hub.png";
import PulseChat from "@/public/project-img/pulse-chat.png";
import BazarList from "@/public/project-img/bazar-list.png";

const projectsData = [
  {
    id: 1,
    title: "Crustora — Artisan Sourdough Pizza Brand Experience",
    category: "Frontend Web Application",
    filterType: "frontend",
    featured: true,
    metrics: ["3D Parallax Tilt", "Native Web Audio API", "Lenis Smooth Scroll"],
    tags: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Framer Motion", "Web Audio API", "Lenis"],
    image: Crustora,
    github: "https://github.com/roy-sumon/crustora.git",
    demo: "https://crustora.vercel.app",
    description:
      "An award-caliber artisan pizza landing showcase built with Next.js 16 and Framer Motion. Engineered with real-time 3D spring-damped parallax, runtime procedural sound synthesis using the native Web Audio API, and smooth Lenis inertia scrolling.",
    features: [
      "Procedural sound synthesizer generating tactile pops, crunches, and checkout chords with zero audio file latency",
      "Interactive 3D exploded sourdough fermentation layers and sensory ingredient hotspot explorer",
      "Dynamic SVG flight-path courier tracking using native matrix coordinates (getScreenCTM)",
    ],
  },
  {
    id: 2,
    title: "Pulse Chat — Real-Time Collaborative Messaging Platform",
    category: "Full-Stack Web App",
    filterType: "full-stack",
    featured: true,
    metrics: ["Pusher WebSockets", "MongoDB Atlas Clustered", "NextAuth v5 + RBAC"],
    tags: ["Next.js 16", "React 19", "TypeScript", "Prisma ORM", "MongoDB Atlas", "Pusher", "Tailwind CSS v4"],
    image: PulseChat,
    github: "https://github.com/roy-sumon/chat-applications.git",
    demo: "https://pulse-chatme.vercel.app/",
    description:
      "An enterprise-grade, serverless real-time messaging application engineered with event-driven Pusher channels, Prisma ORM, and MongoDB Atlas. Features presence tracking, typing indicators, and encrypted credential sessions.",
    features: [
      "Decoupled real-time architecture optimized for serverless Vercel execution with signed WebSocket token auth",
      "Direct and group conversations with live online presence, typing status, and read receipt tracking",
      "Sliding-window API rate limiting, Zod schema validation, and optimistic client state synchronization",
    ],
  },
  {
    id: 3,
    title: "E-Bazar — Multi-Vendor E-Commerce Platform",
    category: "Full-Stack Web App",
    filterType: "full-stack",
    featured: true,
    metrics: ["Multi-Storefront Architecture", "Escrow Buyer Shield", "Next.js 15 & React 19"],
    tags: ["Next.js 15", "React 19", "Tailwind CSS", "E-Commerce", "Multi-Vendor", "Lucide React"],
    image: EBazar,
    github: "https://github.com/roy-sumon/e-bazar.git",
    demo: "https://e-bazar-bd.vercel.app/",
    description:
      "A high-performance multi-vendor e-commerce platform built with Next.js 15 App Router. Engineered with comprehensive vendor portals, catalog filtering, interactive cart drawers, and buyer escrow protection.",
    features: [
      "Multi-vendor ecosystem with dedicated seller onboarding, storefront management, and payout analytics",
      "Instant slide-out cart drawer, product quick-view modal, and persistent wishlist experience",
      "Real-time flash sales countdown, escrow buyer guarantee, and multi-filter product taxonomy",
    ],
  },
  {
    id: 4,
    title: "Facebook Web App — Full-Stack Social Platform",
    category: "Full-Stack Web App",
    filterType: "full-stack",
    featured: false,
    metrics: ["7 Animated Reactions", "Supabase Realtime", "Post & Story Media"],
    tags: ["Next.js (App Router)", "React", "Supabase", "PostgreSQL", "Real-Time", "CSS3"],
    image: FacebookClone,
    github: "https://github.com/roy-sumon/fb-clone-nextjs.git",
    demo: "https://facebook-bd.vercel.app/",
    description:
      "A full-featured Facebook social platform recreation powered by Next.js and Supabase PostgreSQL. Delivers dynamic real-time newsfeeds, authentic Facebook reactions, stories, user profile customization, and Messenger chat.",
    features: [
      "Live feed with post creation modal, feeling & activity selectors, and photo attachments",
      "7 animated Facebook reactions with live counters, comment drawers, and floating Messenger popups",
      "Full profile ecosystem with custom avatars, cover banners, and interactive Friends Hub directory",
    ],
  },
  {
    id: 5,
    title: "GameHub — High-Speed Indie Web Games Arcade",
    category: "Frontend Web Application",
    filterType: "frontend",
    featured: false,
    metrics: ["19 Pure HTML5 Games", "In-App Theater Cabin", "Canvas 60 FPS"],
    tags: ["HTML5 Canvas", "JavaScript (ES6+)", "CSS3", "Responsive UI", "Local Storage"],
    image: GameHub,
    github: "https://github.com/roy-sumon/game-hub.git",
    demo: "https://game-hubbd.vercel.app/",
    description:
      "A responsive indie web arcade portal sporting a sleek Steam / Epic Games design language. Houses 19 handcrafted HTML5 games across racing, tactical combat, sci-fi shooters, and logic puzzles with zero build latency.",
    features: [
      "In-App Theater Cabin mode providing immersive, high-framerate gameplay directly within the hub",
      "19 original playable games featuring custom canvas physics, particle systems, and sound effects",
      "Instant global search (Ctrl + K), genre filter chips, persistent favorites, and mobile touch gestures",
    ],
  },
  {
    id: 6,
    title: "Mess Meal Manager — Shared Living Expense & Meal Tracker",
    category: "Full-Stack Web App",
    filterType: "full-stack",
    featured: false,
    metrics: ["Automated Balancing", "PDF Ledger Generation", "Bilingual Support"],
    tags: ["React 18", "Vite 6", "Tailwind CSS", "jsPDF", "Responsive UI", "LocalStorage"],
    image: MessMealApp,
    github: "https://github.com/roy-sumon/mess-meal-manager-app.git",
    demo: "https://mess-meal-manager-app.vercel.app",
    description:
      "A specialized financial management application designed for bachelor messes, university dormitories, and shared flats to calculate daily meal costs, member deposits, and final balance settlements.",
    features: [
      "Automated real-time calculation of daily meal rates, individual balances, and balance due warnings",
      "One-click client-side generation and export of itemized monthly financial reports directly into PDF",
      "Bilingual English/Bengali UI with instant member search, status badges, and data reset protection",
    ],
  },
  {
    id: 7,
    title: "Bazar List & Budget Tracker v2.0",
    category: "Frontend Web Application",
    filterType: "frontend",
    featured: false,
    metrics: ["Smart Budget Warnings", "Bangla & English", "WhatsApp Sharing"],
    tags: ["React 18", "Vite 6", "Tailwind CSS", "LocalStorage", "jsPDF", "Bilingual"],
    image: BazarList,
    github: "https://github.com/roy-sumon/bazar-list-app.git",
    demo: "https://bazar-list-app.vercel.app",
    description:
      "A mobile-first grocery checklist and budget management web application crafted for everyday market shoppers, featuring localized Bengali typography, quick-add suggestions, and instant PDF receipt generation.",
    features: [
      "Live expense tracking with budget progress indicators and real-time over-budget alert thresholds",
      "Interactive shopping checklist with instant strikethrough, item counters, and category grouping",
      "One-click sharing via formatted WhatsApp message, clipboard copy, and printable PDF receipt export",
    ],
  },
  {
    id: 8,
    title: "Hospital Management System",
    category: "Desktop Application",
    filterType: "desktop",
    featured: false,
    metrics: ["Java Swing GUI", "MySQL Relational DB", "Billing & Invoicing"],
    tags: ["Java Swing", "MySQL", "OOP Architecture", "Database Design", "AWT"],
    image: ProjectHms,
    github: "https://github.com/roy-sumon/oop-1-javaSwing-hms.git",
    demo: null,
    description:
      "A robust healthcare desktop application designed to streamline patient registration, medical appointment scheduling, physician assignment, and financial invoicing with relational database integrity.",
    features: [
      "Complete patient clinical records lifecycle management with search, update, and discharge handling",
      "Automated financial billing subsystem generating itemized payment receipts and invoices",
      "Secure relational MySQL integration adhering strictly to Object-Oriented design patterns",
    ],
  },
];

const Projectpage = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Full-Stack", "Frontend", "Desktop"];

  const filterCounts = {
    All: projectsData.length,
    "Full-Stack": projectsData.filter((p) => p.filterType === "full-stack").length,
    Frontend: projectsData.filter((p) => p.filterType === "frontend").length,
    Desktop: projectsData.filter((p) => p.filterType === "desktop").length,
  };

  const filteredProjects =
    filter === "All"
      ? projectsData
      : filter === "Full-Stack"
      ? projectsData.filter((p) => p.filterType === "full-stack")
      : filter === "Frontend"
      ? projectsData.filter((p) => p.filterType === "frontend")
      : projectsData.filter((p) => p.filterType === "desktop");

  return (
    <section id="projects" className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
              <FiCode className="w-3.5 h-3.5" />
              <span>Engineering Portfolio</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-rose-500 to-orange-500">Projects</span> & Systems
            </h2>
            
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
              A curated showcase of production web applications, real-time distributed platforms, and interactive digital products built with modern engineering practices.
            </p>

            {/* Quick Metrics Bar */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-6 pt-4 border-t border-slate-200/60 dark:border-white/[0.06] text-xs sm:text-sm text-slate-600 dark:text-gray-400 font-medium">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <strong className="text-slate-900 dark:text-white">8</strong> Total Projects
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <strong className="text-slate-900 dark:text-white">7</strong> Live Deployments
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <strong className="text-slate-900 dark:text-white">100%</strong> Open Source
              </span>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap justify-center items-center gap-2.5 mt-8">
              {categories.map((cat) => {
                const isActive = filter === cat;
                const count = filterCounts[cat];

                return (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-primary text-white shadow-lg shadow-primary/30 scale-105"
                        : "bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200 shadow-sm dark:bg-white/[0.04] dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/[0.08] dark:border-white/[0.08]"
                    }`}
                  >
                    <span>{cat === "All" ? "All Works" : cat}</span>
                    <span
                      className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-full ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-slate-100 text-slate-600 dark:bg-white/10 dark:text-gray-400"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Project Cards List */}
        <div className="space-y-12 md:space-y-16">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <ScrollReveal key={project.id} delay={index * 60} direction="up">
                <div className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 dark:border-white/[0.08] hover:border-primary/40 dark:hover:border-primary/40 transition-all duration-300 shadow-xl group">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    
                    {/* Media / Screenshot Showcase */}
                    <div
                      className={`lg:col-span-6 ${
                        isEven ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div className="relative rounded-2xl overflow-hidden border border-slate-300/80 dark:border-white/10 bg-slate-900 shadow-xl group-hover:border-primary/40 group-hover:shadow-glow/20 transition-all duration-300">
                        {/* Browser Window Chrome */}
                        <div className="flex items-center justify-between px-3.5 py-2.5 bg-slate-100 dark:bg-[#161926] border-b border-slate-200 dark:border-white/10 select-none">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                          </div>
                          
                          <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-white dark:bg-black/40 border border-slate-200 dark:border-white/5 text-[11px] font-mono text-slate-600 dark:text-gray-400 max-w-[200px] sm:max-w-xs truncate">
                            {project.demo ? (
                              <>
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                                <span className="truncate">{project.demo.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
                              </>
                            ) : (
                              <>
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                                <span>desktop://system-app</span>
                              </>
                            )}
                          </div>

                          <div className="w-8 flex justify-end">
                            {project.demo && (
                              <FiArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-primary transition-colors" />
                            )}
                          </div>
                        </div>

                        {/* Interactive Image Container */}
                        {project.demo ? (
                          <Link
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block aspect-[16/10] relative overflow-hidden group/img cursor-pointer"
                            aria-label={`Open live preview of ${project.title}`}
                          >
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              sizes="(max-width: 768px) 100vw, 50vw"
                              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-5">
                              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-primary text-white shadow-lg shadow-primary/30">
                                <FiExternalLink className="w-3.5 h-3.5" />
                                Launch Live Website
                              </span>
                              <span className="text-[11px] font-mono text-white/80 bg-black/50 px-2 py-1 rounded backdrop-blur-sm">
                                vercel.app
                              </span>
                            </div>
                          </Link>
                        ) : (
                          <div className="aspect-[16/10] relative overflow-hidden">
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              sizes="(max-width: 768px) 100vw, 50vw"
                              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 dark:from-bgDark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Content Details */}
                    <div
                      className={`lg:col-span-6 flex flex-col justify-between space-y-4 ${
                        isEven ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <div>
                        {/* Badges Bar */}
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20">
                              {project.category}
                            </span>
                            {project.featured && (
                              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-500 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
                                <FiStar className="w-3 h-3 fill-amber-500" />
                                Featured Flagship
                              </span>
                            )}
                          </div>

                          {/* Live Status indicator */}
                          {project.demo ? (
                            <div className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                              <span>Live Production</span>
                            </div>
                          ) : (
                            <div className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-500/10 px-2.5 py-1 rounded-full border border-slate-500/20">
                              <span className="w-2 h-2 rounded-full bg-slate-400 shrink-0" />
                              <span>Desktop Software</span>
                            </div>
                          )}
                        </div>

                        {/* Project Title */}
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white group-hover:text-primary transition-colors duration-200">
                          {project.title}
                        </h3>

                        {/* Metric Highlights */}
                        <div className="flex flex-wrap gap-2 pt-2 pb-1">
                          {project.metrics.map((metric) => (
                            <span
                              key={metric}
                              className="text-[11px] font-semibold tracking-wide px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 dark:bg-white/[0.06] dark:text-gray-300 border border-slate-200 dark:border-white/10"
                            >
                              ⚡ {metric}
                            </span>
                          ))}
                        </div>

                        {/* Description */}
                        <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-gray-300 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Architectural Features */}
                        <div className="mt-4 space-y-2">
                          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-gray-500">
                            Key Architectural Highlights
                          </div>
                          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-gray-300">
                            {project.features.map((feat, i) => (
                              <li key={i} className="flex items-start gap-2.5">
                                <span className="w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                                  <FiCheck className="w-2.5 h-2.5 stroke-[3]" />
                                </span>
                                <span className="leading-snug">{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Tech Tags & CTA Actions */}
                      <div className="pt-5 border-t border-slate-200 dark:border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200 dark:bg-white/[0.04] dark:text-gray-300 dark:border-white/[0.08]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-2.5 shrink-0">
                          {project.demo && (
                            <Link
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-primary text-white hover:bg-primaryHover shadow-md shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all"
                            >
                              <FiExternalLink className="w-3.5 h-3.5" />
                              Live Demo
                            </Link>
                          )}
                          <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-white/[0.06] text-slate-700 dark:text-gray-300 hover:text-white hover:bg-slate-900 dark:hover:bg-white/20 border border-slate-200 dark:border-white/10 transition-all"
                          >
                            <FiGithub className="w-3.5 h-3.5" />
                            Source Code
                          </Link>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projectpage;

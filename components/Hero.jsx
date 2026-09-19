"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Sumon from "@/public/sumon_portfolio.png";
import SocialMediaLinks from "./SocialMediaLinks";
import ScrollReveal from "./ScrollReveal";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import { SiReact, SiNodedotjs } from "react-icons/si";

const Hero = () => {
  return (
    <section id="hero" className="relative pt-6 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      {/* Ambient background glow orbs */}
      <div className="glow-spot w-72 h-72 md:w-96 md:h-96 bg-primary top-0 left-1/4 -translate-x-1/2 -z-10" />
      <div className="glow-spot w-60 h-60 bg-blue-600/20 bottom-10 right-10 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Intro & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <ScrollReveal direction="down" delay={50}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                Available for Full-time Roles & Projects
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={150}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-rose-500 to-orange-500">
                  Sumon Roy
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={250}>
              <p className="mt-3 text-xl sm:text-2xl font-semibold text-slate-700 dark:text-gray-200">
                Software Engineer & Full-Stack Developer
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={350}>
              <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                Computer Science & Engineering graduate from Daffodil International University.
                I specialize in crafting high-performance web applications, scalable backends, and
                intuitive user experiences using{" "}
                <span className="text-slate-900 dark:text-white font-medium">
                  React, Next.js, Node.js, Java
                </span>
                , and modern databases.
              </p>
            </ScrollReveal>

            {/* CTAs */}
            <ScrollReveal direction="up" delay={450}>
              <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
                <Link
                  href="https://drive.google.com/file/d/1-2EofL3vwamC8KdgnMiIGL14QR7YGDrO/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-primary hover:bg-primaryHover text-white font-medium text-sm flex items-center gap-2 transition-all duration-200 shadow-lg shadow-primary/25 hover:shadow-glow hover:scale-[1.02] active:scale-[0.98]"
                >
                  <FiDownload className="w-4 h-4" />
                  Download Resume
                </Link>

                <Link
                  href="/#projects"
                  className="px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 dark:bg-white/[0.05] dark:hover:bg-white/[0.1] dark:text-gray-200 dark:hover:text-white dark:border-white/[0.1] font-medium text-sm flex items-center gap-2 transition-all duration-200 shadow-sm hover:scale-[1.02] active:scale-[0.98]"
                >
                  View Projects
                  <FiArrowRight className="w-4 h-4 text-primary" />
                </Link>

                <Link
                  href="/#contact"
                  className="px-5 py-3 rounded-xl text-slate-600 hover:text-slate-900 dark:text-gray-300 dark:hover:text-white text-sm font-medium transition-colors"
                >
                  Contact Me
                </Link>
              </div>
            </ScrollReveal>

            {/* Social Links */}
            <ScrollReveal direction="up" delay={550} className="w-full">
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/[0.08] w-full flex items-center gap-4">
                <span className="text-xs uppercase tracking-wider text-slate-500 dark:text-gray-300 font-medium">
                  Connect with me:
                </span>
                <SocialMediaLinks />
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Visual Avatar Card */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <ScrollReveal direction="left" delay={200} className="w-full max-w-sm sm:max-w-md">
              <div className="relative w-full">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-primary/5 to-transparent rounded-3xl filter blur-xl -z-10 transform scale-95" />

                <div className="relative rounded-3xl p-2 bg-gradient-to-b from-slate-200 via-white to-transparent dark:from-white/15 dark:via-white/5 dark:to-transparent border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-2xl backdrop-blur-sm overflow-hidden">
                  <div className="relative aspect-square sm:aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 dark:bg-cardDark flex items-center justify-center">
                    <Image
                      src={Sumon}
                      alt="Sumon Roy - Software Engineer"
                      priority
                      className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 dark:from-bgDark/80 via-transparent to-transparent opacity-60" />
                  </div>
                </div>

                {/* Floating Badge 1: React & Next.js */}
                <div className="absolute -bottom-3 left-2 sm:-bottom-4 sm:-left-6 bg-white/95 dark:bg-cardDark/90 backdrop-blur-md border border-slate-200 dark:border-white/10 p-3 rounded-2xl shadow-xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#61DAFB]/10 border border-[#61DAFB]/30 flex items-center justify-center text-[#087ea4] dark:text-[#61DAFB]">
                    <SiReact className="w-5 h-5 animate-spin-slow" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-gray-300 font-medium">Frontend</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">React & Next.js</p>
                  </div>
                </div>

                {/* Floating Badge 2: Backend */}
                <div className="absolute -top-3 right-2 sm:-top-3 sm:-right-4 bg-white/95 dark:bg-cardDark/90 backdrop-blur-md border border-slate-200 dark:border-white/10 p-3 rounded-2xl shadow-xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <SiNodedotjs className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-gray-300 font-medium">Backend</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">Node.js & Java</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

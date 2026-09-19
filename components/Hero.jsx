"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Sumon from "@/public/sumon_portfolio.png";
import SocialMediaLinks from "./SocialMediaLinks";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import { SiReact, SiNodedotjs } from "react-icons/si";

const Hero = () => {
  return (
    <section id="hero" className="relative pt-6 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      <div className="glow-spot w-72 h-72 md:w-96 md:h-96 bg-primary top-0 left-1/4 -translate-x-1/2 -z-10" />
      <div className="glow-spot w-60 h-60 bg-blue-600/30 bottom-10 right-10 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for Full-time Roles & Projects
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-rose-400 to-orange-400">
                Sumon Roy
              </span>
            </h1>

            <p className="mt-3 text-xl sm:text-2xl font-semibold text-gray-200">
              Software Engineer & Full-Stack Developer
            </p>

            <p className="mt-5 text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl">
              Computer Science & Engineering graduate from Daffodil International University.
              I specialize in crafting high-performance web applications, scalable backends, and
              intuitive user experiences using{" "}
              <span className="text-white font-medium">React, Next.js, Node.js, Java</span>, and
              modern databases.
            </p>

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
                className="px-6 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-gray-200 hover:text-white border border-white/[0.1] hover:border-white/20 font-medium text-sm flex items-center gap-2 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                View Projects
                <FiArrowRight className="w-4 h-4 text-primary" />
              </Link>

              <Link
                href="/#contact"
                className="px-5 py-3 rounded-xl text-gray-300 hover:text-white text-sm font-medium transition-colors"
              >
                Contact Me
              </Link>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.08] w-full flex items-center gap-4">
              <span className="text-xs uppercase tracking-wider text-gray-300 font-medium">
                Connect with me:
              </span>
              <SocialMediaLinks />
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-primary/5 to-transparent rounded-3xl filter blur-xl -z-10 transform scale-95" />

              <div className="relative rounded-3xl p-2 bg-gradient-to-b from-white/15 via-white/5 to-transparent border border-white/10 shadow-2xl backdrop-blur-sm overflow-hidden">
                <div className="relative aspect-square sm:aspect-[4/5] rounded-2xl overflow-hidden bg-cardDark flex items-center justify-center">
                  <Image
                    src={Sumon}
                    alt="Sumon Roy - Software Engineer"
                    priority
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bgDark/80 via-transparent to-transparent opacity-60" />
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-cardDark/90 backdrop-blur-md border border-white/10 p-3 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#61DAFB]/10 border border-[#61DAFB]/20 flex items-center justify-center text-[#61DAFB]">
                  <SiReact className="w-5 h-5 animate-spin-slow" />
                </div>
                <div>
                  <p className="text-xs text-gray-300 font-medium">Frontend</p>
                  <p className="text-sm font-bold text-white">React & Next.js</p>
                </div>
              </div>

              <div className="absolute -top-3 -right-3 sm:-right-4 bg-cardDark/90 backdrop-blur-md border border-white/10 p-3 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <SiNodedotjs className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-300 font-medium">Backend</p>
                  <p className="text-sm font-bold text-white">Node.js & Java</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

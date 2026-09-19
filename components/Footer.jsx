"use client";
import React from "react";
import Link from "next/link";
import SocialMediaLinks from "./SocialMediaLinks";
import { FiArrowUp } from "react-icons/fi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "/#hero" },
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Services", href: "/#services" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <footer className="w-full border-t border-slate-200 dark:border-cardBorder bg-slate-100/80 dark:bg-bgDark/80 backdrop-blur-md pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-200 dark:border-white/[0.06]">
          <div className="md:col-span-6 space-y-4">
            <Link href="/#hero" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-bold text-base">
                S
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                Sumon<span className="text-primary font-mono text-sm">.dev</span>
              </span>
            </Link>
            <p className="text-sm text-slate-600 dark:text-gray-400 max-w-sm leading-relaxed">
              Software Engineer passionate about building clean, high-performance web
              applications, resilient backend systems, and delightful digital experiences.
            </p>
            <SocialMediaLinks />
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-mono font-semibold tracking-wider text-slate-900 dark:text-white">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white hover:underline underline-offset-4 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-mono font-semibold tracking-wider text-slate-900 dark:text-white">
              Direct Contact
            </h4>
            <p className="text-sm text-slate-600 dark:text-gray-400">Dhaka, Bangladesh</p>
            <p className="text-sm text-slate-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">
              <a href="mailto:sumonroy.cs@gmail.com">sumonroy.cs@gmail.com</a>
            </p>
            <div className="pt-2">
              <Link
                href="/#contact"
                className="inline-block text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-slate-300 dark:bg-white/[0.05] dark:border-white/10 text-slate-700 hover:text-slate-900 dark:text-gray-300 dark:hover:text-white hover:border-primary/50 transition-all shadow-sm"
              >
                Hire for your team &rarr;
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-gray-400">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-slate-800 dark:text-white font-medium">Sumon Roy</span>. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-1.5 text-slate-600 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white transition-colors group"
          >
            <span>Back to top</span>
            <div className="w-7 h-7 rounded-lg bg-white border border-slate-300 dark:bg-white/[0.05] dark:border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:text-primary transition-colors shadow-sm">
              <FiArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

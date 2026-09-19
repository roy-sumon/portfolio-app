"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolledPct = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolledPct);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/#hero" },
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Services", href: "/#services" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[2.5px] bg-gradient-to-r from-primary via-rose-400 to-primary z-50 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/85 dark:bg-bgDark/85 backdrop-blur-md border-b border-slate-200 dark:border-cardBorder shadow-md shadow-black/5 dark:shadow-black/20"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Brand Logo */}
            <Link href="/#hero" className="group flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center text-primary font-bold text-lg shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:border-primary/60">
                S
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors duration-200">
                Sumon<span className="text-primary font-mono text-base">.dev</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/5 rounded-lg transition-all duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA & Theme Toggle */}
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />

              <Link
                href="https://drive.google.com/file/d/1-2EofL3vwamC8KdgnMiIGL14QR7YGDrO/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-slate-600 hover:text-slate-900 dark:text-gray-300 dark:hover:text-white px-2.5 py-2 transition-colors duration-200 flex items-center gap-1"
              >
                Resume <FiArrowUpRight className="text-primary text-sm" />
              </Link>
              <Link
                href="/#contact"
                className="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primaryHover rounded-lg transition-all duration-200 shadow-sm hover:shadow-glow hover:scale-[1.02] active:scale-[0.98]"
              >
                Let's Talk
              </Link>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle navigation menu"
                className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/5 transition-colors focus:outline-none"
              >
                {isOpen ? <HiX className="w-6 h-6" /> : <HiMenuAlt3 className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        {isOpen && (
          <div className="md:hidden bg-white/95 dark:bg-bgDark/95 backdrop-blur-xl border-b border-slate-200 dark:border-cardBorder px-4 pt-2 pb-6 space-y-2 max-h-[85vh] overflow-y-auto animate-in fade-in duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2.5 text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-cardBorder flex flex-col gap-2.5">
              <Link
                href="https://drive.google.com/file/d/1-2EofL3vwamC8KdgnMiIGL14QR7YGDrO/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-2.5 text-sm font-medium text-slate-700 border border-slate-300 dark:border-cardBorder dark:text-gray-300 rounded-lg hover:border-gray-500 transition-colors"
              >
                Download Resume
              </Link>
              <Link
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-2.5 text-sm font-medium text-white bg-primary hover:bg-primaryHover rounded-lg shadow-sm transition-colors"
              >
                Let's Talk
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;

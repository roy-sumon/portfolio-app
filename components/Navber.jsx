"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-bgDark/85 backdrop-blur-md border-b border-cardBorder shadow-lg shadow-black/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/#hero" className="group flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center text-primary font-bold text-lg shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:border-primary/60">
              S
            </div>
            <span className="text-xl font-bold tracking-tight text-white transition-colors duration-200">
              Sumon<span className="text-primary font-mono text-base">.dev</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="https://drive.google.com/file/d/1-2EofL3vwamC8KdgnMiIGL14QR7YGDrO/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-gray-300 hover:text-white px-3 py-2 transition-colors duration-200 flex items-center gap-1"
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

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors focus:outline-none"
          >
            {isOpen ? <HiX className="w-6 h-6" /> : <HiMenuAlt3 className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-bgDark/95 backdrop-blur-xl border-b border-cardBorder px-4 pt-2 pb-6 space-y-2 animate-in fade-in duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2.5 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-cardBorder flex flex-col gap-2.5">
            <Link
              href="https://drive.google.com/file/d/1-2EofL3vwamC8KdgnMiIGL14QR7YGDrO/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-2.5 text-sm font-medium text-gray-300 border border-cardBorder rounded-lg hover:border-gray-600 transition-colors"
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
  );
};

export default Navbar;

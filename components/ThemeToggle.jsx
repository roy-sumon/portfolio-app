"use client";
import React from "react";
import { useTheme } from "./ThemeProvider";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = ({ className = "" }) => {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div
        className={`w-9 h-9 rounded-xl bg-slate-200 dark:bg-white/5 animate-pulse ${className}`}
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 border ${
        isDark
          ? "bg-white/[0.05] border-white/10 text-yellow-400 hover:bg-white/10 hover:border-white/20 shadow-sm"
          : "bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200 hover:text-slate-900 shadow-sm"
      } ${className}`}
    >
      <span className="sr-only">Toggle theme</span>
      <div className="relative w-4 h-4 flex items-center justify-center">
        <FiSun
          className={`w-4 h-4 transition-all duration-300 transform ${
            isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
          }`}
        />
        <FiMoon
          className={`w-4 h-4 absolute transition-all duration-300 transform ${
            isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
          }`}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;

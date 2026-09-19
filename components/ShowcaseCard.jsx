"use client";
import React, { useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";
import { FiAward, FiFolder, FiCpu, FiCheckCircle } from "react-icons/fi";

const statsData = [
  {
    target: 4,
    suffix: "+",
    label: "Years Coding Journey",
    sublabel: "Academic & project development",
    icon: <FiAward className="w-5 h-5 text-primary" />,
  },
  {
    target: 25,
    suffix: "+",
    label: "Projects Completed",
    sublabel: "Web apps, APIs & desktop tools",
    icon: <FiFolder className="w-5 h-5 text-primary" />,
  },
  {
    target: 12,
    suffix: "+",
    label: "Technologies Mastered",
    sublabel: "Modern full-stack frameworks",
    icon: <FiCpu className="w-5 h-5 text-primary" />,
  },
  {
    target: 350,
    suffix: "+",
    label: "Problems Solved",
    sublabel: "Competitive programming & DSA",
    icon: <FiCheckCircle className="w-5 h-5 text-primary" />,
  },
];

const ShowcaseCard = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const duration = 1800;
    const steps = 40;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const ease = 1 - (1 - progress) * (1 - progress);

      setCounts(
        statsData.map((stat) => Math.min(stat.target, Math.round(stat.target * ease)))
      );

      if (step >= steps) {
        clearInterval(timer);
        setCounts(statsData.map((stat) => stat.target));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-6 sm:py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {statsData.map((stat, idx) => (
          <ScrollReveal key={stat.label} delay={idx * 100} direction="up">
            <div className="glass-panel glass-panel-hover p-6 rounded-2xl relative overflow-hidden flex flex-col justify-between group h-full">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  {stat.icon}
                </div>
                <span className="text-xs font-mono text-slate-400 dark:text-gray-500 uppercase tracking-wider">
                  0{idx + 1}
                </span>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-baseline gap-1">
                  <span>{counts[idx]}</span>
                  <span className="text-primary font-bold">{stat.suffix}</span>
                </div>
                <h3 className="text-base font-semibold text-slate-800 dark:text-gray-200 mt-1">
                  {stat.label}
                </h3>
                <p className="text-xs text-slate-500 dark:text-gray-400 mt-1">
                  {stat.sublabel}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default ShowcaseCard;

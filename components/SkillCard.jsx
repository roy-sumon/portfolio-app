"use client";
import React, { useState } from "react";
import skillCardData from "@/public/skillCardData";
import ScrollReveal from "./ScrollReveal";

const SkillCard = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Frontend", "Backend", "Languages", "Tools"];

  const filteredSkills =
    activeCategory === "All"
      ? skillCardData.cards
      : skillCardData.cards.filter((card) => card.category === activeCategory);

  return (
    <div className="w-full">
      {/* Category Filter Pills */}
      <ScrollReveal direction="up" delay={100}>
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-white shadow-md shadow-primary/30 scale-105"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 border border-slate-200 dark:bg-white/[0.04] dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/[0.08] dark:border-white/[0.06]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </ScrollReveal>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
        {filteredSkills.map((card, idx) => {
          return (
            <ScrollReveal key={card.id} delay={(idx % 5) * 60} direction="up">
              <div className="glass-panel glass-panel-hover p-5 rounded-2xl flex flex-col items-center justify-center text-center group cursor-pointer h-full">
                <div className="w-14 h-14 rounded-xl bg-slate-100 border border-slate-200 dark:bg-white/[0.03] dark:border-white/[0.06] flex items-center justify-center mb-3 group-hover:scale-110 group-hover:border-primary/40 transition-all duration-300">
                  {card.icon}
                </div>

                <h4 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors duration-200">
                  {card.title}
                </h4>

                <span className="mt-1.5 text-[11px] font-medium text-slate-500 bg-slate-100 dark:bg-white/[0.04] dark:text-gray-400 px-2 py-0.5 rounded-md border border-slate-200 dark:border-white/[0.04]">
                  {card.category}
                </span>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
};

export default SkillCard;

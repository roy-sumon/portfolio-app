"use client";
import React, { useState } from "react";
import skillCardData from "@/public/skillCardData";

const SkillCard = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Frontend", "Backend", "Languages", "Tools"];

  const filteredSkills =
    activeCategory === "All"
      ? skillCardData.cards
      : skillCardData.cards.filter((card) => card.category === activeCategory);

  return (
    <div className="w-full">
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
                  : "bg-white/[0.04] text-gray-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
        {filteredSkills.map((card) => {
          return (
            <div
              key={card.id}
              className="glass-panel glass-panel-hover p-5 rounded-2xl flex flex-col items-center justify-center text-center group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mb-3 group-hover:scale-110 group-hover:border-primary/40 transition-all duration-300">
                {card.icon}
              </div>

              <h4 className="text-sm sm:text-base font-semibold text-white group-hover:text-primary transition-colors duration-200">
                {card.title}
              </h4>

              <span className="mt-1.5 text-[11px] font-medium text-gray-400 bg-white/[0.04] px-2 py-0.5 rounded-md border border-white/[0.04]">
                {card.category}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillCard;

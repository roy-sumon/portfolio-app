"use client";
import React from "react";
import cardData from "@/public/cardData";
import { FiArrowRight } from "react-icons/fi";

const Card = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cardData.cards.map((card) => {
        return (
          <div
            key={card.id}
            className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-2xl flex flex-col justify-between group cursor-default"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary text-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:shadow-glow">
                {card.icon}
              </div>

              <h3 className="text-xl font-bold text-white mt-6 group-hover:text-primary transition-colors duration-200">
                {card.title}
              </h3>

              <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                {card.description}
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
              <span className="font-mono uppercase tracking-wider">Service #0{card.id}</span>
              <FiArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;

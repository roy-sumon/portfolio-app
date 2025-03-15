import skillCardData from "@/public/skillCardData";
import React from "react";

const SkillCard = () => {
  return (
    <main>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 m-1">
        {skillCardData.cards.map((card) => {
          return (
            <div
              key={card.id}
              className="bg-[#1e1e1e] m-2 p-3 rounded-md flex flex-col justify-center items-center hover:ring-1 hover:ring-primary hover:text-primary cursor-pointer"
            >
              <span className="mb-2">{card.icon}</span>
              <p className="text-cWhite text-lg">{card.title}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default SkillCard;

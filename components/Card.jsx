// "use client";
import React from "react";
import cardData from "@/public/cardData";

const Card = () => {
  return (
    <div className="sm:grid sm:grid-cols-2 md:grid-cols-3">
      {cardData.cards.map((card) => {
        return (
          <div
            key={card.id}
            className="bg-[#1e1e1e] p-2 md:px-4 flex flex-col justify-center items-center rounded-md m-2 hover:ring-1 hover:ring-primary hover:text-primary cursor-pointer"
          >
            <span className="text-primary text-4xl">{card.icon}</span>
            <h1 className="text-md text-cWhite sm:text-lg md:2xl py-5 uppercase">{card.title}</h1>
            <p className="text-justify text-gray-400">{card.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Card;

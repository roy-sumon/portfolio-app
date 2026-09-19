import React from "react";

const HorizontalLIne = ({ className = "" }) => {
  return (
    <div className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8 md:my-16 ${className}`}>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.1] to-transparent" />
    </div>
  );
};

export default HorizontalLIne;

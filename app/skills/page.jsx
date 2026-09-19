import SkillCard from "@/components/SkillCard";
import React from "react";

const SkillPage = () => {
  return (
    <section id="skills" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            Technical Stack
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-rose-400 to-orange-400">Technologies</span>
          </h2>
          <p className="mt-4 text-base text-gray-400 leading-relaxed">
            The programming languages, frameworks, libraries, and developer tools I leverage to
            engineer modern, dependable software.
          </p>
        </div>

        <SkillCard />
      </div>
    </section>
  );
};

export default SkillPage;

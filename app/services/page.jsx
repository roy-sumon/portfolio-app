import Card from "@/components/Card";
import React from "react";

const ServicesPage = () => {
  return (
    <section id="services" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            What I Offer
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Specialized Services For <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-rose-400 to-orange-400">
              Modern Software Development
            </span>
          </h2>
          <p className="mt-4 text-base text-gray-400 leading-relaxed">
            Delivering clean, robust software engineering solutions from concept and UI
            architecture to backend APIs and production deployments.
          </p>
        </div>

        <Card />
      </div>
    </section>
  );
};

export default ServicesPage;

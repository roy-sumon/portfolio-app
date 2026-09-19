"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import ProjectHms from "@/public/project-img/hms.png";
import BasicCalculator from "@/public/project-img/basic-calculator.png";
import MessMealApp from "@/public/project-img/mess-meal-app.png";
import Facebook from "@/public/project-img/facebook.png";

const projectsData = [
  {
    id: 1,
    title: "Hospital Management System",
    category: "Desktop Application",
    tags: ["Java Swing", "MySQL", "OOP", "Database Design"],
    image: ProjectHms,
    github: "https://github.com/roy-sumon/oop-1-javaSwing-hms.git",
    demo: null,
    description:
      "A comprehensive healthcare desktop application engineered to streamline hospital operations, patient care, and administrative workflows.",
    features: [
      "Patient registration, clinical records management, and real-time appointment scheduling",
      "Billing system with structured invoice generation and tracking",
      "Secure MySQL relational database integration with safe credential storage",
    ],
  },
  {
    id: 2,
    title: "Mess Meal Manager App",
    category: "Full-Stack Web App",
    tags: ["React JS", "Tailwind CSS", "PDF Export", "Responsive UI"],
    image: MessMealApp,
    github: "https://github.com/roy-sumon/mess-meal-manager-app.git",
    demo: null,
    description:
      "A responsive financial and meal tracking application built for shared living spaces, hostels, and student residences.",
    features: [
      "Automated calculation of daily meal rates, deposits, and individual balances",
      "One-click financial report export directly into formatted PDF documents",
      "Fully responsive layout designed for mobile and desktop screens",
    ],
  },
  {
    id: 3,
    title: "Basic Calculator GUI",
    category: "Desktop Application",
    tags: ["Java", "Java Swing", "AWT", "GUI Development"],
    image: BasicCalculator,
    github: "https://github.com/roy-sumon/basic-calculator-using-javaSwing.git",
    demo: null,
    description:
      "An intuitive desktop calculator developed in Java Swing designed for seamless everyday arithmetic calculations.",
    features: [
      "Reliable execution of standard arithmetic operations with input error handling",
      "Clean, distraction-free graphical user interface with responsive button grid",
      "Built strictly adhering to Object-Oriented Programming (OOP) principles",
    ],
  },
  {
    id: 4,
    title: "Facebook Landing Page Clone",
    category: "Frontend Web Application",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    image: Facebook,
    github: "https://github.com/roy-sumon/fb-clone-using-html-css-only.git",
    demo: null,
    description:
      "A pixel-accurate recreation of Facebook's authentication and landing interface focusing on responsive web mechanics.",
    features: [
      "Faithfully recreated responsive typography, input fields, and brand layout",
      "Interactive form state validation implemented with Vanilla JavaScript",
      "Cross-browser testing ensuring seamless visual fidelity across screen resolutions",
    ],
  },
];

const Projectpage = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Web", "Desktop"];

  const filteredProjects =
    filter === "All"
      ? projectsData
      : filter === "Web"
      ? projectsData.filter((p) => p.category.includes("Web"))
      : projectsData.filter((p) => p.category.includes("Desktop"));

  return (
    <section id="projects" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
              Featured Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-rose-500 to-orange-500">Projects</span> & Works
            </h2>
            <p className="mt-4 text-base text-slate-600 dark:text-gray-400 leading-relaxed">
              A selection of software applications, full-stack tools, and desktop solutions I've
              engineered.
            </p>

            <div className="flex justify-center items-center gap-2 mt-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                    filter === cat
                      ? "bg-primary text-white shadow-md shadow-primary/25"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 border border-slate-200 dark:bg-white/[0.04] dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/[0.08] dark:border-white/[0.06]"
                  }`}
                >
                  {cat === "All" ? "All Works" : `${cat} Applications`}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Project Cards List */}
        <div className="space-y-10 md:space-y-12">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <ScrollReveal key={project.id} delay={index * 120} direction="up">
                <div className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200 dark:border-white/[0.08] hover:border-primary/40 transition-all duration-300 shadow-lg group">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    <div
                      className={`lg:col-span-6 ${
                        isEven ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-black/40 group-hover:border-primary/40 transition-all duration-300 shadow-md">
                        <div className="aspect-[16/10] relative overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 dark:from-bgDark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </div>
                    </div>

                    <div
                      className={`lg:col-span-6 flex flex-col justify-between space-y-5 ${
                        isEven ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-4 mb-3">
                          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20">
                            {project.category}
                          </span>

                          <div className="flex items-center gap-2">
                            <Link
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-white hover:bg-primary dark:bg-white/[0.05] dark:border-white/10 dark:text-gray-300 dark:hover:text-white dark:hover:bg-primary/20 dark:hover:border-primary/40 transition-all"
                              aria-label={`View ${project.title} source code on GitHub`}
                            >
                              <FiGithub className="w-4 h-4" />
                            </Link>
                            {project.demo && (
                              <Link
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-white hover:bg-primary dark:bg-white/[0.05] dark:border-white/10 dark:text-gray-300 dark:hover:text-white dark:hover:bg-primary/20 dark:hover:border-primary/40 transition-all"
                                aria-label={`View live demo of ${project.title}`}
                              >
                                <FiExternalLink className="w-4 h-4" />
                              </Link>
                            )}
                          </div>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white group-hover:text-primary transition-colors duration-200">
                          {project.title}
                        </h3>

                        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-gray-300 leading-relaxed">
                          {project.description}
                        </p>

                        <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-500 dark:text-gray-400">
                          {project.features.map((feat, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-5 border-t border-slate-200 dark:border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200 dark:bg-white/[0.04] dark:text-gray-300 dark:border-white/[0.08]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primaryHover transition-colors"
                        >
                          Explore Repository &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projectpage;

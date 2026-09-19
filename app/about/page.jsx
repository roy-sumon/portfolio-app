import React from "react";
import Image from "next/image";
import Sumon from "@/public/sumonroy-about.png";
import {
  FiCheckCircle,
  FiBookOpen,
  FiTerminal,
  FiLayers,
  FiDatabase,
} from "react-icons/fi";

const AboutPage = () => {
  const highlights = [
    {
      title: "Frontend Engineering",
      desc: "Responsive, dynamic UIs built with React, Next.js, and modern Tailwind CSS.",
      icon: <FiLayers className="w-5 h-5 text-primary" />,
    },
    {
      title: "Backend & Systems",
      desc: "Robust APIs and desktop tools engineered in Node.js, Express, and Java.",
      icon: <FiTerminal className="w-5 h-5 text-primary" />,
    },
    {
      title: "Database Design",
      desc: "Optimized relational (MySQL) and NoSQL (MongoDB) data modeling & management.",
      icon: <FiDatabase className="w-5 h-5 text-primary" />,
    },
    {
      title: "CS Fundamentals",
      desc: "Solid grasp of Data Structures, Algorithms, OOP, and software design patterns.",
      icon: <FiBookOpen className="w-5 h-5 text-primary" />,
    },
  ];

  const bulletPoints = [
    "Develop responsive, performant, and user-friendly web applications",
    "Build dynamic, SEO-optimized web apps with React and Next.js App Router",
    "Design and integrate RESTful APIs with secure authentication",
    "Apply rigorous debugging, testing, and Git/GitHub collaborative workflows",
    "Implement state management with Redux Toolkit and React Context",
  ];

  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Passionate About Crafting <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-rose-400 to-orange-400">
              Impactful Digital Solutions
            </span>
          </h2>
          <p className="mt-4 text-base text-gray-400 leading-relaxed">
            A software engineer blending analytical engineering principles with modern
            front-end craftsmanship and scalable backend architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="relative rounded-3xl p-2 bg-gradient-to-b from-white/10 via-white/5 to-transparent border border-white/10 shadow-2xl backdrop-blur-sm overflow-hidden">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-cardDark">
                  <Image
                    src={Sumon}
                    alt="Sumon Roy, Software Engineer"
                    className="w-full h-full object-cover object-center filter grayscale contrast-105 hover:grayscale-0 transition-all duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bgDark/90 via-transparent to-transparent opacity-70" />

                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-cardDark/90 backdrop-blur-md border border-white/10">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-primary font-semibold">
                      Education
                    </p>
                    <p className="text-sm font-bold text-white mt-0.5">
                      B.Sc. in Computer Science & Engineering
                    </p>
                    <p className="text-xs text-gray-400">Daffodil International University</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="prose prose-invert text-gray-300 leading-relaxed space-y-4">
              <p>
                I am a Computer Science & Engineering graduate from Daffodil
                International University with a strong passion for solving complex, real-world
                problems through software. My journey spans full-stack web development,
                desktop application engineering, and competitive programming.
              </p>
              <p>
                Whether developing clean user interfaces with Next.js & Tailwind CSS, designing
                scalable server-side APIs in Node.js, or building reliable desktop systems in Java
                Swing and MySQL, I focus on clean code, maintainability, and exceptional user
                experience.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="glass-panel p-4 rounded-xl border border-white/[0.06] hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-1.5">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h4 className="text-sm font-bold text-white">{item.title}</h4>
                  </div>
                  <p className="text-xs text-gray-400 pl-11">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/[0.08] space-y-2.5">
              {bulletPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <FiCheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-300">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;

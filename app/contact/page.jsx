"use client";
import Form from "@/components/Form";
import SocialMediaLinks from "@/components/SocialMediaLinks";
import ScrollReveal from "@/components/ScrollReveal";
import React from "react";
import { FiMail, FiMapPin, FiClock, FiCheckCircle } from "react-icons/fi";

const ContactPage = () => {
  const contactInfo = [
    {
      label: "Email Me",
      value: "sumonroy.cs@gmail.com",
      href: "mailto:sumonroy.cs@gmail.com",
      icon: <FiMail className="w-5 h-5 text-primary" />,
    },
    {
      label: "Location",
      value: "Dhaka, Bangladesh",
      href: null,
      icon: <FiMapPin className="w-5 h-5 text-primary" />,
    },
    {
      label: "Working Availability",
      value: "Full-Time Roles & Remote Projects",
      href: null,
      icon: <FiClock className="w-5 h-5 text-primary" />,
    },
  ];

  const valueProps = [
    "Fast response time within 24 hours",
    "Clear project scoping and transparent communication",
    "Modern, maintainable, and clean code standards",
  ];

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      <div className="glow-spot w-80 h-80 bg-primary/20 -bottom-10 right-0 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
              Contact & Hire
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Let's Talk About Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-rose-500 to-orange-500">
                Next Big Project
              </span>
            </h2>
            <p className="mt-4 text-base text-slate-600 dark:text-gray-400 leading-relaxed">
              Have an open software role, a project idea, or simply want to connect? Reach out and
              let's create something remarkable together.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal direction="right" delay={150}>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Get in touch directly
                </h3>
                <p className="text-sm text-slate-600 dark:text-gray-300 leading-relaxed">
                  I'm always interested in discussing new engineering opportunities, innovative web
                  applications, or contributing to forward-thinking software teams.
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-3.5 pt-2">
              {contactInfo.map((info, idx) => {
                const content = (
                  <div className="glass-panel p-4 rounded-xl border border-slate-200 dark:border-white/[0.08] hover:border-primary/40 flex items-center gap-4 transition-all duration-200 group">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 dark:text-gray-400 uppercase font-mono tracking-wider">
                        {info.label}
                      </p>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </div>
                );

                return (
                  <ScrollReveal key={info.label} delay={200 + idx * 80} direction="up">
                    {info.href ? (
                      <a href={info.href} className="block">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </ScrollReveal>
                );
              })}
            </div>

            <ScrollReveal direction="up" delay={450}>
              <div className="pt-4 border-t border-slate-200 dark:border-white/[0.08] space-y-2.5">
                {valueProps.map((prop) => (
                  <div key={prop} className="flex items-center gap-2.5">
                    <FiCheckCircle className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-700 dark:text-gray-300">{prop}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={550}>
              <div className="pt-4 border-t border-slate-200 dark:border-white/[0.08]">
                <p className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-gray-400 mb-3">
                  Social Profiles
                </p>
                <SocialMediaLinks />
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <ScrollReveal direction="left" delay={200} className="w-full max-w-xl">
              <Form />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;

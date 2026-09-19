"use client";
import React from "react";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";

const SocialMediaLinks = ({ className = "" }) => {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/roy-sumon",
      icon: <FiGithub className="w-5 h-5" />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/sumon-roy-0723421b3/",
      icon: <FiLinkedin className="w-5 h-5" />,
    },
    {
      name: "Email",
      href: "mailto:sumonroy.cs@gmail.com",
      icon: <FiMail className="w-5 h-5" />,
    },
    {
      name: "Twitter / X",
      href: "https://x.com/SumonRo90435026",
      icon: <FiTwitter className="w-5 h-5" />,
    },
  ];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socialLinks.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.name}
          className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-primary/50 text-gray-400 hover:text-white hover:bg-primary/10 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialMediaLinks;

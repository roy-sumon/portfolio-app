"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Sumon from "@/public/sumon_portfolio.png";
import SocialMediaLinks from "./SocialMediaLinks";

const Hero = () => {
  return (
    <div className="sm:flex gap-1 md:pt-10 lg:px-10">
      <div className="px-3 sm:w-[50%]">
        <p className="uppercase text-xs my-4 text-gray-400">Hello, This is</p>
        <h1 className="text-cWhite text-3xl md:text-5xl">
          <span className="text-primary">Sumon</span> Roy
        </h1>
        <p className="my-4 text-gray-400">Software Engineer</p>
        <p className="text-justify text-gray-300">
          As a passionate software developer, I am driven by the desire to
          create innovative solutions using a range of programming languages,
          including Java, JavaScript, Python, C and C++. With experience in
          developing user-friendly applications using ReactJS and Next.js, I am
          eager to contribute to collaborative environments and stay updated
          with industry trends. I also possess a strong foundation in front-end
          development with expertise in CSS and Tailwind CSS, allowing me to
          craft visually appealing and responsive user interfaces. On the
          back-end, I am proficient in Node.js and Express.js, which enables me
          to build robust server-side applications. Furthermore, I have
          experience with MongoDB and SQL databases, providing me with the
          ability to manage and optimize data storage and retrieval efficiently.
          I am well-versed in version control systems, utilizing Git and GitHub
          to manage code repositories and collaborate effectively with teams.
        </p>
        <div className="mt-4">
          <Link
            href="https://drive.google.com/file/d/1-2EofL3vwamC8KdgnMiIGL14QR7YGDrO/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-primary px-4 py-2 hover:bg-black hover:ring-white hover:ring-1 hover:text-primary rounded-md mr-3">
              Download Resume
            </button>
          </Link>
          <Link href="/contact">
            <button className="text-white rounded-md ring-1 ring-primary px-4 py-2 hover:text-primary hover:ring-white">
              Contact Now
            </button>
          </Link>
        </div>
        <SocialMediaLinks />
      </div>

      <div className="mx-auto flex justify-center items-center mt-3">
        <div className="ring-2 ring-primary shadow-lg shadow-primary rounded-xl mx-auto">
          <Image src={Sumon} className="absulate" alt="sumon_img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

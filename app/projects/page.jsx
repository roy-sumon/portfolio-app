"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import ProjectHms from "@/public/project-img/hms.png";
import BasicCalculator from "@/public/project-img/basic-calculator.png";
import MessMealApp from "@/public/project-img/mess-meal-app.png";
import Facebook from "@/public/project-img/facebook.png";

const Projectpage = () => {
  return (
    <div className="p-2 md:mt-10 lg:mx-10">
      <div className="text-center my-3 md:mb-5">
        <p className="text-sm">Latest <span className="text-primary">Works</span></p>
        <h1 className="text-2xl sm:text-3xl">
          Explore My Popular <span className="text-primary">Projects</span>
        </h1>
      </div>

      {/* Project HMS using java swing and MySQL */}
      <div className="sm:grid sm:grid-cols-2 bg-[#1e1e1e] p-4 rounded-md sm:gap-4">
        <div className="mx-auto my-auto">
          <Image
            src={ProjectHms}
            width={450}
            height={450}
            className="rounded-md"
            alt="project-1"
          ></Image>
        </div>
        <div className="mx-auto my-auto mt-3">
          <p className="text-xs text-primary">Desktop Application</p>
          <h1 className="text-xl my-3 sm:text-2xl">
            Hospital Management System{" "}
            <span className="text-sm text-primary">(Java Swing & MySQL)</span>
          </h1>
          <p className="text-gray-400 text-sm mb-3 text-justify">
            {" "}
            The Hospital Management System is a comprehensive application
            developed using Java Swing and MySQL to streamline hospital
            operations and enhance patient care. This system includes essential
            modules such as patient registration, appointment scheduling,
            medical records management, and billing, all designed with a
            user-friendly interface that allows for efficient navigation. By
            integrating MySQL for secure data storage, the application ensures
            that sensitive information is handled safely while improving
            operational efficiency. This project not only showcases my skills in
            Java programming and database management but also emphasizes my
            commitment to creating effective solutions that improve healthcare
            delivery.
          </p>
          <Link
            href="https://github.com/roy-sumon/oop-1-javaSwing-hms.git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-2xl hover:text-white"
          >
            <FiGithub />
          </Link>
        </div>
      </div>

      {/* Project Basic Calculator using java Swing */}
      <div className="sm:grid sm:grid-cols-2 bg-[#1e1e1e] my-4 p-4 rounded-md sm:gap-4">
        <div className="mx-auto mt-3">
          <p className="text-xs text-primary">Desktop Application</p>
          <h1 className="text-xl my-3 sm:text-2xl">
            Basic Calculator{" "}
            <span className="text-sm text-primary">(Java Swing)</span>
          </h1>
          <p className="text-gray-400 text-sm mb-3 text-justify">
            {" "}
            The Basic Calculator is a simple yet effective desktop application I
            created using Java Swing. It’s designed to help users perform basic
            arithmetic operations like addition, subtraction, multiplication,
            and division with ease. The interface is clean and user-friendly,
            making it accessible for anyone, whether you're a beginner or just
            need a quick way to do some math. This project showcases my skills
            in Java programming and GUI development, highlighting my ability to
            build functional applications that prioritize user experience. I’m
            proud of how this calculator combines practicality with a
            straightforward design, making everyday calculations hassle-free.
            It’s a great example of my approach to software development, where I
            focus on creating tools that are both useful and easy to use.
          </p>
          <Link
            href="https://github.com/roy-sumon/basic-calculator-using-javaSwing.git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-2xl hover:text-white"
          >
            <FiGithub />
          </Link>
        </div>
        <div className="mx-auto my-auto mt-4 sm:mt-0">
          <Image
            src={BasicCalculator}
            width={400}
            height={350}
            className="rounded-md"
            alt="project-1"
          ></Image>
        </div>
      </div>

      {/* Project Mess Meal Manager App using react js and tailwind css */}
      <div className="sm:grid sm:grid-cols-2 bg-[#1e1e1e] p-4 rounded-md sm:gap-4">
        <div className="mx-auto my-auto">
          <Image
            src={MessMealApp}
            width={450}
            height={450}
            className="rounded-md"
            alt="project-1"
          ></Image>
        </div>
        <div className="mx-auto my-auto mt-3">
          <p className="text-xs text-primary">Web Application</p>
          <h1 className="text-xl my-3 sm:text-2xl">
            Mess Meal Manager App{" "}
            <span className="text-sm text-primary">
              (ReactJS & Tailwind CSS)
            </span>
          </h1>
          <p className="text-gray-400 text-sm mb-3 text-justify">
            {" "}
            The Mess Meal Manager App is a user-friendly tool designed to make
            managing meal expenses in shared living situations a breeze. Built
            with React JS and Tailwind CSS, this app allows users to easily
            calculate total deposit balances, average meal rates, and individual
            balances for all members, ensuring everyone stays informed about
            their financial contributions. One of its standout features is the
            ability to download financial data in PDF format, making
            record-keeping simple and accessible. With a responsive design that
            works well on any device, the app provides a smooth experience,
            helping users keep track of their meal expenses without hassle.
            Whether you're living in a hostel or sharing meals with friends,
            this app is here to simplify your meal management.
          </p>
          <Link
            href="https://github.com/roy-sumon/mess-meal-manager-app.git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-2xl hover:text-white"
          >
            <FiGithub />
          </Link>
        </div>
      </div>

      {/* Project Basic Calculator using java Swing */}
      <div className="sm:grid sm:grid-cols-2 bg-[#1e1e1e] my-4 p-4 rounded-md sm:gap-4">
        <div className="mx-auto mt-3">
          <p className="text-xs text-primary">Web Application</p>
          <h1 className="text-xl my-3 sm:text-2xl">
            Facebook Landing Page Clone{" "}
            <span className="text-sm text-primary">
              (HTML, CSS & JavaScript)
            </span>
          </h1>
          <p className="text-gray-400 text-sm mb-3 text-justify">
            {" "}
            I replicated the original design of Facebook's landing page using
            HTML, CSS, and JavaScript, focusing on creating a responsive and
            engaging user experience. This project involved meticulous attention
            to detail to ensure that the layout, colors, and functionalities
            closely mirrored the actual Facebook interface. By emphasizing
            responsive design, I ensured that the landing page looks great and
            functions well across various devices, from desktops to smartphones.
            This hands-on experience not only sharpened my web development
            skills but also deepened my understanding of user interface design
            principles.
          </p>
          <Link
            href="https://github.com/roy-sumon/fb-clone-using-html-css-only.git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-2xl hover:text-white"
          >
            <FiGithub />
          </Link>
        </div>
        <div className="mx-auto my-auto mt-4 sm:mt-0">
          <Image
            src={Facebook}
            width={400}
            height={500}
            className="rounded-md"
            alt="project-1"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Projectpage;

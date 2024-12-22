import React from "react";
import Image from "next/image";
import Sumon from "@/public/sumonroy-about.png";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const AboutPage = () => {
  return (
    <div className="sm:flex px-3 gap-4 mt-5 md:mt-10 lg:mx-10">
      <div className="flex justify-center items-center sm:w-[45%]">
        <div className="mx-auto my-auto">
          <Image
            src={Sumon}
            className="border-[#1e1e1e] border-8 rounded-xl h-[30rem] grayscale hover:grayscale-0"
            alt="Sumon Roy, Software Engineer"
            width={300} // Specify appropriate width
            height={400} // Specify appropriate height
          />
        </div>
      </div>

      <div className="sm:w-[70%] md:w-[60%]">
        <p className="text-gray-400 gap-1 my-4">About Me</p>
        <h1 className="text-2xl sm:text-4xl my-4">
          <span className="text-primary">Driven,</span> Innovative <br />
          Software <span className="text-primary">Engineer</span>
        </h1>
        <p className="text-gray-300 text-justify my-4">
          I am Sumon Roy, an aspiring software developer and recent graduate in
          Computer Science and Engineering from Daffodil International
          University. With a strong foundation in programming languages such as
          Java, JavaScript, Python, C and C++. I am passionate about creating
          innovative solutions that leverage technology to address real-world
          challenges. I am eager to contribute to collaborative environments and
          stay updated with industry trends. Additionally, I am interested in
          expanding my skill set to include Next.js, a powerful React-based
          framework that enhances application performance and SEO capabilities
          through server-side rendering and static site generation. I am excited
          to leverage these technologies to build fast, scalable, and highly
          customizable web applications.
        </p>

        <div className="flex items-center gap-2 sm:gap-5">
          <IoMdCheckmarkCircleOutline className="text-primary h-5 w-5" />
          <p className="text-sm sm:text-base">
            Develop responsive & user-friendly web applications.
          </p>
        </div>
        <div className="flex items-center gap-2 sm:gap-5">
          <IoMdCheckmarkCircleOutline className="text-primary h-5 w-5" />
          <p className="text-sm sm:text-base">
            Build dynamic UIs with ReactJS and NextJS.
          </p>
        </div>
        <div className="flex items-center gap-2 sm:gap-5">
          <IoMdCheckmarkCircleOutline className="text-primary h-5 w-5" />
          <p className="text-sm sm:text-base">
            Integrate RESTful APIs for back-end services.
          </p>
        </div>
        <div className="flex items-center gap-2 sm:gap-5">
          <IoMdCheckmarkCircleOutline className="text-primary h-5 w-5" />
          <p className="text-sm sm:text-base">
            Utilize debugging tools to identify and fix code issues.
          </p>
        </div>
        <div className="flex items-center gap-2 sm:gap-5">
          <IoMdCheckmarkCircleOutline className="text-primary h-5 w-5" />
          <p className="text-sm sm:text-base">
            Implement state management with Redux toolkit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

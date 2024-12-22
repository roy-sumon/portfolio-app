"use client";
import Form from "@/components/Form";
import SocialMediaLinks from "@/components/SocialMediaLinks";
import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const ContactPage = () => {
  return (
    <div className="p-2 md:flex md:mt-12 lg:mx-10">
      <div className="pl-2">
        <p className="text-gray-400 text-sm sm:text-base">Get in Touch</p>
        <h1 className="text-xl my-4 sm:text-3xl">
          Let's Talk For your <br />
          <span className="text-primary"> Next Projects</span>
        </h1>
        <p className="text-justify mb-4 pr-5">
          Discuss a project or just want to say hi? connect with me via email or
          through phone call.
        </p>
        <div className="text-gray-400">
          <div className="flex items-center gap-2 sm:gap-5 mb-3">
            <IoMdCheckmarkCircleOutline className="text-primary h-5 w-5" />
            <p className="text-sm sm-text-base">4+ Years of Experience.</p>
          </div>
          <div className="flex items-center gap-2 sm:gap-5 mb-3">
            <IoMdCheckmarkCircleOutline className="text-primary h-5 w-5" />
            <p className="text-sm sm-text-base">Professional Web Designer.</p>
          </div>
          <div className="flex items-center gap-2 sm:gap-5 mb-3">
            <IoMdCheckmarkCircleOutline className="text-primary h-5 w-5" />
            <p className="text-sm sm-text-base">Mobile Apps Design.</p>
          </div>
          <div className="flex items-center gap-2 sm:gap-5 mb-3">
            <IoMdCheckmarkCircleOutline className="text-primary h-5 w-5" />
            <p className="text-sm sm-text-base">Technical Mentor.</p>
          </div>
          <div className="flex items-center gap-2 sm:gap-5">
            <IoMdCheckmarkCircleOutline className="text-primary h-5 w-5" />
            <p className="text-sm sm-text-base">Fullstack Developer.</p>
          </div>
        </div>
        <SocialMediaLinks />
      </div>
      <div className="mx-auto my-auto">
      <Form />
      </div>
    </div>
  );
};

export default ContactPage;

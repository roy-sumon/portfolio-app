"use client";
import React from "react";

const Form = () => {
  return (
    <div className="mx-2">
      <form action="submit" method="post">
        <div className="flex text-cWhite flex-col sm:flex-row">
          <div className="sm:mr-3">
            <label htmlFor="Name">Full Name</label>
            <br />
            <input
              type="text"
              className="bg-[#1a1a1a] px-2 py-2 rounded-md w-full"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mt-2 sm:mt-0">
            <label htmlFor="Email">Email</label>
            <br />
            <input
              type="email"
              className="bg-[#1a1a1a] px-2 py-2 rounded-md w-full"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        <div className="flex mt-2 text-cWhite flex-col sm:flex-row">
          <div className="sm:mr-3">
            <label htmlFor="Phone">Phone</label>
            <br />
            <input
              type="text"
              className="bg-[#1a1a1a] px-2 py-2 rounded-md w-full"
              placeholder="Enter your phone"
              required
            />
          </div >
          <div className="mt-2 sm:mt-0">
            <label htmlFor="Subject">Subject</label>
            <br />
            <input
              type="text"
              className="bg-[#1a1a1a] px-2 py-2 rounded-md w-full"
              placeholder="Subject"
              required
            />
          </div>
        </div>

        <div className="text-cWhite mt-2">
        <label className="" htmlFor="Message">Message</label>
        <br />
        <textarea
          name="message"
          id="message"
          className="bg-[#1a1a1a] px-2 py-2 rounded-md w-full h-20 sm:h-24 sm:w-[27rem]"
          placeholder="Write your message..."
          required
        ></textarea>
        </div>
        <button className="bg-primary text-white px-4 py-2 my-2 rounded-md hover:ring-1 hover:ring-white hover:text-[#ff014f] hover:bg-black">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Form;

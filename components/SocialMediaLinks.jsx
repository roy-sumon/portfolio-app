"use client";
import React from 'react';
import Link from 'next/link';
import { CiMail, CiTwitter } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const SocialMediaLinks = () => {
  return (
    <div className='flex gap-5 py-4 text-[#ff014f]'>
        <Link href="https://github.com/roy-sumon" target="_blank" rel="noopener noreferrer" className='bg-gray-900 hover:text-white p-2 rounded-md'>
            <FiGithub />
        </Link>
        <Link href="https://www.linkedin.com/in/sumon-roy-0723421b3/" target="_blank" rel="noopener noreferrer" className='bg-gray-900 hover:text-white p-2 rounded-md'>
            <FaLinkedinIn />
        </Link>
        <Link href="mailto:sumonroy.cs@gmail.com" target="_blank" rel="noopener noreferrer" className='bg-gray-900 hover:text-white p-2 rounded-md'>
            <CiMail />
        </Link>
        <Link href="https://x.com/SumonRo90435026" target="_blank" rel="noopener noreferrer" className='bg-gray-900 hover:text-white p-2 rounded-md'>
            <CiTwitter />
        </Link>
    </div>
  );
}

export default SocialMediaLinks;

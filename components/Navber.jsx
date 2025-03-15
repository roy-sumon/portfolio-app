"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className='bg-bgDark flex justify-between px-3 py-4 items-center lg:px-12'>
      <div className='font-pacifico text-lg md:text-3xl'>
        <Link href="/">
          <h1 className='text-cWhite'>
            <span className='text-primary'>S</span>umon <span className='text-primary'>R</span>oy
          </h1>
        </Link>
      </div>
      <CiMenuBurger 
        onClick={toggleMenu} 
        className='block sm:hidden text-xl hover:text-primary cursor-pointer' 
      />
      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[#1a1a1a] shadow-lg sm:hidden z-10 bg-opacity-95">
          <div className='flex flex-col items-center p-4'>
            <Link href="/" onClick={closeMenu} className='py-2 hover:text-primary'>Home</Link>
            <Link href="/about" onClick={closeMenu} className='py-2 hover:text-primary'>About</Link>
            <Link href="/services" onClick={closeMenu} className='py-2 hover:text-primary'>Services</Link>
            <Link href="/skills" onClick={closeMenu} className='py-2 hover:text-primary'>Skills</Link>
            <Link href="/projects" onClick={closeMenu} className='py-2 hover:text-primary'>Projects</Link>
            <Link href="/contact" onClick={closeMenu} className='py-2 hover:text-primary'>Contact</Link>
            {/* <button 
              onClick={closeMenu} 
              className='bg-primary text-white px-4 py-1 rounded-md cursor-pointer hover:ring-1 hover:ring-white hover:text-[#ff014f] hover:bg-black mt-2'
            >
              Hire Me
            </button> */}
          </div>
        </div>
      )}
      {/* Desktop Menu */}
      <div className='hidden sm:flex items-center gap-4 text-gray-400'>
        <Link href="/" onClick={closeMenu} className='hover:text-primary'>Home</Link>
        <Link href="/about" onClick={closeMenu} className='hover:text-primary'>About</Link>
        <Link href="/services" onClick={closeMenu} className='hover:text-primary'>Services</Link>
        <Link href="/skills" onClick={closeMenu} className='hover:text-primary'>Skills</Link>
        <Link href="/projects" onClick={closeMenu} className='hover:text-primary'>Projects</Link>
        <Link href="/contact" onClick={closeMenu} className='hover:text-primary'>Contact</Link>
        <button 
          onClick={closeMenu}
          className='bg-primary text-white px-4 py-1 rounded-md cursor-pointer hover:ring-1 hover:ring-white hover:text-[#ff014f] hover:bg-black'
        >
          Hire Me
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

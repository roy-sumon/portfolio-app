"use client";
import React, { useState, useEffect } from 'react';

const ShowcaseCard = () => {
  const [yearsOfExperience, setYearsOfExperience] = useState(0);
  const [projectsCompleted, setProjectsCompleted] = useState(0);
  const [technologiesMastered, setTechnologiesMastered] = useState(0);
  const [problemsSolved, setProblemsSolved] = useState(0);

  useEffect(() => {
    // Function to increment values
    const incrementValues = () => {
      if (yearsOfExperience < 4) setYearsOfExperience(prev => prev + 1);
      if (projectsCompleted < 25) setProjectsCompleted(prev => prev + 1);
      if (technologiesMastered < 12) setTechnologiesMastered(prev => prev + 1);
      if (problemsSolved < 350) setProblemsSolved(prev => prev + 10);
    };

    const interval = setInterval(incrementValues, 100);

    // Stop incrementing after reaching the target values
    const timer = setTimeout(() => clearInterval(interval), 4000); 

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [yearsOfExperience, projectsCompleted, technologiesMastered, problemsSolved]);

  return (
    <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-4 lg:mx-10'>
      <div className='flex items-center justify-center gap-2'>
        <h1 className='text-xl md:text-6xl text-primary'>{yearsOfExperience}+</h1>
        <p className='text-gray-400 text-sm md:text-base'>Years of Experience</p>
      </div>
      <div className='flex items-center justify-center gap-2'>
        <h1 className='text-xl md:text-6xl text-primary'>{projectsCompleted}+</h1>
        <p className='text-gray-400 text-sm md:text-base'>Projects Completed</p>
      </div>
      <div className='flex items-center justify-center gap-2'>
        <h1 className='text-xl md:text-6xl text-primary'>{technologiesMastered}+</h1>
        <p className='text-gray-400 text-sm md:text-base'>Technologies Mastered</p>
      </div>
      <div className='flex items-center justify-center gap-2'>
        <h1 className='text-xl md:text-6xl text-primary'>{problemsSolved}+</h1>
        <p className='text-gray-400 text-sm md:text-base'>Problems Solved</p>
      </div>
    </div>
  );
};

export default ShowcaseCard;

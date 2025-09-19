import SkillCard from '@/components/SkillCard'
import React from 'react'

const SkillPage = () => {
  return (
    <main className='bg-bgDark md:pt-10 lg:px-10'>
      <div className="text-center text-cWhite">
        <p>
          My <span className="text-primary">Telent</span>
        </p>
        <h1 className="text-cWhite text-2xl sm:text-4xl">Professional Skills</h1>
        <p className="text-primary">Tools & Technologies</p>
      </div>
      <div className='md:pt-5'>
        <SkillCard />
    </div>
    </main>
  )
}

export default SkillPage;
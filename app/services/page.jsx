import Card from '@/components/Card'
import React from 'react'

const ServicesPage = () => {
  return (
    <div className='bg-bgDark pt-8 md:pt-12 lg:px-10'>
        <div>
            <h1 className='text-2xl text-cWhite text-center sm:text-4xl'>My <span className='text-primary'>Special Services</span> For your <br /> Business <span className='text-primary'>Developement</span></h1>
        </div>

        <div className='md:mt-5'>
            <Card />
        </div>
    </div>
  )
}

export default ServicesPage;
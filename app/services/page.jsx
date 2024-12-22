import Card from '@/components/Card'
import React from 'react'

const ServicesPage = () => {
  return (
    <div className='mt-8 md:mt-12 lg:mx-10'>
        <div>
            <h1 className='text-2xl text-center sm:text-4xl'>My <span className='text-primary'>Special Services</span> For your <br /> Business <span className='text-primary'>Developement</span></h1>
        </div>

        <div className='md:mt-5'>
            <Card />
        </div>
    </div>
  )
}

export default ServicesPage;
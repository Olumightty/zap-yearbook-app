import React, { Suspense } from 'react'
import SliderContainer from './SliderContainer'
import OutstandingIn from './OutstandingIn'
import TheSet from './TheSet'

const Hero = () => {
    //fetch all the best students
  return (
    <section id='hero' className='px-20 mt-20'>
        <SliderContainer/>
        <Suspense>
          <OutstandingIn imageUrl="/api/placeholder/105/135" name="Princewill Emmanuel" award="Highest CGPA (4.95)" />
        </Suspense>
        <TheSet/>
    </section>
  )
}

export default Hero
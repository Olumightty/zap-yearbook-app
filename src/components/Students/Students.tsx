import React from 'react'
import SliderContainer from '../Hero/SliderContainer'
import FaceCard from './FaceCard'

const Students = () => {
  return (
    <section id='students' className='grid-background bg-(--white) px-20 py-10'>
        <div className='grid grid-cols-4 gap-10 w-fit mx-auto'>
            {
                [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19].map((student, index) => <FaceCard key={index} imageUrl="/api/placeholder/105/135" firstName='Oluwapelumi' lastName='Kadeba'/> )
            }
        </div>
        
    </section>
  )
}

export default Students
import React from 'react'
import SliderContainer from '../Hero/SliderContainer'
import FlipCard from './FlipCard'


const Students = () => {
  return (
    <section id='students' className='grid-background bg-(--white) px-20 py-10'>
        <div className='grid grid-cols-4 gap-10 w-fit mx-auto'>
            {
                [0,1,2,3,4,5,6,7,8,9,10,11].map((student, index) => 
                <FlipCard 
                    key={index} 
                    imageUrl="/api/placeholder/105/135" 
                    firstName='Oluwapelumi' 
                    lastName='Kadeba' 
                    nickname='Courserep' 
                    bibleVerse='John 3:16' 
                    wisdomQuote='You have to continue pushing hard till you can’t no more. cause life is very funy and a lot of blah and i am trying to find a way to fill up this place so that it won’t look all blahish. Thank you for reading nothing'
                /> )
            }
        </div>
    </section>
  )
}

export default Students
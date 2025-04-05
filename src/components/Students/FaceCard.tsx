import Image from 'next/image'
import React from 'react'

interface FaceCardProps {
    imageUrl: string,
    firstName: string,
    lastName: string
}
const FaceCard = (props: FaceCardProps) => {
  return (
    <div className='bg-(--black) p-5 w-fit rounded-xl shadow-2xl '>
        <div className='w-[245px] h-[281px] bg-(--white)'>
            <Image src={props.imageUrl} width={267} height={343} alt={props.lastName}/>
        </div>
        <header className='mt-2'>
            <h2 className='text-lg font-extrabold text-(--white)'>{props.firstName}</h2>
            <h2 className='text-lg font-extrabold text-(--white)'>{props.lastName}</h2>
        </header>
    </div>
  )
}

export default FaceCard
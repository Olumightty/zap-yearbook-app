import Image from 'next/image'
import React from 'react'

interface OutstandingProps {
  imageUrl: string,
  name: string,
  award: string
}
const OutstandingIn = (props: OutstandingProps) => {
  return (
    <article className='flex items-center w-fit gap-20 mx-auto mt-10'>
      <div className='w-[267px] h-[343px] rounded-xl bg-(--white)'>
        <Image src={props.imageUrl} width={267} height={343} alt={props.name}/>
      </div>
      <header>
        <h1 className='text-6xl font-extrabold text-(--white)'>{props.name}</h1>
        <p className='text-4xl font-extrabold text-(--red)'>{props.award}</p>
      </header>
      
    </article>
  )
}

export default OutstandingIn
'use client'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import React from 'react'

interface OutstandingProps {
  imageUrl: string,
  name: string,
  award: string
}
const OutstandingIn = (props: OutstandingProps) => {
  const query = useSearchParams()
  const id = query.get('id')
  if(id)return (
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

  return <div className='h-[383px] w-[267px]'/>
}

export default OutstandingIn
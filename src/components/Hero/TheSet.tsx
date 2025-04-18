import Image from 'next/image'
import React from 'react'

const TheSet = () => {
  return (
    <div className='relative mx-auto w-fit mt-10'>
        <Image className='absolute -top-[128px] -left-[100px]' src="/graduation-cap.svg" alt="graduation cap" />
        <p className='text-9xl font-extrabold text-(--white) text -mb-5'>THE 20TH SET</p>
    </div>
  )
}

export default TheSet
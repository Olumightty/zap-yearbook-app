import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ImageBox = ({src, alt, href} : {
    src: string,
    alt: string,
    href: string
}) => {
  return (
    <div className='w-[105px] h-[135px] rounded-xl bg-(--white)'>
        <Link href={href}><Image src={src} width={105} height={135} alt={alt}/></Link>
    </div>
  )
}

export default ImageBox
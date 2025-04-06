import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const ImageBox = ({src, alt, href} : {
    src: string,
    alt: string,
    href: {
        pathname: string
        query:{
            id: number
        }
    }
}) => {
  const query = useSearchParams()
  const id = query.get('id')

  
  return (
    <div className={clsx('w-[105px] h-[135px] rounded-xl bg-(--white) transition-all' , id === href.query.id.toString() && 'scale-125 z-20')}>
        <Link href={href}><Image src={src} width={105} height={135} alt={alt}/></Link>
    </div>
  )
}

export default ImageBox
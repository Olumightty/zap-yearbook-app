import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <section id='footer' className='px-20 py-5'>
        <nav className='flex justify-between items-center'>
            <Link href={'/'}><Image width={153} height={51} src="/logo.svg" alt="logo" /></Link>
            <ul className='flex items-center gap-10 text-(--white) text-2xl'>
                <li><Link href={'#'}>About</Link></li>
                <li><Link href={'#'}>Products</Link></li>
                <li><Link href={'#'}>Contact Us</Link></li>
            </ul>
            <div className='flex items-center gap-5'>
                <Link href={'#'}><Image width={30} height={30} src="/linkedin.svg" alt="linkedin" /></Link>
                <Link href={'#'}><Image width={41} height={30} src="/gmail.svg" alt="x" /></Link>
                <Link href={'#'}><Image width={30} height={30} src="/instagram.svg" alt="instagram" /></Link>
            </div>
        </nav>
        <hr  className='border-1 border-(--white) my-5'/>
        <p className='text-(--white) text-xl text-center '>&copy; 2025 ZAP. All rights reserved.</p>
    </section>
  )
}

export default Footer
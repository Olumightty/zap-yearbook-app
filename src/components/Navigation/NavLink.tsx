'use client'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLink = ({children, href} : {
  children: React.ReactNode,
  href: string
}) => {
  const path = usePathname()
  return (
    <li className={clsx('cursor-pointer  px-5 font-[family-name:var(--font-vt323)] flex items-center gap-2 text-4xl', path === href ? 'text-(--black) bg-(--white) rounded-full border-2 border-(--red)': 'text-(--white)')}>
      {path === href && <div className='w-2 h-2 bg-(--red) rounded-full'/>}
      <Link href={`${href}`}>{children}</Link>
    </li>
  )
}

export default NavLink
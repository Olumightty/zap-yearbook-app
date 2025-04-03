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
    <li className={clsx('cursor-pointer  font-[family-name:var(--font-vt323)] flex items-center gap-2 text-4xl', path === href ? 'text-(--black) bg-(--white)': 'text-(--white)')}>
      {path === href && <div className='w-1 h-1 bg-(--red) rounded-full'/>}
      <Link href={`${href}`}>{children}</Link>
    </li>
  )
}

export default NavLink
import React from 'react'
import NavLink from './NavLink'

const NavBar = () => {
  return (
    <nav className='sticky top-0 bg-(--black) z-20 px-20 py-5 w-full'>
      <ul className='flex justify-end gap-40 items-center'>
        <NavLink href='/'>computer engineering</NavLink>
        <NavLink href='/events'>events</NavLink>
      </ul>
    </nav>
  )
}

export default NavBar
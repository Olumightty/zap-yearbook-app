import React from 'react'
import NavLink from './NavLink'

const NavBar = () => {
  return (
    <ul className='sticky top-0 bg-(--black) w-full flex justify-end gap-40 px-20 py-5 items-center'>
      <NavLink href='/'>computer engineering</NavLink>
      <NavLink href='/events'>events</NavLink>
    </ul>
  )
}

export default NavBar
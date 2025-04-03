import React from 'react'
import NavLink from './NavLink'

const NavBar = () => {
  return (
    <ul className='sticky top-0 bg-(--black) w-full flex'>
      <NavLink href='/'>computer engineering</NavLink>
      <NavLink href='/events'>events</NavLink>
    </ul>
  )
}

export default NavBar
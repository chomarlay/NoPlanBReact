import React, { Fragment } from 'react'
import {Nav, NavTitle, NavLink} from './NavStyledComponents/NavStyled'

const GuestLinks = () => {
    return (
      <Fragment>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/register'>Register</NavLink>
      </Fragment>
    )
}
const AuthLinks = () => {
  return (
    <Fragment>
      <NavLink to='/logout'>Logout</NavLink>
    </Fragment>
  )
}
const Navbar = () => {
  return (
    <Nav>
        <NavTitle>NoPlanB Planner</NavTitle>
        <GuestLinks/>
    </Nav>
  )
}

export default Navbar

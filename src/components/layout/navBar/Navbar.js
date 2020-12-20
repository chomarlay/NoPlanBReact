import React, { Fragment } from 'react';
import { Nav, NavTitle, NavLink } from './NavStyledComponents/NavStyled';
import { SideMenu } from './SideMenu';

const GuestLinks = () => {
  return (
    <Fragment>
      <NavLink to='/login'>Login</NavLink>
      <NavLink to='/register'>Register</NavLink>
    </Fragment>
  );
};
const AuthLinks = () => {
  return (
    <Fragment>
      <NavLink to='#'>Logout</NavLink>
    </Fragment>
  );
};
const Navbar = () => {
  return (
    <Nav>
      <div>
        <SideMenu />
      </div>
      <NavTitle>NoPlanB</NavTitle>
      <GuestLinks />
      <AuthLinks />
    </Nav>
  );
};

export default Navbar;

import React, { useContext, Fragment } from 'react';
import { Nav, NavTitle, NavLink } from './NavStyledComponents/NavStyled';
import { SideMenu } from './SideMenu';
import AuthContext from './../../../context/auth/authContext';

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
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <Nav>
      {isAuthenticated ? (
        <div>
          <SideMenu />
        </div>
      ) : (
        ''
      )}

      <NavTitle>NoPlanB</NavTitle>
      {!isAuthenticated ? <GuestLinks /> : <AuthLinks />}
    </Nav>
  );
};

export default Navbar;

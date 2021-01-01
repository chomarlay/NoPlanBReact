import React, { Fragment } from 'react';
import { Nav, NavTitle, NavLink } from './NavStyledComponents/NavStyled';
import { SideMenu } from './SideMenu';
import useAuth from './../../../context/auth/useAuth';

const Navbar = ({ history }) => {
  const { isAuthenticated, logout } = useAuth();
  const onLogout = () => {
    logout();
  };
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
        <NavLink to='#' onClick={onLogout}>
          Logout
        </NavLink>
      </Fragment>
    );
  };

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

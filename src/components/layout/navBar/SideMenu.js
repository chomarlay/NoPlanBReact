import React, { Fragment, useState } from 'react';
import { NavSideMenu, SideNav, NavLink } from './NavStyledComponents/NavStyled';
import * as FaIcons from 'react-icons/fa';
import * as BoxIcons from 'react-icons/bi';
import * as FcIcons from 'react-icons/fc';

export const SideMenu = () => {
  const [sideMenu, setSideMenu] = useState(false);
  const showSideMenu = () => setSideMenu(!sideMenu);
  return (
    <Fragment>
      <NavSideMenu to='#' onClick={showSideMenu}>
        <FaIcons.FaBars />
      </NavSideMenu>
      {sideMenu ? (
        <SideNav>
          <NavLink to='/noplanb'>
            <BoxIcons.BiCalendarStar />
            NoPlanB
          </NavLink>
          <NavLink to='/today'>
            <BoxIcons.BiCalendarEvent />
            Today
          </NavLink>
          <NavLink to='/upcoming'>
            <BoxIcons.BiCalendar />
            Upcoming
          </NavLink>
          <NavLink to='/projects'>
            <FcIcons.FcTodoList />
            Projects
          </NavLink>
        </SideNav>
      ) : (
        ''
      )}
    </Fragment>
  );
};

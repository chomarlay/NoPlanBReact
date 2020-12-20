import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  background-color: ${(props) => props.theme.altBackgroundColor};
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
  padding-left: 30px;
  padding-right: 30px;
`;

export const SideNav = styled.nav`
  background-color: ${(props) => props.theme.altBackgroundColor};
  height: 250px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  /* align-items: center; */
  /* top: 10; */
  position: absolute;
  left: 0;
  /* z-index: -1; */
  padding-left: 30px;
  padding-right: 30px;
`;
export const NavTitle = styled.h1`
  font-size: 1.5rem;
  color: ${(props) => props.theme.altPrimary};
  flex-grow: 2;
  padding: 0.45rem;
  margin: 0 0.25rem;
`;

export const NavLink = styled(Link)`
  color: ${(props) => props.theme.altPrimary};
  font-size: 1rem;
  text-justify: right;
  text-decoration: none;
  padding: 0.45rem;
  margin: 0 0.25rem;
`;

export const NavSideMenu = styled(Link)`
  color: ${(props) => props.theme.altPrimary};
  display: flex;
  /* flex-direction: column; */
  font-size: 2rem;
  padding: 0.65rem;
  margin: 0 0.25rem;
  top: 0;
  position: sticky;
`;

import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Nav = styled.nav`
    background-color: ${(props)=> props.theme.altBackgroundColor};
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top:0;
    z-index: 999;
    padding-left: 30px;
    padding-right: 30px;
`
export const NavTitle = styled.h1`
    font-size: 2.5rem;
    color: ${(props)=> props.theme.altPrimary};
    flex-grow:2;
    padding: 0.45rem;
    margin: 0 0.25rem;
`

export const NavLink = styled(Link)`
    color: ${(props)=> props.theme.altPrimary};
    font-size: 1.5rem;
    text-justify: right;
    text-decoration:none;
    padding: 0.45rem;
    margin: 0 0.25rem;
`



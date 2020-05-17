import React from 'react'
import styled from 'styled-components/macro'
import logo from '../logo.png'
import { NavLink } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'

export default function Header() {
  return (
    <HeaderStyled>
      <LinkStyled exact to="/home">
        <img src={logo} alt="yomad" />
      </LinkStyled>
      <LinkStyled to="/profile">
        <FaUserCircle className="profile-icon" />
      </LinkStyled>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px;

  img {
    height: 20px;
    margin-top: 8px;
    cursor: default;
  }
`
const LinkStyled = styled(NavLink)`
  .profile-icon {
    color: var(--primary);
    height: 32px;
    width: 32px;
    margin: 8px 8px 0 0;
    cursor: default;
  }
`

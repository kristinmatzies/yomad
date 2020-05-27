import React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { BsPersonFill } from 'react-icons/bs'

export default function Header() {
  return (
    <HeaderStyled>
      <LinkStyled exact to="/">
        <img data-cy="logo" src="./img/logo.png" alt="yomad" />
      </LinkStyled>
      <LinkStyled to="/profile">
        <BsPersonFill data-cy="profile_icon" className="profile_icon" />
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
  .profile_icon {
    color: var(--secondary);
    height: 32px;
    width: 32px;
    cursor: default;
    margin-top: 8px;
  }

  &.active {
    .profile_icon {
      color: var(--primary);
    }
  }
`

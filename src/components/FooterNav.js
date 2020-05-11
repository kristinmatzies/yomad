import React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { TiHome } from 'react-icons/ti'
import { FaPlus } from 'react-icons/fa'
import { IoIosSave } from 'react-icons/io'

export default function FooterNav() {
  return (
    <Footer>
      <LinkStyled exact to="/">
        <TiHome className="home-icon" />
      </LinkStyled>
      <LinkStyled to="/create">
        <button>
          <FaPlus className="calendar-icon" />
        </button>
      </LinkStyled>
      <LinkStyled to="/saved">
        <IoIosSave className="save-icon" />
      </LinkStyled>
    </Footer>
  )
}

const Footer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0 -1px 16px 0 lightgrey;
  position: relative;
`

const LinkStyled = styled(NavLink)`
  .home-icon,
  .calendar-icon,
  .save-icon {
    height: 28px;
    width: 28px;
    color: var(--primary);
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: solid 4px var(--quaternary);
    margin-bottom: 28px;
    background: var(--background);
  }

  &.active {
    .home-icon,
    .calendar-icon,
    .save-icon {
      color: var(--secondary);
    }
  }
`

import React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { TiHome } from 'react-icons/ti'
import { BsPlusCircleFill } from 'react-icons/bs'
import { IoIosSave } from 'react-icons/io'

export default function FooterNav() {
  return (
    <Footer>
      <LinkStyled exact to="/">
        <TiHome className="home-icon" />
      </LinkStyled>
      <LinkStyled to="/create">
        <button>
          <BsPlusCircleFill className="create-icon" />
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
  box-shadow: 0 -1px 8px 0 lightgrey;
  position: relative;
`

const LinkStyled = styled(NavLink)`
  .home-icon,
  .save-icon {
    height: 28px;
    width: 28px;
    color: var(--secondary);
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: none;
    margin-bottom: 28px;
    background: var(--quaternary);
  }

  .create-icon {
    height: 80%;
    width: 80%;
    margin: 0;
    color: var(--secondary);
  }

  &.active {
    .home-icon,
    .create-icon,
    .save-icon {
      color: var(--primary);
    }
  }
`

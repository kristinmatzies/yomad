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
        <TiHome className="home_icon" />
      </LinkStyled>
      <LinkStyled to="/create">
        <IconWrapper>
          <BsPlusCircleFill className="create_icon" />
        </IconWrapper>
      </LinkStyled>
      <LinkStyled to="/saved">
        <IoIosSave className="save_icon" />
      </LinkStyled>
    </Footer>
  )
}

const Footer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0 -1px 4px 0 lightgrey;
  position: relative;
`

const LinkStyled = styled(NavLink)`
  .home_icon,
  .save_icon {
    height: 28px;
    width: 28px;
    color: var(--secondary);
    cursor: default;
  }

  .create_icon {
    height: 80%;
    width: 80%;
    margin: 0;
    color: var(--secondary);
    cursor: default;
  }

  &.active {
    .home_icon,
    .create_icon,
    .save_icon {
      color: var(--primary);
    }
  }
`
const IconWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border-radius: 50%;
  border: none;
  margin-bottom: 24px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.3), inset 0 4px 1px 1px white,
    inset 0 -4px 1px 1px rgba(204, 198, 197, 0.5);
  height: 48px;
  width: 48px;
`

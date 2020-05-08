import React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

export default function SaveFilter() {
  return (
    <SaveFilterLink>
      <LinkStyled exact to="/" activeClassName="selected">
        meet-ups
      </LinkStyled>
      <LinkStyled to="/saved" activeClassName="selected">
        saved
      </LinkStyled>
      <LinkStyled to="/create" activeClassName="selected">
        create event
      </LinkStyled>
    </SaveFilterLink>
  )
}

const SaveFilterLink = styled.section`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 8px;
`

const LinkStyled = styled(NavLink)`
  color: var(--secondary);
  text-decoration: none;

  &.selected {
    color: var(--primary);
    text-decoration: underline;
  }
`

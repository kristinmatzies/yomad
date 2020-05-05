import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export default function SaveFilter() {
  return (
    <SaveFilterLink>
      <LinkStyled to="/">meet-ups</LinkStyled>
      <LinkStyled to="/saved">saved</LinkStyled>
    </SaveFilterLink>
  )
}

const SaveFilterLink = styled.section`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 8px;
`

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: var(--cta);
`

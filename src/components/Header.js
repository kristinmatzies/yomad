import React from 'react'
import styled from 'styled-components'
import logo from '../logo.png'

export default function Header() {
  return (
    <HeaderStyled>
      <img src={logo} alt="yomad" />
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 12px;

  img {
    height: 20px;
  }
`

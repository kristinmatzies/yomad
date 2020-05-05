import React from 'react'
import styled from 'styled-components'

export default function SaveButton() {
  return <SaveButtonStyled>Save</SaveButtonStyled>
}

const SaveButtonStyled = styled.button`
  padding: 8px 36px;
  border: none;
  background: var(--secondary);
  color: white;
  border-radius: 16px;
  box-shadow: 2px 2px 2px var(--primary);
  margin-top: 4px;
  position: absolute;
  top: 304px;
  right: 76px;
`

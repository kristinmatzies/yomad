import React from 'react'
import styled from 'styled-components/macro'

export default function AddButton({ text, onClick }) {
  return <Button onClick={onClick}>{text}</Button>
}

export const Button = styled.button`
  font-size: 16px;
  padding: 8px 48px;
  border: none;
  background: var(--cta);
  color: white;
  border-radius: 4px;
  box-shadow: 1px 1px 1px var(--primary);
  margin: 12px 0;
`

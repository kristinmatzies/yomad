import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
}

export default function Button({ text, onClick }) {
  return <ButtonStyled onClick={onClick}>{text}</ButtonStyled>
}

export const ButtonStyled = styled.button`
  font-size: 16px;
  padding: 8px 48px;
  border: none;
  background: var(--cta);
  color: white;
  border-radius: 4px;
  box-shadow: 1px 1px 1px var(--primary);
  margin: 12px 0;
`

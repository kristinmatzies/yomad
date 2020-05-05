import React from 'react'
import styled from 'styled-components/macro'

export default function SaveButton({
  isClicked,
  defaultText,
  clickedText,
  onClick,
}) {
  return (
    <SaveButtonStyled onClick={onClick} isClicked={isClicked}>
      {isClicked ? clickedText : defaultText}
    </SaveButtonStyled>
  )
}

const SaveButtonStyled = styled.button`
  padding: 8px 52px;
  border: none;
  background: ${(props) =>
    props.isClicked ? 'var(--secondary)' : 'var(--cta)'};
  color: white;
  border-radius: 16px;
  box-shadow: 2px 2px 2px var(--primary);
  position: absolute;
  top: 304px;
  right: 76px;
`

import React from 'react'
import styled from 'styled-components/macro'

export default function SaveButton({
  defaultText,
  clickedText,
  onClick,
  saved,
}) {
  return (
    <SaveButtonStyled onClick={onClick} saved={saved}>
      {saved ? clickedText : defaultText}
    </SaveButtonStyled>
  )
}

const SaveButtonStyled = styled.button`
  padding: 8px 48px;
  border: none;
  background: ${(props) => (props.saved ? 'var(--cta)' : 'var(--secondary)')};
  color: white;
  border-radius: 16px;
  box-shadow: 2px 2px 2px var(--primary);
  position: absolute;
  top: 304px;
  right: 76px;
`

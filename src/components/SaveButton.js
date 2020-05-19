import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

SaveButton.propTypes = {
  defaultText: PropTypes.string,
  clickedText: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  saved: PropTypes.bool.isRequired,
}

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
  font-size: 16px;
  padding: 8px 32px;
  border: none;
  background-image: linear-gradient(
    90deg,
    var(--secondary) 0%,
    var(--secondary) 50%,
    var(--cta) 50%,
    var(--cta) 100%
  );
  background-size: 200%;
  color: white;
  transition: background-position 0.3s cubic-bezier(0.45, 0.25, 0.6, 0.95),
    color 0.2s linear;
  transition-delay: 0s, 0.15s;
  background-position: ${(props) => props.saved && '100% 100%'};
  border-radius: 16px;
  box-shadow: 2px 2px 2px var(--cta);
  position: absolute;
  top: 320px;
`

import React from 'react'
import styled from 'styled-components/macro'

export default function Footer({ isActive, selectedCity }) {
  return (
    <FooterStyled isActive={isActive} selectedCity={selectedCity}>
      <span className="filter-dots"></span>
      <span className="filter-dots"></span>
      <span className="filter-dots"></span>
      <span className="filter-dots"></span>
    </FooterStyled>
  )
}

const FooterStyled = styled.footer`
  text-align: center;
  align-self: center;

  .filter-dots {
    height: 20px;
    width: 20px;
    margin: 4px;
    border-radius: 50%;
    display: inline-block;

    :first-child {
      background: ${(props) =>
        props.isActive && props.selectedCity !== ''
          ? 'var(--primary )'
          : 'var(--primary)'};
    }

    :nth-child(2) {
      background: ${(props) =>
        props.isActive && props.selectedCity !== ''
          ? 'var(--primary)'
          : 'var(--secondary)'};
    }

    :nth-child(3) {
      background: ${(props) =>
        props.isActive && props.selectedCity !== ''
          ? 'var(--primary)'
          : 'var(--tertiary)'};
    }

    :nth-child(4) {
      background: ${(props) =>
        props.isActive && props.selectedCity !== '' ? '' : 'var(--quaternary)'};
    }
  }
`

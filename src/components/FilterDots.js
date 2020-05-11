import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

FilterDots.propTypes = {
  isFiltered: PropTypes.bool.isRequired,
  selectedCity: PropTypes.string.isRequired,
}

export default function FilterDots({ isFiltered, selectedCity }) {
  return (
    <FilterDotsContainer isFiltered={isFiltered} selectedCity={selectedCity}>
      <span className="filter-dots"></span>
      <span className="filter-dots"></span>
      <span className="filter-dots"></span>
      <span className="filter-dots"></span>
    </FilterDotsContainer>
  )
}

const FilterDotsContainer = styled.div`
  text-align: center;
  align-self: center;

  .filter-dots {
    height: 16px;
    width: 16px;
    margin: 4px;
    border-radius: 50%;
    display: inline-block;

    :first-child {
      background: ${(props) =>
        props.isFiltered && props.selectedCity !== ''
          ? 'var(--primary )'
          : 'var(--primary)'};
    }

    :nth-child(2) {
      background: ${(props) =>
        props.isFiltered && props.selectedCity !== ''
          ? 'var(--primary)'
          : 'var(--secondary)'};
    }

    :nth-child(3) {
      background: ${(props) =>
        props.isFiltered && props.selectedCity !== ''
          ? 'var(--primary)'
          : 'var(--tertiary)'};
    }

    :nth-child(4) {
      background: ${(props) =>
        props.isFiltered && props.selectedCity !== ''
          ? ''
          : 'var(--quaternary)'};
    }
  }
`

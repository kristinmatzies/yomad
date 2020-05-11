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
  .filter-dots {
    height: 16px;
    width: 16px;
    border-radius: 50%;
    display: inline-block;

    :first-child {
      position: absolute;
      top: 8px;
      right: 80px;
      z-index: 1;

      background: ${(props) =>
        props.isFiltered && props.selectedCity !== ''
          ? ''
          : 'var(--quaternary)'};
    }

    :nth-child(2) {
      position: absolute;
      top: 8px;
      right: 60px;
      z-index: 1;

      background: ${(props) =>
        props.isFiltered && props.selectedCity !== ''
          ? 'var(--primary)'
          : 'var(--tertiary)'};
    }

    :nth-child(3) {
      position: absolute;
      top: 8px;
      right: 40px;
      z-index: 1;

      background: ${(props) =>
        props.isFiltered && props.selectedCity !== ''
          ? 'var(--primary)'
          : 'var(--secondary)'};
    }

    :nth-child(4) {
      position: absolute;
      top: 8px;
      right: 20px;
      z-index: 1;

      background: ${(props) =>
        props.isFiltered && props.selectedCity !== ''
          ? 'var(--primary )'
          : 'var(--primary)'};
    }
  }
`

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import FilterDots from './FilterDots'

SearchFilter.propTypes = {
  onSearchFilter: PropTypes.func.isRequired,
}

export default function SearchFilter({
  onSearchFilter,
  isFiltered,
  selectedCity,
}) {
  return (
    <Form>
      <img src="./img/icon_magnifier.png" alt="Search" />
      <FilterDots isFiltered={isFiltered} selectedCity={selectedCity} />
      <input
        type="text"
        placeholder="Search your city"
        onChange={onSearchFilter}
      />
    </Form>
  )
}

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
  position: relative;
  border: 1px solid var(--secondary);
  height: 36px;

  input {
    width: 100%;
    padding-left: 40px;
    color: var(--primary);
    font-size: 16px;
    position: relative;
    border: none;
    height: 28px;
  }

  img {
    position: absolute;
    height: 16px;
    top: 8px;
    left: 16px;
    z-index: 1;
  }
`

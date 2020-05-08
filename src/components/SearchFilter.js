import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

SearchFilter.propTypes = {
  onSearchFilter: PropTypes.func.isRequired,
}

export default function SearchFilter({ onSearchFilter }) {
  return (
    <Form>
      <img src="./img/icon_magnifier.png" alt="Search" />
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
  margin-bottom: 8px;
  position: relative;
  border: 1px solid var(--secondary);
  height: 32px;

  input {
    width: 100%;
    padding-left: 36px;
    color: var(--primary);
    font-size: 16px;
    position: relative;
    border: none;
    height: 28px;
  }

  img {
    position: absolute;
    height: 16px;
    top: 4px;
    left: 16px;
    z-index: 1;
  }
`

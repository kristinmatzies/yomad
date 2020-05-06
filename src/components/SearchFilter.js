import React from 'react'
import styled from 'styled-components/macro'

export default function SearchFilter({ onSearchFilter }) {
  return (
    <Form>
      <img src="./img/icon_magnifier.png" alt="Search" />
      <input
        type="search"
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

  input {
    position: relative;
    width: 100%;
    padding-left: 36px;
    color: var(--primary);
    font-size: 16px;

    ::placeholder {
      color: var(--secondary);
      padding-left: 32px;
    }
  }

  img {
    position: absolute;
    height: 16px;
    top: 52px;
    left: 20px;
    z-index: 1;
  }
`

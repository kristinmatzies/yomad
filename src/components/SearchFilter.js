import React from 'react'
import styled from 'styled-components/macro'

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

  input {
    width: 100%;
    padding-left: 2.4em;
    color: var(--primary);
    font-size: 16px;
    position: relative;

    ::placeholder {
      color: var(--secondary);
    }
  }

  img {
    position: absolute;
    height: 16px;
    top: 6px;
    left: 20px;
    z-index: 1;
  }
`

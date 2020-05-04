import React from 'react'
import styled from 'styled-components'

export default function SearchFilter({ onChange }) {
  return (
    <Form>
      <img src="./img/icon_magnifier.png" alt="Search" />
      <input type="search" placeholder="Search your city" onChange={onChange} />
    </Form>
  )
}

const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 12px;

  input {
    position: relative;
    width: 100%;
    padding-left: 36px;
    color: var(--primary);
    font-size: 16px;

    ::placeholder {
      color: var(--secondary);
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

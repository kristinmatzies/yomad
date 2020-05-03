import React from 'react'
import styled from 'styled-components'

export default function SearchFilter({ setSelectedEvents }) {
  return (
    <Form>
      <img src="./img/icon_magnifier.png" alt="Search" />
      <input type="text" placeholder="Search your city" onChange={selectCity} />
    </Form>
  )

  function selectCity(event) {
    setSelectedEvents(event.target.value)
  }
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

    ::placeholder {
      color: var(--secondary);
    }
  }

  img {
    position: absolute;
    height: 16px;
    top: 60px;
    right: 344px;
    z-index: 1;
  }
`

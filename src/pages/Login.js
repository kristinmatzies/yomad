import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../components/Button'
import styled from 'styled-components/macro'
import logo from '../logo.png'

export default function Login({ users }) {
  const [inputValue, setInputValue] = useState('')

  return (
    <Wrapper>
      <img src={logo} alt="yomad" />
      <FormStyled>
        <label htmlFor="mail">Mail</label>
        <input
          id="mail"
          type="mail"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
        <NavLink to="/home">
          <Button text="Login" />
        </NavLink>
      </FormStyled>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  padding: 20px;

  img {
    height: 20px;
    margin: 12px 0;
  }
`

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 12px;
  border-radius: 4px;

  @media (max-width: 360px) {
    width: 280px;
  }

  label {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 12px;
    margin-bottom: 0;
    color: var(--secondary);
  }

  input {
    background: var(--quaternary);
    padding: 12px;
    border: none;
    border-radius: 4px;
    height: 35px;
    margin-bottom: 12px;
  }
`
/* {inputValue === 'maxi@test.de' && (
  <NavLink to="/home">
    <Button text="Login" />
  </NavLink>
)} */

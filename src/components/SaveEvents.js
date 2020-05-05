import React from 'react'
import styled from 'styled-components/macro'

export default function SaveEvents() {
  return (
    <SaveFilterLink>
      <span>meet-ups</span>
      <span>saved</span>
    </SaveFilterLink>
  )
}

const SaveFilterLink = styled.section`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 8px;
  color: var(--cta);
  text-decoration: underline;
`

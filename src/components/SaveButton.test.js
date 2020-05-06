import React from 'react'
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react'
import SaveButton from './SaveButton'

test('rendering button default text', () => {
  const { getByText } = render(
    <SaveButton saved={false} defaultText="save" onClick={() => done()} />
  )
  const linkElement = getByText(/save/i)
  expect(linkElement).toBeInTheDocument()
})

test('rendering button clicked text', () => {
  const { getByText } = render(
    <SaveButton saved={true} clickedText="saved" onClick={() => done()} />
  )
  const linkElement = getByText(/saved/i)
  expect(linkElement).toBeInTheDocument()
})

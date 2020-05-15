import React from 'react'
import { render } from '@testing-library/react'
import SaveButton from './SaveButton'

test('rendering button default text', () => {
  const { getByText } = render(
    <SaveButton saved={false} defaultText="save" onClick={() => done()} />
  )
  const content = getByText(/save/i)
  expect(content).toBeInTheDocument()
})

test('rendering button clicked text', () => {
  const { getByText } = render(
    <SaveButton saved={true} clickedText="saved" onClick={() => done()} />
  )
  const content = getByText(/saved/i)
  expect(content).toBeInTheDocument()
})

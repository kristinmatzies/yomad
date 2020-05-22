import React from 'react'
import { render } from '@testing-library/react'
import Button from './Button'

test('rendering button correctly', () => {
  const { getByText } = render(<Button>Hello</Button>)
  const content = getByText(/Hello/i)
  expect(content).toBeInTheDocument()
})

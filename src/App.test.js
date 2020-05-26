import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import { MemoryRouter } from 'react-router-dom'

test('renders App', () => {
  const { getByPlaceholderText } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  )
  const element = getByPlaceholderText(/Search your city/i)
  expect(element).toBeInTheDocument()
})

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
  const linkElement = getByPlaceholderText(/Search your city/i)
  expect(linkElement).toBeInTheDocument()
})

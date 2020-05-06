import React from 'react'
import { render } from '@testing-library/react'
import Header from './Header'

test('renders learn react link', () => {
  const { getByAltText } = render(<Header />)
  const linkElement = getByAltText(/yomad/i)
  expect(linkElement).toBeInTheDocument()
})

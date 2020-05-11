import React from 'react'
import FooterNav from './FooterNav'
import { MemoryRouter } from 'react-router-dom'

export default {
  title: 'FooterNav',
  component: FooterNav,
}

export const footer = () => (
  <MemoryRouter>
    <FooterNav />
  </MemoryRouter>
)

import React from 'react'
import Header from './Header'
import withMobileWrapper from '../../../.storybook/preview'

export default {
  title: 'Header',
  component: Header,
  decorators: [withMobileWrapper],
}

export const headline = () => <Header />

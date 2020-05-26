import React from 'react'
import FooterNav from './FooterNav'
import withMobileWrapper from '../../../.storybook/preview'

export default {
  title: 'FooterNav',
  component: FooterNav,
  decorators: [withMobileWrapper],
}

export const footer = () => <FooterNav />

import React from 'react'
import Button from './Button'
import withMobileWrapper from '../../.storybook/preview'

export default {
  title: 'Button',
  component: Button,
  decorators: [withMobileWrapper],
}

export const button = () => (
  <div style={{ position: 'relative' }}>
    <Button>Hello</Button>
  </div>
)

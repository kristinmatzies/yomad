import React from 'react'
import { action } from '@storybook/addon-actions'
import Button from './Button'
import withMobileWrapper from '../../.storybook/withMobileWrapper'

export default {
  title: 'Button',
  component: Button,
  decorators: [withMobileWrapper],
}

export const button = () => (
  <div style={{ position: 'relative' }}>
    <Button onClick={action('onClick')} text="Hello" />
  </div>
)

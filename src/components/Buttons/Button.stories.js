import React from 'react'
import Button from './Button'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'
import withMobileWrapper from '../../../.storybook/preview'

export default {
  title: 'Button',
  component: Button,
  decorators: [withMobileWrapper, withKnobs],
}

export const button = () => (
  <div style={{ position: 'relative' }}>
    <Button onClick={action('onClick')}>{text('Label', 'Upload')}</Button>
  </div>
)

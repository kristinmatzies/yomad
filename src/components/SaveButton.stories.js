import React from 'react'
import { action } from '@storybook/addon-actions'
import SaveButton from './SaveButton'
import withMobileWrapper from '../../.storybook/withMobileWrapper'

export default {
  title: 'SaveButton',
  component: SaveButton,
  decorators: [withMobileWrapper],
}

export const simple = () => (
  <div style={{ position: 'relative' }}>
    <SaveButton
      defaultText="default text"
      clickedText="I am not shown"
      saved={false}
      onClick={action('onClick')}
    />
  </div>
)

export const clicked = () => (
  <div style={{ position: 'relative' }}>
    <SaveButton
      defaultText="default text"
      clickedText="I am clicked"
      saved={true}
      onClick={action('onClick')}
    />
  </div>
)

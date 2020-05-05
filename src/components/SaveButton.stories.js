import React from 'react'
import { action } from '@storybook/addon-actions'
import SaveButton from './SaveButton'

export default {
  title: 'SaveButton',
  component: SaveButton,
}

export const simple = () => (
  <SaveButton
    defaultText="default text"
    clickedText="I'm not shown"
    onClick={action('onClick')}
  />
)

export const clicked = () => (
  <SaveButton
    defaultText="default text"
    clickedText="I'm clicked"
    onClick={action('onClick')}
  />
)

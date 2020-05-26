import React from 'react'
import { action } from '@storybook/addon-actions'
import SaveButton from './SaveButton'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import withMobileWrapper from '../../../.storybook/preview'

export default {
  title: 'SaveButton',
  component: SaveButton,
  decorators: [withMobileWrapper, withKnobs],
}

export const simple = () => (
  <div style={{ position: 'relative' }}>
    <SaveButton
      defaultText="default text"
      clickedText="clicked text"
      saved={boolean('saved', false)}
      onClick={action('onClick')}
    />
  </div>
)

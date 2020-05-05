import React from 'react'
import SaveButton from './SaveButton'
import withMobileWrapper from '../../.storybook/withMobileWrapper'

export default {
  title: 'SaveButton',
  component: SaveButton,
  decorators: [withMobileWrapper],
}

export const saveButton = () => <SaveButton />

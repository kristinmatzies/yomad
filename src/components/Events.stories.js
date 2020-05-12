import React from 'react'
import Events from './Events'
import { action } from '@storybook/addon-actions'
import withMobileWrapper from '../../.storybook/preview'

export default {
  title: 'Events',
  component: Events,
  decorators: [withMobileWrapper],
}

export const events = () => (
  <Events event={'object'} deleteEvent={action('Delete Event')} />
)

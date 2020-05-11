import React from 'react'
import CreateEvent from './CreateEvent'
import { action } from '@storybook/addon-actions'
import withMobileWrapper from '../../.storybook/withMobileWrapper'

export default {
  title: 'CreateEvent',
  component: CreateEvent,
  decorators: [withMobileWrapper],
}

export const form = () => (
  <CreateEvent
    eventEntry={'I am state related'}
    previewImage={'I am  state related'}
    updateEventEntry={action('onInput')}
    handleSubmit={action('onClick')}
  />
)

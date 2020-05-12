import React from 'react'
import CreateForm from './CreateForm'
import { action } from '@storybook/addon-actions'
import withMobileWrapper from '../../.storybook/withMobileWrapper'

export default {
  title: 'CreateForm',
  component: CreateForm,
  decorators: [withMobileWrapper],
}

export const form = () => (
  <CreateForm
    eventEntry={'I am state related'}
    previewImage={'I am state related'}
    updateEventEntry={action('onInput')}
    submitNewEvent={action('onClick')}
    updateImage={action('onClick')}
  />
)

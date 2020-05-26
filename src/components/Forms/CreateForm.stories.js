import React from 'react'
import CreateForm from './CreateForm'
import { action } from '@storybook/addon-actions'
import withMobileWrapper from '../../../.storybook/preview'

export default {
  title: 'CreateForm',
  component: CreateForm,
  decorators: [withMobileWrapper],
}

export const form = () => (
  <CreateForm
    eventEntry={''}
    previewImage={
      'https://firebasestorage.googleapis.com/v0/b/yomad-2e8f7.appspot.com/o/images%2Fdefault_img.jpg?alt=media&token=903c68aa-aa04-405a-a39e-3c62097d8bb4'
    }
    submitNewEvent={action('Submit new event')}
  />
)

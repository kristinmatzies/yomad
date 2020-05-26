import React from 'react'
import ImageUploadProfile from './ImageUploadProfile'
import { action } from '@storybook/addon-actions'
import withMobileWrapper from '../../../.storybook/preview'

export default {
  title: 'ImageUploadProfile',
  component: ImageUploadProfile,
  decorators: [withMobileWrapper],
}

export const imageuploadprofile = () => (
  <ImageUploadProfile
    previewImage={'I am state related'}
    updateImage={action('onClick')}
  />
)

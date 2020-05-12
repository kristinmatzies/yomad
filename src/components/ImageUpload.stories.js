import React from 'react'
import ImageUpload from './ImageUpload'
import { action } from '@storybook/addon-actions'
import withMobileWrapper from '../../.storybook/withMobileWrapper'

export default {
  title: 'ImageUpload',
  component: ImageUpload,
  decorators: [withMobileWrapper],
}

export const imageupload = () => (
  <ImageUpload
    previewImage={'I am state related'}
    updateImage={action('onClick')}
  />
)

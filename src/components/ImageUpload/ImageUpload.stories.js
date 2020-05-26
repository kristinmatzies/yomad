import React from 'react'
import ImageUpload from './ImageUpload'
import { action } from '@storybook/addon-actions'
import withMobileWrapper from '../../../.storybook/preview'

export default {
  title: 'ImageUpload',
  component: ImageUpload,
  decorators: [withMobileWrapper],
}

export const imageupload = () => (
  <ImageUpload
    previewImage={
      'https://firebasestorage.googleapis.com/v0/b/yomad-2e8f7.appspot.com/o/images%2Fdefault_img.jpg?alt=media&token=903c68aa-aa04-405a-a39e-3c62097d8bb4'
    }
    updateImage={action('onClick')}
  />
)

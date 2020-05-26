import React from 'react'
import ProfileForm from './ProfileForm'
import { action } from '@storybook/addon-actions'
import withMobileWrapper from '../../../.storybook/preview'

export default {
  title: 'ProfileForm',
  component: ProfileForm,
  decorators: [withMobileWrapper],
}

export const profileform = () => (
  <ProfileForm
    user={''}
    previewProfileImage={
      'https://firebasestorage.googleapis.com/v0/b/yomad-2e8f7.appspot.com/o/profile%2Fuser_default.png?alt=media&token=d784c8f5-e4ff-4f6a-9609-fb1c9a8cc8f0'
    }
    submitNewEvent={action('Submit new event')}
  />
)

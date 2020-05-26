import React from 'react'
import Events from './Events'
import { action } from '@storybook/addon-actions'
import { withKnobs, object } from '@storybook/addon-knobs'
import withMobileWrapper from '../../.storybook/preview'

export default {
  title: 'Events',
  component: Events,
  decorators: [withMobileWrapper, withKnobs],
}

const label = 'event'
const event = {
  imageSrc: './img/default_img.jpg',
  city: 'Hamburg',
  place: 'Planten un Blomen',
  date: '2020-06-04',
  time: '8:00',
  yogastyle: 'Vinyasa',
  details: 'Meet 10 minutes earlier at Café Seeterrassen.',
}

const value = object(label, event)

export const events = () => (
  <div style={{ display: 'grid' }}>
    <Events
      event={value}
      deleteEvent={action('Delete Event')}
      saveEvent={action('Save Event')}
    />
  </div>
)

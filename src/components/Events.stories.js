import React from 'react'
import Events from './Events'
import { action } from '@storybook/addon-actions'
import withMobileWrapper from '../../.storybook/preview'

export default {
  title: 'Events',
  component: Events,
  decorators: [withMobileWrapper],
}

const event = {
  event: {
    imageSrc: './img/default_img.jpg',
    city: 'Hamburg',
    place: 'Planten un Blomen',
    date: '2020-06-04',
    time: '8:00',
    yogastyle: 'Vinyasa',
    details: 'Meet 10 minutes earlier at Café Seeterrassen.',
  },
}

export const events = () => (
  <Events
    event={event}
    deleteEvent={action('Delete Event')}
    saveEvent={action('Save Event')}
  />
)

import React from 'react'
import SearchFilter from './SearchFilter'
import { action } from '@storybook/addon-actions'
import withMobileWrapper from '../../.storybook/preview'

export default {
  title: 'SearchFilter',
  component: SearchFilter,
  decorators: [withMobileWrapper],
}

const events = [
  {
    city: 'Hamburg',
    place: 'Planten un Blomen',
    date: '2020-06-04',
    time: '8:00',
    yogastyle: 'Vinyasa',
    details: 'Meet 10 minutes earlier at Café Seeterrassen.',
    saved: true,
  },
  {
    city: 'Rostock',
    place: 'Stadthafen',
    date: '2020-06-01',
    time: '7:30',
    yogastyle: 'Yin Yoga',
    details: 'Meet at Besitos, bring Yoga blocks if you like.',
    saved: true,
  },
]

export const searchfilter = () => (
  <div style={{ margin: 44 }}>
    <SearchFilter events={events} onSearchFilter={action('onSelect')} />
  </div>
)

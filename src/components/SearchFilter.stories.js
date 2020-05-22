import React from 'react'
import SearchFilter from './SearchFilter'
import { withKnobs, select } from '@storybook/addon-knobs'
import withMobileWrapper from '../../.storybook/preview'

export default {
  title: 'SearchFilter',
  component: SearchFilter,
  decorators: [withMobileWrapper, withKnobs],
}

const label = 'events'
const events = [
  {
    city: 'Hamburg',
  },
  {
    city: 'Rostock',
  },
  {
    city: 'Berlin',
  },
]
const defaultValue = events[0]
const value = select(label, events, defaultValue)

export const searchfilter = () => (
  <div style={{ margin: 44 }}>
    <SearchFilter events={events} onSelect={value} />
  </div>
)

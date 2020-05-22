import React from 'react'
import SearchFilter from './SearchFilter'
import { action } from '@storybook/addon-actions'
import { withKnobs, array } from '@storybook/addon-knobs'
import withMobileWrapper from '../../.storybook/preview'

export default {
  title: 'SearchFilter',
  component: SearchFilter,
  decorators: [withMobileWrapper, withKnobs],
}

const label = 'city'
const defaultValue = ['hamburg']
const separator = ':'
const events = array(label, defaultValue, separator)

export const searchfilter = () => (
  <div style={{ margin: 44 }}>
    <SearchFilter events={events} onSelect={action('onSelect')} />
  </div>
)

import React from 'react'
import SearchFilter from './SearchFilter'
import { action } from '@storybook/addon-actions'
import withMobileWrapper from '../../.storybook/preview'

export default {
  title: 'SearchFilter',
  component: SearchFilter,
  decorators: [withMobileWrapper],
}

export const searchfilter = () => (
  <div style={{ margin: 44 }}>
    <SearchFilter onSearchFilter={action('onChange')} />
  </div>
)

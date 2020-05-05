import React from 'react'
import SearchFilter from './SearchFilter'
import { action } from '@storybook/addon-actions'

export default {
  title: 'SearchFilter',
  component: SearchFilter,
}

export const searchfilter = () => (
  <div style={{ margin: 44 }}>
    <SearchFilter onSearchFilter={action('onChange')} />
  </div>
)

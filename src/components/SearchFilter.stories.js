import React from 'react'
import SearchFilter from './SearchFilter'
import { action } from '@storybook/addon-actions'

export default {
  title: 'SearchFilter',
  component: SearchFilter,
}

export const searchfilter = () => <SearchFilter onChange={action('onChange')} />

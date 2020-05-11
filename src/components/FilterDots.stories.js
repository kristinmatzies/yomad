import React from 'react'
import FilterDots from './FilterDots'
import withMobileWrapper from '../../.storybook/withMobileWrapper'

export default {
  title: 'FilterDots',
  component: FilterDots,
  decorators: [withMobileWrapper],
}

export const FliterDots = () => (
  <div style={{ position: 'relative' }}>
    <FilterDots />
  </div>
)

export const activeFliterDots = () => (
  <div style={{ position: 'relative' }}>
    <FilterDots isFiltered />
  </div>
)

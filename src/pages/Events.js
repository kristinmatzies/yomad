import React from 'react'
import SearchFilter from '../components/SearchFilter'
import EventList from '../components/EventList'
import SaveEvents from '../components/SaveEvents'

export default function Events({ selectedCity, onChange }) {
  return (
    <main>
      <SearchFilter onChange={onChange} />
      <SaveEvents />
      <EventList selectedCity={selectedCity} />
    </main>
  )
}

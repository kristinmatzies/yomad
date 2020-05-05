import React from 'react'
import SearchFilter from '../components/SearchFilter'
import EventList from '../components/EventList'

export default function Events({ selectedCity, onChange }) {
  return (
    <main>
      <SearchFilter onChange={onChange} />
      <EventList selectedCity={selectedCity} />
    </main>
  )
}

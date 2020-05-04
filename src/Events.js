import React, { useState } from 'react'
import eventData from './eventlist.json'
import SearchFilter from './components/SearchFilter'
import EventList from './components/EventList'

export default function Events() {
  const [selectedCity, setSelectedCity] = useState('')

  return (
    <>
      <SearchFilter onChange={(event) => setSelectedCity(event.target.value)} />
      <EventList events={eventData} selectedCity={selectedCity} />
    </>
  )
}

import React, { useState } from 'react'
import eventData from './eventlist.json'
import SearchFilter from './components/SearchFilter'
import EventList from './components/EventList'

export default function Events() {
  const [events, setEvents] = useState(eventData)
  const [selectedEvents, setSelectedEvents] = useState([])

  return (
    <>
      <SearchFilter setSelectedEvents={setSelectedEvents} />
      <EventList events={events} />
    </>
  )
}

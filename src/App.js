import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import GlobalStyles from './common/GlobalStyles'
import { Route, Switch } from 'react-router-dom'
import eventData from './eventlist.json'
import Header from './components/Header'
import Footer from './components/Footer'
import EventList from './components/EventList'
import Navigation from './components/Navigation'
import FilteredEvents from './components/FilteredEvents'
import CreateEvent from './components/CreateEvent'
import { saveToStorage, loadFromStorage } from './services'
import { v4 as uuidv4 } from 'uuid'
import { useHistory } from 'react-router-dom'

export default function App() {
  const [events, setEvents] = useState(loadFromStorage('events') || eventData)
  const [selectedCity, setSelectedCity] = useState('')
  const [isFiltered, setIsFiltered] = useState(false)
  const [eventEntry, setEventEntry] = useState({
    imageSrc: '',
    city: '',
    place: '',
    date: '',
    time: '',
    yogastyle: '',
    details: '',
  })
  const history = useHistory()

  useEffect(() => {
    saveToStorage('events', events)
  }, [events])

  return (
    <>
      <GlobalStyles />
      <Header />
      <Navigation />
      <Switch>
        <Route exact path="/">
          <EventList
            events={events}
            selectedCity={selectedCity}
            saveEvent={saveEvent}
            onSearchFilter={setSearchFilter}
          />
        </Route>
        <Route path="/saved">
          <FilteredEvents
            events={events}
            selectedCity={selectedCity}
            saveEvent={saveEvent}
            onSearchFilter={setSearchFilter}
          />
        </Route>
        <Route path="/create">
          <CreateEvent
            eventEntry={eventEntry}
            updateEventEntry={updateEventEntry}
            handleSubmit={handleSubmit}
          />
        </Route>
      </Switch>
      <Footer isFiltered={isFiltered} selectedCity={selectedCity} />
    </>
  )
  function setSearchFilter(event) {
    setSelectedCity(event.target.value)
    setIsFiltered(true)
  }

  function saveEvent(index) {
    const event = events[index]
    setEvents([
      ...events.slice(0, index),
      { ...event, saved: !event.saved },
      ...events.slice(index + 1),
    ])
  }

  function addEntry(entry) {
    const uniqueEventId = uuidv4()
    setEvents([...events, { ...entry, saved: false, id: uniqueEventId }])
    console.log(events)
  }

  function updateEventEntry(event) {
    setEventEntry({ ...eventEntry, [event.target.name]: event.target.value })
  }

  function handleSubmit(event) {
    event.preventDefault()
    addEntry(eventEntry)
    setEventEntry({
      city: '',
      place: '',
      date: '',
      time: '',
      yogastyle: '',
      details: '',
    })
    history.push('/')
  }
}

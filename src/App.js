import React, { useState } from 'react'
import GlobalStyle from './common/GlobalStyle'
import eventData from './eventlist.json'
import Header from './components/Header'
import Footer from './components/Footer'
import EventList from './components/EventList'
import { Route, Switch } from 'react-router-dom'
import SearchFilter from './components/SearchFilter'
import SaveFilter from './components/SaveFilter'
import FilteredEvents from './components/FilteredEvents'

export default function App() {
  const [events, setEvents] = useState(eventData)
  const [selectedCity, setSelectedCity] = useState('')
  const [isActive, setIsActive] = useState(false)

  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <SearchFilter onSearchFilter={setSearchFilter} />
        <SaveFilter />
        <Switch>
          <Route exact path="/">
            <EventList
              events={events}
              setEvents={setEvents}
              selectedCity={selectedCity}
              saveEvent={saveEvent}
            />
          </Route>
          <Route path="/saved">
            <FilteredEvents
              events={events}
              setEvents={setEvents}
              selectedCity={selectedCity}
              saveEvent={saveEvent}
            />
          </Route>
        </Switch>
      </main>
      <Footer isActive={isActive} selectedCity={selectedCity} />
    </>
  )

  function setSearchFilter(event) {
    setSelectedCity(event.target.value)
    setIsActive(true)
  }

  function saveEvent(index) {
    const event = events[index]
    setEvents([
      ...events.slice(0, index),
      { ...event, saved: !event.saved },
      ...events.slice(index + 1),
    ])
  }
}

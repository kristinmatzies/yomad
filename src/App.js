import React, { useState, useEffect } from 'react'
import GlobalStyles from './common/GlobalStyles'
import { Route, Switch } from 'react-router-dom'
import eventData from './eventlist.json'
import Header from './components/Header'
import Footer from './components/Footer'
import EventList from './components/EventList'
import SearchFilter from './components/SearchFilter'
import Navigation from './components/Navigation'
import FilteredEvents from './components/FilteredEvents'
import { saveToStorage, loadFromStorage } from './services'

export default function App() {
  const [events, setEvents] = useState(loadFromStorage('events') || eventData)
  const [selectedCity, setSelectedCity] = useState('')
  const [isFiltered, setIsFiltered] = useState(false)

  useEffect(() => {
    saveToStorage('events', events)
  }, [events])

  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <SearchFilter onSearchFilter={setSearchFilter} />
        <Navigation />
        <Switch>
          <Route exact path="/">
            <EventList
              events={events}
              selectedCity={selectedCity}
              saveEvent={saveEvent}
            />
          </Route>
          <Route path="/saved">
            <FilteredEvents
              events={events}
              selectedCity={selectedCity}
              saveEvent={saveEvent}
            />
          </Route>
        </Switch>
      </main>
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
}

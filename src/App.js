import React, { useState } from 'react'
import GlobalStyle from './common/GlobalStyle'
import Header from './components/Header'
import Footer from './components/Footer'
import EventList from './components/EventList'
import { Route, Switch } from 'react-router-dom'
import SearchFilter from './components/SearchFilter'
import SaveFilter from './components/SaveFilter'

export default function App() {
  const [selectedCity, setSelectedCity] = useState('')
  const [isActive, setIsActive] = useState(false)

  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <SearchFilter onChange={setFilter} />
        <SaveFilter />
        <Switch>
          <Route exact path="/">
            <EventList selectedCity={selectedCity} />
          </Route>
          <Route path="/saved">
            <EventList selectedCity={selectedCity} />
          </Route>
        </Switch>
      </main>
      <Footer isActive={isActive} selectedCity={selectedCity} />
    </>
  )

  function setFilter(event) {
    setSelectedCity(event.target.value)
    setIsActive(true)
  }
}

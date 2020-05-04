import React, { useState } from 'react'
import Header from './components/Header'
import Events from './pages/Events'
import Footer from './components/Footer'

export default function App() {
  const [selectedCity, setSelectedCity] = useState('')
  const [isActive, setIsActive] = useState(false)

  return (
    <>
      <Header />
      <Events selectedCity={selectedCity} onChange={handleChange} />
      <Footer isActive={isActive} selectedCity={selectedCity} />
    </>
  )

  function handleChange(event) {
    setSelectedCity(event.target.value)
    setIsActive(true)
  }
}

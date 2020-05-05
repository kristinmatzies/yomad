import React, { useState } from 'react'
import SearchFilter from '../components/SearchFilter'
import EventList from '../components/EventList'
import SaveEvents from '../components/SaveEvents'

export default function Events({ selectedCity, onChange }) {
  const [isButtonClicked, setIsButtonClicked] = useState(false)
  return (
    <main>
      <SearchFilter onChange={onChange} />
      <SaveEvents />
      <EventList
        selectedCity={selectedCity}
        isClicked={isButtonClicked}
        onClick={() => setIsButtonClicked(!isButtonClicked)}
        defaultText="Save"
        clickedText="Saved"
      />
    </main>
  )
}

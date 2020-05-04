import React from 'react'
import eventData from '../eventlist.json'
import SearchFilter from '../components/SearchFilter'
import EventList from '../components/EventList'
import styled from 'styled-components'

export default function Events({ selectedCity, onChange }) {
  return (
    <MainSection>
      <SearchFilter onChange={onChange} />
      <EventList events={eventData} selectedCity={selectedCity} />
    </MainSection>
  )
}

const MainSection = styled.main`
  overflow: hidden;
`

/*export default function Events() {
  const [selectedCity, setSelectedCity] = useState('')

  return (
    <MainSection>
      <SearchFilter onChange={setSelectedCity} />
      <EventList events={eventData} selectedCity={selectedCity} />
    </MainSection>
  )
}*/

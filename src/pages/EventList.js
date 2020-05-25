import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Events from '../components/Events'
import SearchFilter from '../components/SearchFilter'
import { loadFromStorage } from '../services'

EventList.propTypes = {
  events: PropTypes.array.isRequired,
  saveEvent: PropTypes.func.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  onlySaved: PropTypes.bool,
}

export default function EventList({
  events,
  saveEvent,
  deleteEvent,
  onlySaved,
  users,
}) {
  const [selectedCity, setSelectedCity] = useState('')
  const userId = loadFromStorage('profileId') || ''
  const user = users.find((user) => userId === user.id)
  const filteredEvents = events.filter(
    (event) =>
      event.city.toLowerCase().includes(selectedCity.toLowerCase()) &&
      (onlySaved
        ? user
          ? user.saved.some((item) => item === event.id)
          : event.saved
        : true)
  )
  return (
    <Wrapper>
      <SearchFilter onSelect={setSearchFilter} events={events} />
      <Scroller>
        {filteredEvents
          .slice()
          .sort(
            (eventA, eventB) =>
              eventA.date.localeCompare(eventB.date) ||
              eventA.time.localeCompare(eventB.time)
          )
          .map((event) => (
            <ScrollContainer key={event.id}>
              <Events
                saveEvent={saveEvent}
                event={event}
                deleteEvent={deleteEvent}
                users={users}
              />
            </ScrollContainer>
          ))}
      </Scroller>
    </Wrapper>
  )
  function setSearchFilter(event) {
    setSelectedCity(event.target.value)
  }
}

const Wrapper = styled.main`
  overflow-y: hidden;

  @media (max-height: 580px) {
    overflow-y: scroll;
  }
`

const Scroller = styled.section`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
`

const ScrollContainer = styled.section`
  flex: 0 0 90%;
  scroll-snap-align: start;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1.3fr 1fr;
  margin-right: 4px;
  background: var(--background);
  height: 100%;

  :last-child {
    flex: 0 0 100%;
  }
`

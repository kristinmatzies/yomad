import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Events from '../components/Events'
import SearchFilter from '../components/SearchFilter'

EventList.propTypes = {
  events: PropTypes.array.isRequired,
  selectedCity: PropTypes.string.isRequired,
  saveEvent: PropTypes.func.isRequired,
  onSearchFilter: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool,
  deleteEvent: PropTypes.func.isRequired,
}

export default function EventList({
  events,
  selectedCity,
  saveEvent,
  onSearchFilter,
  isFiltered,
  deleteEvent,
  onlySaved,
}) {
  const filteredEvents = events.filter(
    (event) =>
      event.city.toLowerCase().includes(selectedCity.toLowerCase()) &&
      (onlySaved ? event.saved : true)
  )

  return (
    <Wrapper>
      <SearchFilter
        className="span"
        onSearchFilter={onSearchFilter}
        isFiltered={isFiltered}
        selectedCity={selectedCity}
      />
      <Scroller>
        {filteredEvents.length === 0 ? (
          <p>No search results found.</p>
        ) : (
          filteredEvents.map((event, index) => (
            <ScrollContainer key={index}>
              <Events
                saveEvent={saveEvent}
                event={event}
                deleteEvent={deleteEvent}
              />
            </ScrollContainer>
          ))
        )}
      </Scroller>
    </Wrapper>
  )
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

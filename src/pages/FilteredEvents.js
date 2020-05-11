import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Events from '../components/Events'
import SearchFilter from '../components/SearchFilter'

FilteredEvents.propTypes = {
  events: PropTypes.array.isRequired,
  selectedCity: PropTypes.string.isRequired,
  saveEvent: PropTypes.func.isRequired,
  onSearchFilter: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool,
  deleteEvent: PropTypes.func.isRequired,
}

export default function FilteredEvents({
  events,
  selectedCity,
  saveEvent,
  onSearchFilter,
  isFiltered,
  deleteEvent,
}) {
  return (
    <Wrapper>
      <SearchFilter
        onSearchFilter={onSearchFilter}
        isFiltered={isFiltered}
        selectedCity={selectedCity}
      />
      <Scroller>
        {events
          .filter((event) =>
            event.city.toLowerCase().includes(selectedCity.toLowerCase())
          )
          .map((event, index) => (
            <>
              {event.saved === true && (
                <ScrollContainer key={event.id}>
                  <Events
                    saveEvent={saveEvent}
                    event={event}
                    index={index}
                    deleteEvent={() => deleteEvent(index)}
                  />
                </ScrollContainer>
              )}
            </>
          ))}
      </Scroller>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  overflow-y: hidden;

  @media (max-height: 650px) {
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
  height: 100vh;

  :last-child {
    flex: 0 0 100%;
  }
`

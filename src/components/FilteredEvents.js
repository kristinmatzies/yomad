import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Events from './Events'

FilteredEvents.propTypes = {
  events: PropTypes.array.isRequired,
  selectedCity: PropTypes.string.isRequired,
  saveEvent: PropTypes.func.isRequired,
}

export default function FilteredEvents({ events, selectedCity, saveEvent }) {
  return (
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
                  events={events}
                  saveEvent={saveEvent}
                  event={event}
                  index={index}
                />
              </ScrollContainer>
            )}
          </>
        ))}
    </Scroller>
  )
}

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
  grid-template-rows: 1.5fr 1fr;
  margin-right: 4px;
  background: var(--background);

  :last-child {
    flex: 0 0 100%;
  }
`

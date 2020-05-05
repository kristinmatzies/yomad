import React from 'react'
import styled from 'styled-components/macro'
import SaveButton from './SaveButton'

export default function EventList({ events, selectedCity, saveEvent }) {
  return (
    <Scroller>
      {events
        .filter((event) =>
          event.city.toLowerCase().includes(selectedCity.toLowerCase())
        )
        .map((event, index) => (
          <>
            <ScrollContainer key={event.id}>
              <img src={event.imageSrc} alt="" />
              <EventText>
                <p className="event_key">City</p>
                <p className="event_title">{event.city}</p>
                <p className="event_key">Place</p>
                <p className="event_value">
                  <img src="./img/icon_place.png" alt="" />
                  &nbsp;{event.place}
                </p>
                <p className="event_key">Date</p>
                <p className="event_value">
                  <img src="./img/icon_calendar.png" alt="" />
                  &nbsp;{event.date}
                </p>
                <p className="event_key">Time</p>
                <p className="event_value">
                  <img src="./img/icon_clock.png" alt="" />
                  &nbsp;{event.time}
                </p>
                <p className="event_key">Yogastyle</p>
                <p className="event_value">
                  <img src="./img/icon_yoga.png" alt="" />
                  &nbsp;{event.yogastyle}
                </p>
                <SaveButton
                  defaultText="save"
                  clickedText="saved"
                  onClick={() => saveEvent(index)}
                  saved={event.saved}
                />
              </EventText>
              <EventDetails>
                <p className="details_headline">Details on meeting point</p>
                <p className="details_body">{event.details}</p>
              </EventDetails>
            </ScrollContainer>
          </>
        ))}
    </Scroller>
  )
}

const Scroller = styled.section`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  height: 100vh;
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

  img {
    object-fit: cover;
    width: 180px;
    height: 364px;
    border-radius: 0 12px 12px 0;
    align-self: flex-start;
  }
`

const EventText = styled.section`
  align-self: flex-start;
  justify-self: flex-start;
  margin-left: 12px;
  position: relative;

  img {
    height: 16px;
    width: 16px;
  }
  .event_title {
    font-weight: bold;
    margin: 0;
  }

  .event_key {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 12px;
    margin-bottom: 0;
    color: var(--secondary);
  }

  .event_value {
    margin: 0;
  }
`

const EventDetails = styled.section`
  grid-column: span 2;
  justify-self: flex-start;
  align-self: flex-start;
  padding-left: 12px;

  .details_headline {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 12px;
    margin-bottom: 8px;
    color: var(--secondary);
  }

  .details_body {
    margin: 0;
  }
`

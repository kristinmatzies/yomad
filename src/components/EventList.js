import React from 'react'
import styled from 'styled-components'
import events from '../eventlist.json'

export default function EventList() {
  return (
    <Scroller>
      {events.map((event) => (
        <ScrollContainer>
          <img src={event.imageSrc} alt="" />
          <EventText>
            <p className="event_keys">City</p>
            <p className="event_value">{event.city}</p>
            <p className="event_keys">Place</p>
            <p className="event_value">{event.place}</p>
            <p className="event_keys">Date</p>
            <p className="event_value">{event.date}</p>
            <p className="event_keys">Time</p>
            <p className="event_value">{event.time}</p>
            <p className="event_keys">Yogastyle</p>
            <p className="event_value">{event.yogastyle}</p>
          </EventText>
          <EventDetails>
            <p className="details_headline">Details on meeting point</p>
            <p className="details_body">{event.details}</p>
          </EventDetails>
        </ScrollContainer>
      ))}
    </Scroller>
  )
}

const Scroller = styled.section`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  height: 100vh;
`

const ScrollContainer = styled.section`
  flex: 0 0 90%;
  scroll-snap-align: start;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1.5fr 1fr;
  margin-right: 20px;

  :last-child {
    flex: 0 0 100%;
  }

  img {
    object-fit: cover;
    width: 180px;
    height: 360px;
    border-radius: 0 12px 12px 0;
    align-self: flex-start;
  }
`

const EventText = styled.section`
  align-self: flex-start;
  justify-self: flex-start;
  margin-left: 12px;

  .event_keys {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 12px;
    margin-bottom: 2px;
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
    overflow: ellipsis;
  }
`

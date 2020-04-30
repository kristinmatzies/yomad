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
            <p>{event.place}</p>
            <p>{event.date}</p>
            <p>{event.time}</p>
            <p>{event.yogastyle}</p>
          </EventText>
          <p className="details_styled">{event.details}</p>
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
  margin-right: 20px;

  img {
    object-fit: cover;
    width: 180px;
    height: 320px;
    border-radius: 0 12px 12px 0;
    align-self: center;
  }

  .details_styled {
    grid-column: span 2;
    justify-self: flex-start;
    padding-left: 12px;
  }
`

const EventText = styled.section`
  align-self: center;
  justify-self: flex-start;
  margin-left: 12px;
`

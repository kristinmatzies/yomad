import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import SaveButton from './SaveButton'
import useUserServices from '../hooks/useUserServices'

Events.propTypes = {
  event: PropTypes.object.isRequired,
  users: PropTypes.array,
  user: PropTypes.object,
  userId: PropTypes.string,
  saveEvent: PropTypes.func.isRequired,
  deleteEvent: PropTypes.func.isRequired,
}

export default function Events({ event, saveEvent, deleteEvent }) {
  const { users, userId, user } = useUserServices()
  const userById = users.filter((user) => event.userId === user.id)

  return (
    <>
      {event.imageSrc === '' ? (
        <ImgStyled src="./img/default_img.jpg" alt="" />
      ) : (
        <ImgStyled src={event.imageSrc} alt="" />
      )}
      <EventText data-cy="eventtext">
        {event.userId === userId && (
          <button className="delete-button" onClick={() => deleteEvent(event)}>
            x
          </button>
        )}
        <p className="event_key">City</p>
        <p className="event_title" data-cy="event_city">
          {event.city}
        </p>
        <p className="event_key">Place</p>
        <p className="event_value">
          <img src="./img/icon_place.png" alt="" />
          <a
            href={
              'https://www.google.com/maps/search/?api=1&query=' + event.place
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            {event.place}
          </a>
        </p>
        <p className="event_key">Date</p>
        <p className="event_value">
          <img src="./img/icon_calendar.png" alt="" />
          {event.date}
        </p>
        <p className="event_key">Time</p>
        <p className="event_value">
          <img src="./img/icon_clock.png" alt="" />
          {event.time}
        </p>
        <p className="event_key">Yogastyle</p>
        <p className="event_value">
          <img src="./img/icon_yoga.png" alt="" />
          {event.yogastyle}
        </p>
        <SaveButton
          defaultText="save"
          clickedText="saved"
          onClick={() => saveEvent(event)}
          saved={
            user ? user.saved.some((item) => item === event.id) : event.saved
          }
        />
      </EventText>
      <EventDetails>
        {userById.map((user) => (
          <Username key={user.uid}>
            <span>session by </span>
            {user.name}
          </Username>
        ))}
        <p className="details_headline">Details on meeting point</p>
        <p className="details_body">{event.details}</p>
      </EventDetails>
    </>
  )
}

const ImgStyled = styled.img`
  object-fit: cover;
  width: 180px;
  height: 364px;
  border-radius: 0 12px 12px 0;
  align-self: flex-start;

  @media (max-height: 580px) {
    width: 132px;
    height: 360px;
  }
`

const EventText = styled.section`
  align-self: flex-start;
  justify-self: flex-start;
  margin-left: 12px;
  position: relative;

  .delete-button {
    position: absolute;
    left: 116px;
    top: 4px;
    color: var(--primary);
    border-radius: 50%;
    border: none;
    height: 24px;
    width: 24px;
    text-align: center;
    background: var(--quaternary);
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.4), inset 0 0 1px 1px white;
  }

  img {
    height: 16px;
    width: 16px;
    margin-right: 4px;
  }

  a {
    color: var(--primary);
    cursor: default;
  }

  .event_title {
    font-weight: bold;
    margin: 0;

    ::first-letter {
      text-transform: uppercase;
    }
  }

  .event_key {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 12px;
    margin-top: 16px;
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
  height: 140px;
  position: relative;

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

const Username = styled.div`
  font-size: 12px;
  font-weight: bold;
  background: var(--quaternary);
  opacity: 0.7;
  width: 180px;
  position: absolute;
  left: 0;
  top: -32px;
  padding-left: 14px;

  @media (max-height: 580px) {
    top: -40px;
    width: 132px;
  }

  span {
    font-style: italic;
    font-weight: normal;
  }
`

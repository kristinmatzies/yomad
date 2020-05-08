import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { useHistory } from 'react-router-dom'

export default function CreateEvent({ addEntry }) {
  const history = useHistory()
  const [eventEntry, setEventEntry] = useState({
    city: '',
    place: '',
    date: '',
    time: '',
    yogastyle: '',
    details: '',
  })

  return (
    <FormWrapper>
      <FormStyled onSubmit={handleSubmit}>
        <label htmlFor="city">City</label>
        <input
          id="city"
          type="text"
          name="city"
          onChange={updateEventEntry}
          value={eventEntry.city}
          placeholder="e.g. Hamburg"
        />
        <label htmlFor="place">Place</label>
        <input
          id="place"
          type="text"
          name="place"
          placeholder="e.g. Schanzenpark"
          onChange={updateEventEntry}
          value={eventEntry.place}
        />
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          placeholder="2nd November 2020"
          onChange={updateEventEntry}
          value={eventEntry.date}
        />
        <label htmlFor="time">Time</label>
        <input
          id="time"
          type="time"
          name="time"
          placeholder="8.00 am"
          onChange={updateEventEntry}
          value={eventEntry.time}
        />

        <label htmlFor="yogastyle">Yogastyle</label>
        <input
          id="yogastyle"
          type="text"
          name="yogastyle"
          placeholder="e.g. Vinyasa"
          onChange={updateEventEntry}
          value={eventEntry.yogastyle}
        />
        <label htmlFor="details">Details on meeting point</label>
        <textarea
          id="details"
          type="text"
          name="details"
          placeholder="e.g. Meet in front of Peter Pane"
          onChange={updateEventEntry}
          value={eventEntry.details}
        />
        <SubmitButtonStyled type="submit">Add</SubmitButtonStyled>
      </FormStyled>
    </FormWrapper>
  )

  function updateEventEntry(event) {
    setEventEntry({ ...eventEntry, [event.target.name]: event.target.value })
  }

  function handleSubmit(event) {
    event.preventDefault()
    addEntry(eventEntry)
    setEventEntry({
      city: '',
      place: '',
      date: '',
      time: '',
      yogastyle: '',
      details: '',
    })
    history.push('/')
  }
}

const FormWrapper = styled.section`
  display: grid;
  grid-template-rows: auto;
  height: 100vh;
`

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px;
  font-size: 12px;
  overflow-y: scroll;

  label {
    color: var(--primary);
    text-transform: uppercase;
  }

  input {
    background: lightgray;
    padding: 12px;
    border: none;
    border-radius: 4px;
    height: 35px;
    margin-bottom: 12px;
  }

  textarea {
    background: lightgray;
    padding: 12px;
    border: none;
    border-radius: 4px;
    height: 60px;
    margin-bottom: 12px;
  }
`

const SubmitButtonStyled = styled.button`
  padding: 8px 48px;
  margin: 0 20px;
  border: none;
  background: var(--cta);
  color: white;
  border-radius: 16px;
  box-shadow: 2px 2px 2px var(--primary);
  justify-content: center;
`

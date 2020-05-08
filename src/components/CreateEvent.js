import React from 'react'
import styled from 'styled-components/macro'
import ImageUpload from './ImageUpload'
import PropTypes from 'prop-types'

CreateEvent.propTypes = {
  eventEntry: PropTypes.object,
  updateEventEntry: PropTypes.func,
  handleSubmit: PropTypes.func,
}

export default function CreateEvent({
  eventEntry,
  updateEventEntry,
  handleSubmit,
}) {
  return (
    <FormWrapper>
      <FormStyled onSubmit={handleSubmit}>
        <ImageUpload
          updateEventEntry={updateEventEntry}
          imageSrc={eventEntry.imageSrc}
        />
        <label htmlFor="city">City*</label>
        <input
          id="city"
          type="text"
          name="city"
          onChange={updateEventEntry}
          value={eventEntry.city}
          placeholder="e.g. Hamburg"
          required
        />
        <label htmlFor="place">Place*</label>
        <input
          id="place"
          type="text"
          name="place"
          placeholder="e.g. Schanzenpark"
          onChange={updateEventEntry}
          value={eventEntry.place}
          required
        />
        <label htmlFor="date">Date*</label>
        <input
          id="date"
          type="date"
          name="date"
          placeholder="2020-05-11"
          onChange={updateEventEntry}
          value={eventEntry.date}
          required
        />
        <label htmlFor="time">Time*</label>
        <input
          id="time"
          type="time"
          name="time"
          placeholder="e.g. 8:00"
          onChange={updateEventEntry}
          value={eventEntry.time}
          required
        />

        <label htmlFor="yogastyle">Yogastyle*</label>
        <input
          id="yogastyle"
          type="text"
          name="yogastyle"
          placeholder="e.g. Vinyasa"
          onChange={updateEventEntry}
          value={eventEntry.yogastyle}
          required
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
        <p>*Mandatory fields</p>
        <SubmitButtonStyled type="submit">Add</SubmitButtonStyled>
      </FormStyled>
    </FormWrapper>
  )
}

const FormWrapper = styled.main`
  display: grid;
  grid-template-rows: auto;
  color: var(--primary);
  overflow-y: scroll;
`

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px;
  font-size: 12px;
  border-radius: 4px;

  label {
    text-transform: uppercase;
  }

  input {
    background: var(--quaternary);
    padding: 12px;
    border: none;
    border-radius: 4px;
    height: 35px;
    margin-bottom: 12px;
  }

  textarea {
    background: var(--quaternary);
    padding: 12px;
    border: none;
    border-radius: 4px;
    height: 60px;
  }

  p {
    margin: 0;
  }
`

const SubmitButtonStyled = styled.button`
  font-size: 18px;
  padding: 8px 48px;
  margin: 12px 20px;
  border: none;
  background: var(--cta);
  color: white;
  border-radius: 16px;
  box-shadow: 2px 2px 2px var(--primary);
  justify-content: center;
`

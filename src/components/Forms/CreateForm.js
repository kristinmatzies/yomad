import React from 'react'
import styled from 'styled-components/macro'
import ImageUpload from '../ImageUpload/ImageUpload'
import PropTypes from 'prop-types'
import Button from '../Buttons/Button'

CreateForm.propTypes = {
  eventEntry: PropTypes.object,
  updateEventEntry: PropTypes.func,
  submitNewEvent: PropTypes.func,
  updateImage: PropTypes.func,
  previewImage: PropTypes.object,
}

export default function CreateForm({
  eventEntry,
  updateEventEntry,
  submitNewEvent,
  updateImage,
  previewImage,
}) {
  return (
    <FormStyled data-cy="create_event" onSubmit={submitNewEvent}>
      <ImageUpload updateImage={updateImage} previewImage={previewImage} />
      <label htmlFor="city">City*</label>
      <input
        id="city"
        type="text"
        name="city"
        onChange={updateEventEntry}
        value={eventEntry.city}
        placeholder="e.g. Hamburg (max. 20)"
        maxLength="20"
        required
      />
      <label htmlFor="place">Place*</label>
      <input
        id="place"
        type="text"
        name="place"
        placeholder="e.g. Schanzenpark (max. 25)"
        onChange={updateEventEntry}
        value={eventEntry.place}
        maxLength="25"
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
        placeholder="e.g. Vinyasa (max. 15)"
        onChange={updateEventEntry}
        value={eventEntry.yogastyle}
        maxLength="15"
        required
      />
      <label htmlFor="details">Details on meeting point (max. 120)</label>
      <textarea
        id="details"
        type="text"
        name="details"
        placeholder="e.g. Meet in front of Peter Pane"
        onChange={updateEventEntry}
        value={eventEntry.details}
        maxLength="120"
      />
      <p>*Mandatory fields</p>
      <Button data-cy="submit_button" type="submit">
        Add new session
      </Button>
    </FormStyled>
  )
}

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px;
  border-radius: 4px;
  padding-bottom: 20px;

  @media (max-width: 360px) {
    width: 280px;
  }

  label {
    text-transform: uppercase;
    font-size: 12px;
  }

  input {
    background: var(--quaternary);
    padding: 12px;
    border: none;
    border-radius: 4px;
    height: 35px;
    margin-bottom: 12px;

    ::placeholder {
      color: var(--primary);
      font-size: 12px;
    }
  }

  textarea {
    background: var(--quaternary);
    padding: 12px;
    border: none;
    border-radius: 4px;
    height: 60px;

    ::placeholder {
      color: var(--primary);
      font-size: 12px;
    }
  }

  p {
    margin: 0;
    font-size: 8px;
  }
`

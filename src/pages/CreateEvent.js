import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import CreateForm from '../components/CreateForm'

CreateEvent.propTypes = {
  eventEntry: PropTypes.object,
  updateEventEntry: PropTypes.func,
  submitNewEvent: PropTypes.func,
  updateImage: PropTypes.func,
  previewImage: PropTypes.object,
}

export default function CreateEvent({
  event,
  updateEventEntry,
  submitNewEvent,
  updateImage,
  previewImage,
}) {
  return (
    <FormWrapper>
      <CreateForm
        event={event}
        updateEventEntry={updateEventEntry}
        submitNewEvent={submitNewEvent}
        updateImage={updateImage}
        previewImage={previewImage}
      />
    </FormWrapper>
  )
}

const FormWrapper = styled.main`
  display: grid;
  grid-template-rows: auto;
  color: var(--primary);
  overflow-y: scroll;
`

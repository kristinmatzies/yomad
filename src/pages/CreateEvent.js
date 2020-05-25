import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import CreateForm from '../components/CreateForm'
import { useHistory, NavLink } from 'react-router-dom'
import { db, storage } from '../firebase'

CreateEvent.propTypes = {
  userId: PropTypes.string,
}

export default function CreateEvent({ userId }) {
  const [previewImage, setPreviewImage] = useState({
    imageUrl: '',
    imageName: '',
  })
  const [eventEntry, setEventEntry] = useState({
    city: '',
    place: '',
    date: '',
    time: '',
    yogastyle: '',
    details: '',
  })
  const history = useHistory()

  return (
    <FormWrapper>
      {userId !== '' ? (
        <CreateForm
          eventEntry={eventEntry}
          updateEventEntry={updateEventEntry}
          submitNewEvent={submitNewEvent}
          updateImage={handleImageUpload}
          previewImage={previewImage}
        />
      ) : (
        <InfoStyled>
          Please create a profile to add your own Yoga sessions:
          <LinkStyled to="/createprofile">Click here</LinkStyled>
        </InfoStyled>
      )}
    </FormWrapper>
  )

  function updateEventEntry(event) {
    setEventEntry({ ...eventEntry, [event.target.name]: event.target.value })
  }

  function handleImageUpload(event) {
    const image = event.target.files[0]
    const uploadTask = storage.ref(`images/${image.name}`).put(image)
    uploadTask.on(
      'state_changed',
      (snapshot) => {},
      (error) => {
        alert('An error occurred, please try again.')
      },
      () => {
        storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then((fireBaseUrl) => {
            setPreviewImage({ imageUrl: fireBaseUrl, imageName: image.name })
          })
      }
    )
  }

  function submitNewEvent(event) {
    event.preventDefault()
    const newEvent = {
      imageTitle: previewImage.imageName,
      imageSrc: previewImage.imageUrl,
      city: eventEntry.city,
      place: eventEntry.place,
      date: eventEntry.date,
      time: eventEntry.time,
      yogastyle: eventEntry.yogastyle,
      details: eventEntry.details,
      saved: true,
      userId: userId,
    }

    db.collection('events')
      .add(newEvent)
      .then(() => console.log('New event added'))
      .catch((error) =>
        alert('Oops something went wrong. Try again later.', error)
      )
    setEventEntry({
      city: '',
      place: '',
      date: '',
      time: '',
      yogastyle: '',
      details: '',
    })
    setPreviewImage({
      imageUrl: '',
      imageName: '',
    })
    history.push('/')
  }
}

const FormWrapper = styled.main`
  display: grid;
  grid-template-rows: auto;
  color: var(--primary);
  overflow-y: scroll;
`

const InfoStyled = styled.p`
  padding: 12px;
`

const LinkStyled = styled(NavLink)`
  color: var(--primary);
  margin-left: 8px;
`

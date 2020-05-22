import React, { useState } from 'react'
import styled from 'styled-components/macro'
import CreateForm from '../components/CreateForm'
import { useHistory, NavLink } from 'react-router-dom'
import { storage } from '../firebase'
import { db } from '../firebase'
import { loadFromStorage } from '../services'

export default function CreateEvent() {
  const [previewImage, setPreviewImage] = useState({
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/yomad-2e8f7.appspot.com/o/images%2Fdefault_img.jpg?alt=media&token=903c68aa-aa04-405a-a39e-3c62097d8bb4',
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
  const userId = loadFromStorage('profileId') || ''

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
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/yomad-2e8f7.appspot.com/o/images%2Fdefault_img.jpg?alt=media&token=903c68aa-aa04-405a-a39e-3c62097d8bb4',
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

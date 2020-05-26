import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { db, storage } from '../firebase'
import { useHistory } from 'react-router-dom'
import ProfileForm from '../components/Forms/ProfileForm'
import { v4 as uuidv4 } from 'uuid'
import { saveToStorage } from '../services'

export default function CreateProfile() {
  const [user, setUser] = useState({
    name: '',
    city: '',
    yogalevel: '',
  })

  const [previewProfileImage, setPreviewProfileImage] = useState({
    profileImageUrl: '',
    profileImageName: '',
  })

  const history = useHistory()
  const uniqueProfileId = uuidv4()

  return (
    <FormWrapper>
      <ProfileForm
        user={user}
        updateProfile={updateProfile}
        submitNewProfile={submitNewProfile}
        updateProfileImage={handleImageUploadProfile}
        previewProfileImage={previewProfileImage}
      />
    </FormWrapper>
  )

  function updateProfile(event) {
    setUser({ ...user, [event.target.name]: event.target.value })
  }

  function handleImageUploadProfile(event) {
    const image = event.target.files[0]
    const uploadTask = storage.ref(`profile/${image.name}`).put(image)
    uploadTask.on(
      'state_changed',
      (snapshot) => {},
      (error) => {
        alert('An error occurred, please try again.')
      },
      () => {
        storage
          .ref('profile')
          .child(image.name)
          .getDownloadURL()
          .then((fireBaseUrl) => {
            setPreviewProfileImage({
              profileImageUrl: fireBaseUrl,
              profileImageName: image.name,
            })
          })
      }
    )
  }

  function submitNewProfile(event) {
    event.preventDefault()
    const newProfile = {
      imageTitle: previewProfileImage.profileImageName,
      imageSrc: previewProfileImage.profileImageUrl,
      name: user.name,
      city: user.city,
      yogalevel: user.yogalevel,
      saved: [],
      id: uniqueProfileId,
    }
    db.collection('users')
      .add(newProfile)
      .then(() => console.log('New user added'))
      .catch((error) =>
        alert('Oops something went wrong. Try again later.', error)
      )
    saveToStorage('profileId', newProfile.id)
    setUser({
      name: '',
      city: '',
      yogalevel: '',
    })
    setPreviewProfileImage({
      profileImageUrl: '',
      profileImageName: '',
    })
    history.push('/profile')
  }
}

const FormWrapper = styled.main`
  display: grid;
  grid-template-rows: auto;
  color: var(--primary);
  overflow-y: scroll;
`

import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { storage } from '../firebase'
import { db } from '../firebase'
import { useHistory } from 'react-router-dom'
import ProfileForm from '../components/ProfileForm'

export default function CreateProfile({ profiles }) {
  const [profile, setProfile] = useState({
    name: '',
    city: '',
    yogalevel: '',
  })

  const [previewProfileImage, setPreviewProfileImage] = useState({
    profileImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/yomad-2e8f7.appspot.com/o/profile%2Fuser_default.png?alt=media&token=19fad0bb-7eb8-4bef-b5de-b819b8152507',
    profileImageName: '',
  })
  const history = useHistory()

  return (
    <FormWrapper>
      <ProfileForm
        profile={profile}
        updateProfile={updateProfile}
        submitNewProfile={submitNewProfile}
        updateProfileImage={handleImageUploadProfile}
        previewProfileImage={previewProfileImage}
      />
    </FormWrapper>
  )

  function updateProfile(event) {
    setProfile({ ...profile, [event.target.name]: event.target.value })
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
      name: profile.name,
      city: profile.city,
      yogalevel: profile.yogalevel,
    }

    db.collection('profiles')
      .add(newProfile)
      .then(() => console.log('New profile added'))
      .catch((error) =>
        alert('Oops something went wrong. Try again later.', error)
      )
    setProfile({
      name: '',
      city: '',
      yogalevel: '',
    })
    setPreviewProfileImage({
      profileImageUrl:
        'https://firebasestorage.googleapis.com/v0/b/yomad-2e8f7.appspot.com/o/profile%2Fuser_default.png?alt=media&token=19fad0bb-7eb8-4bef-b5de-b819b8152507',
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

import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import ImageUploadProfile from '../ImageUpload/ImageUploadProfile'
import Button from '../Buttons/Button'

ProfileForm.propTypes = {
  user: PropTypes.object.isRequired,
  updateProfile: PropTypes.func,
  submitNewProfile: PropTypes.func.isRequired,
  updateProfileImage: PropTypes.func,
  previewProfileImage: PropTypes.object.isRequired,
}

export default function ProfileForm({
  user,
  updateProfile,
  submitNewProfile,
  updateProfileImage,
  previewProfileImage,
}) {
  return (
    <FormStyled data-cy="create_profil" onSubmit={submitNewProfile}>
      <ImageUploadProfile
        updateProfileImage={updateProfileImage}
        previewProfileImage={previewProfileImage}
      />
      <label htmlFor="name">Your Name*</label>
      <input
        id="name"
        type="text"
        name="name"
        onChange={updateProfile}
        value={user.name}
        placeholder="e.g. Maxi"
        maxLength="20"
        required
      />
      <label htmlFor="city">Your City*</label>
      <input
        id="city"
        type="text"
        name="city"
        placeholder="e.g. Berlin"
        onChange={updateProfile}
        value={user.city}
        maxLength="25"
        required
      />
      <label htmlFor="yogalevel">Your Yogalevel*</label>
      <select id="yogalevel" name="yogalevel" onChange={updateProfile} required>
        <option className="select-placeholder" hidden>
          Choose here
        </option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Profi">Profi</option>
      </select>

      <p>*Mandatory fields</p>
      <Button type="submit">Add your profile</Button>
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

  select {
    display: hidden;
    border: none;
    padding: 8px;
    background: var(--quaternary);
    font-family: Helvetica, sans-serif;
    color: var(--primary);
  }

  p {
    margin: 0;
    font-size: 8px;
  }
`

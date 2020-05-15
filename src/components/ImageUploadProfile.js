import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Button from './Button'

ImageUploadProfile.propTypes = {
  updateProfileImage: PropTypes.func,
  previewProfileImage: PropTypes.object,
}

export default function ImageUploadProfile({
  previewProfileImage,
  updateProfileImage,
}) {
  return (
    <>
      {previewProfileImage.profileImageUrl ? (
        <ImageWrapper>
          <Image src={previewProfileImage.profileImageUrl} alt="" />
        </ImageWrapper>
      ) : (
        <ImageWrapper>
          <Image src="./img/user_default.png" alt="" />
        </ImageWrapper>
      )}
      <UploadWrapper>
        <Button text="Upload Image" />
        <label htmlFor="image"></label>
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          onChange={updateProfileImage}
          className="file-default"
        />
      </UploadWrapper>
    </>
  )
}

const ImageWrapper = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  height: 200px;
  width: 200px;
  object-fit: cover;
  border-radius: 50%;

  @media (max-width: 360px) {
    width: 280px;
  }
`

const UploadWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  .file-default {
    opacity: 0;
    position: absolute;
  }
`

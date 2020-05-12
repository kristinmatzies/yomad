import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Button from './Button'

ImageUpload.propTypes = {
  updateImage: PropTypes.func,
  previewImage: PropTypes.object,
}

export default function ImageUpload({ updateImage, previewImage }) {
  return (
    <>
      {previewImage.imageUrl ? (
        <ImageWrapper>
          <Image src={previewImage.imageUrl} alt="" />
        </ImageWrapper>
      ) : (
        <ImageWrapper>
          <Image src="./img/default_img.jpg" alt="" />
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
          onChange={updateImage}
          className="file-default"
        />
      </UploadWrapper>
    </>
  )
}

const ImageWrapper = styled.div`
  height: 200px;
`

const Image = styled.img`
  height: 200px;
  width: 340px;
  object-fit: cover;
  border-radius: 4px;

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

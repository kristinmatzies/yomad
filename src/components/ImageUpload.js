import React from 'react'
import styled from 'styled-components/macro'

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
      <label htmlFor="image">Upload an image*</label>
      <input
        id="image"
        type="file"
        name="image"
        accept="image/*"
        onChange={updateImage}
      />
    </>
  )
}

const ImageWrapper = styled.div`
  align-self: center;
  height: 200px;
`

const Image = styled.img`
  height: 200px;
  width: 340px;
  object-fit: cover;
  border-radius: 4px;
`

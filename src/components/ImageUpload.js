import React from 'react'
import styled from 'styled-components/macro'

export default function ImageUpload({ updateEventEntry }) {
  return (
    <>
      <DefaultImg src="./img/default_img.jpg" alt="img" />
      <label htmlFor="image">Upload an image*</label>
      <input
        id="image"
        type="file"
        name="image"
        accept="image/*"
        onChange={updateEventEntry}
      />
    </>
  )
}

const DefaultImg = styled.img`
  object-fit: fill;
  width: 100%;
  height: 200px;
  border-radius: 4px;
  align-self: center;
  margin-bottom: 12px;
`

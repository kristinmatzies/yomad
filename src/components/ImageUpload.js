import React from 'react'

export default function ImageUpload({ updateImage }) {
  return (
    <>
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

/* const DefaultImg = styled.img`
  object-fit: fill;
  width: 100%;
  height: 200px;
  border-radius: 4px;
  align-self: center;
  margin-bottom: 12px;
`
 */

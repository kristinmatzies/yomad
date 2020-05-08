import React from 'react'
import styled from 'styled-components/macro'

export default function ImageUpload() {
  return (
    <>
      <label htmlFor="image">Upload an image*</label>
      <input id="image" type="file" name="image" accept="image/*" />
    </>
  )
}

import React from 'react'
import { addDecorator } from '@storybook/react'
import GlobalStyle from '../src/common/GlobalStyle'

addDecorator((storyFn) => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
))

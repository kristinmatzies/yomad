import React from 'react'
import { addDecorator } from '@storybook/react'
import GlobalStyles from '../src/common/GlobalStyles'

addDecorator((storyFn) => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
))

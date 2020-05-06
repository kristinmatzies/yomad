import React from 'react'
import { addDecorator } from '@storybook/react'
import GlobalStyles from '../src/common/GlobalStyles'
import { withInfo } from '@storybook/addon-info'

addDecorator((storyFn) => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
))

addDecorator(withInfo)

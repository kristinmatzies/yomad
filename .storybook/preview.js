import React from 'react'
import GlobalStyles from '../src/common/GlobalStyles'
import { MemoryRouter as Router } from 'react-router-dom'
import { withInfo } from '@storybook/addon-info'
import { addDecorator } from '@storybook/react'

export default (renderComponent) => (
  <>
    <Router>
      <GlobalStyles />
      <div style={{ padding: 20, width: 400, height: 600 }}>
        {renderComponent()}
      </div>
    </Router>
  </>
)

addDecorator(withInfo)

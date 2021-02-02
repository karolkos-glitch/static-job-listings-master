import React, { Fragment } from 'react'
import Jobs from './Jobs'

import {createGlobalStyle}from 'styled-components';

const Global = createGlobalStyle`
  * {
    padding: inherit;
    margin: inherit;
    box-sizing: border-box;
  }
  
  body {
    padding: 0;
    margin: 0;
  }

  ul,ol {
    list-style-type: none;
  }
`
const App = () => {
  return (
    <Fragment>
      <Global/>
      <Jobs />
    </Fragment>
  )
}

export default App

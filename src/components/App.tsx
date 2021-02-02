
import React, {Fragment, useEffect} from 'react'
import Jobs from './Jobs'
import  { createGlobalStyle } from 'styled-components'

const GlobalStyled = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

ul {
  list-style-type: none;
}

body {
  background: hsl(180, 52%, 96%);
  font-size: 15px;
  font-family: sans-serif;
  color:  hsl(180, 14%, 20%);
}
`
const App = () => {
  useEffect(() => {
    document.title = "static jobs listing master"
  }, [])
  return (
    <Fragment>

      <GlobalStyled />

      <Jobs />
    </Fragment>
  )
}

export default App

import React from 'react'
import ReactDOM from 'react-dom'

import App from './App.jsx'
import { GlobalStyles } from './styles/global'

ReactDOM.render(
  <React.Fragment>
    <GlobalStyles />
    <App />
  </React.Fragment>,
  document.getElementById('root')
)

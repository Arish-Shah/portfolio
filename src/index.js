import React from 'react'
import ReactDOM from 'react-dom'

import App from './App.jsx'
import './scss/index.scss'

ReactDOM.render(<App />, document.getElementById('root'))

if (module.hot) {
	module.hot.accept()
}

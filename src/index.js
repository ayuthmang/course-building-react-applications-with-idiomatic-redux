import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { fetchTodos } from './api'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
)

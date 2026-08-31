/**
 * main.jsx — Application entry point
 *
 * Mounts the React app into the #root element defined in index.html.
 * Global styles are imported here so they load once, before any component.
 */

import React    from 'react'
import ReactDOM from 'react-dom/client'
import App      from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

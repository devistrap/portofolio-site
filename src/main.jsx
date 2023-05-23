import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './nav.jsx'
import Body from './body.jsx'
import AnimationCanvas from './animation.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Body />
    <AnimationCanvas />
  </React.StrictMode>,
)

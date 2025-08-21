import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import { getCSSVariables } from './styles/Colors.js'

const cssVariables = getCSSVariables();
Object.entries(cssVariables).forEach(([property, value]) => {
  document.documentElement.style.setProperty(property, value);
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

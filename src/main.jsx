import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './Style.css';
import App from './App.jsx'
import './Events.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

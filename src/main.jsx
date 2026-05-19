import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MiComponente from './components/micomponente.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <MiComponente />
  </StrictMode>,
)

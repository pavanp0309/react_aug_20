import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "/node_modules/bootstrap/dist/css/bootstrap.css"
import Welcome from './components/Welcome.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Welcome/>
  </StrictMode>,
)

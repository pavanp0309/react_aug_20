
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// Bootstrap
import "/node_modules/bootstrap/dist/css/bootstrap.css"
// Routing



createRoot(document.getElementById('root')).render(
  <StrictMode>

    <App />
    
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import "/node_modules/bootstrap/dist/css/bootstrap.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* step1: enbaling the Routing functionalities to react app */}
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)

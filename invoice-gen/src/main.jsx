
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import "/node_modules/bootstrap/dist/css/bootstrap.css"
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
 <>
 <BrowserRouter>
    <App />
    <ToastContainer />
  </BrowserRouter>
</>

)


import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./component/home.css"
// bootstrap
import "/node_modules/bootstrap/dist/css/bootstrap.css"

createRoot(document.getElementById('root')).render(
  <div className='container p-5 bg-dark '>
    <App />
   
  </div>
)

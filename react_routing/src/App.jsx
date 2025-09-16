import Home from "./pages/Home"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import About from "./pages/About"
import PageNotFound from "./components/PageNotFound"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Fullstack from "./components/Fullstack"
import AllProject from "./components/AllProject"
import Frontend from "./components/Frontend"
import Backend from "./components/Backend"

// 
import { Routes ,Route } from "react-router-dom"
import { Navigate } from "react-router-dom"

import "./App.css"


function App(){
  return (
    <>
   <Navbar/>
    <Routes>
      <Route  path="/" element={<Navigate to="/home" replace/>}/>
      <Route  path="/home" element={<Home/>}/>
      <Route  path="/about" element={<About/>}/>
      <Route  path="/contact" element={<Contact/>}/>
      {/* Nested Routes */}
      <Route  path="/services" element={<Services/>}>
      {/* default nested Route using index attribute */}
           {/* default nested Route start */}
           <Route  index  element={<Navigate  to={"/services/all"}/>} />
           {/* default nested Route end */}
           <Route path="/services/all"   element={<AllProject/>} />
           <Route path="/services/frontend"  element={<Frontend/>} />
           <Route path="/services/backend"  element={<Backend/>} />
           <Route path="/services/fullstack"  element={<Fullstack/>} />
      </Route>
      {/* page_Not found (404_error_handling) */}
      <Route  path="*" element={<PageNotFound/>}/>
    </Routes>
    </>
  )
}

export default App
import React from 'react'
import { Routes,Route,Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Features from './pages/Features'
import Navbar from './components/layout/Navbar'

const App = () => {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/features' element={<Features/>}/>
    <Route path='*' element={<Navigate to="/"/>}/>
   </Routes>

   </>
  )
}

export default App

import React, { useState } from 'react'
import Home from './pages/Home'

const App = () => {
  const [dark,setDark]=useState({name:"raju"})
  console.log("app is running")
  return (
    <div>
      <Home darkmode={dark} setDark={setDark}/>
    </div>
  )
}

export default App

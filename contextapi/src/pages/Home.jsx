import React from 'react'
import Services from './Services'

const Home = ({darkmode,setDark}) => {
    console.log("home.. is running")
  return (
    <div>
      <Services   darkmode={darkmode} setDark={setDark}/>
    </div>
  )
}

export default Home

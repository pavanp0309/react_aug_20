import React from 'react'
import Musicapp from '../components/Musicapp'

const Services = ({darkmode,setDark}) => {
  console.log("services.. is running")
  return (
    <div>
      <Musicapp darkmode={darkmode} setDark={setDark}/>
    </div>
  )
}

export default Services

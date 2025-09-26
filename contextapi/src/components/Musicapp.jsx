import React from 'react'
import Album from './Album'

const Musicapp = ({darkmode,setDark}) => {
  console.log("musicapp.. is running")
  return (
    <div>
      <Album darkmode={darkmode} setDark={setDark}/>
    </div>
  )
}

export default Musicapp

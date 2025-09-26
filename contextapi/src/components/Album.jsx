import React from 'react'
import MusicCard from './MusicCard'

const Album = ({darkmode,setDark}) => {
  console.log("album. is running")
  return (
    <div>
      <MusicCard darkmode={darkmode} setDark={setDark}/>
    </div>
  )
}

export default Album

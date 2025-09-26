import React from 'react'
import Player from './Player'

const MusicCard = ({darkmode,setDark}) => {
    console.log("musiccard.. is running")
  return (
    <div>
      <Player darkmode={darkmode} setDark={setDark}/>
    </div>
  )
}

export default MusicCard

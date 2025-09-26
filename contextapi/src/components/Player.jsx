import React from 'react'

const Player = ({darkmode,setDark}) => {
    console.log("player.. is running")
    console.log(!darkmode)
  return (
    <div>
      <h1>{darkmode?"dark":"light"}</h1>
      <button onClick={()=>setDark(darkmode)}>changetheme</button>
    </div>
  )
}

export default Player

import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../store/Store'

const Player = ({darkmode,setDark}) => {
    console.log("player.. is running")
    console.log(!darkmode)

    let {theme,toggleTheme}=useContext(ThemeContext)
  return (
    <div>
      <h1>{darkmode?"dark":"light"}</h1>
      <h1>{theme?"dark-1":"light-1"}</h1>
      <button onClick={()=>setDark(darkmode)}>changetheme</button>
      <button onClick={toggleTheme}>changetheme-1</button>
    </div>
  )
}

export default Player

import React from 'react'
import { useState } from 'react'

const ThemeChanger = () => {
    let [dark,setDark]=useState(localStorage.getItem("d")) // Boolean string numbers  object arrays
    console.log(dark)
    
    let handleThemeChange=()=>{
      // updater function
        setDark(!dark)
        localStorage.setItem("d",dark)
    }
    return (
    <div style={{background:dark?"black":"white",color:dark?"white":"black",height:"100vh"}} >
        <h3>{dark?"darkmode":"lightmode"}</h3>
      <button onClick={handleThemeChange}>{dark?"🌛":"🌞"}</button>
    </div>
  )
}

export default ThemeChanger

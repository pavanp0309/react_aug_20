import React from 'react'
import Player from './Player'
import { useContext } from 'react'
import { userContext } from '../store/ProfileContext'

const MusicCard = ({darkmode,setDark}) => {
    console.log("musiccard.. is running")
    let {name,userId,isPremium}=useContext(userContext)
    
  return (
    <div>
      <div className="card">
        <h1>{name}</h1>
        <h1>{userId}</h1>
        <h1>{isPremium?"No ads played":"30days free-trail"}</h1>
      </div>
      <Player darkmode={darkmode} setDark={setDark}/>
    </div>
  )
}

export default MusicCard

import React from 'react'
import Services from './Services'
import { useContext } from 'react'
import { userContext } from '../store/ProfileContext'

const Home = ({darkmode,setDark}) => {
    console.log("home.. is running")
     let {name}=useContext(userContext)
  return (
    <div>
      <h1>Home:{name}</h1>
      <Services   darkmode={darkmode} setDark={setDark}/>
    </div>
  )
}

export default Home

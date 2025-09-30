import { useState,createContext } from "react";



// step1:create a store 
export let userContext=createContext()

let user={
    name:"mohan",
    age:24,
    userId:"m123",
    isPremium:true
}



const ProfileProvider = ({children}) => {
  return (
    <userContext.Provider  value={user}>
          {children}
    </userContext.Provider>
  )
}

export default ProfileProvider

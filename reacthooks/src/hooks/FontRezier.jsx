import React from 'react'
import { useState } from 'react'

const FontRezier = () => {
   let[fontsize,setFontsize] =useState(16)
   let[count,seCount] =useState(16)
  
   let handleIncrement=()=>{
    if(fontsize>=16&&fontsize<50){
       setFontsize(()=>fontsize+2)
   
       console.log("i",fontsize)
      
    }else{
        alert("min and max font size reached")
    }
   }
     let handledecrement=()=>{
    if(fontsize>16){
       setFontsize(fontsize-2)
    }else{
        alert("min and max font size reached")
    }
   }
  return (
    <div>
        <p style={{fontSize:fontsize}}>Hi everyone</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handledecrement}>-</button>
      <button  onClick={()=>setFontsize(10)}>reset</button>
    </div>
  )
}

export default FontRezier

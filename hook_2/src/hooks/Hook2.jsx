import React, { useEffect, useState } from "react";

// UseEffect : hook used for handling the sideeffects of a functional components
// sideffect : something that is happening outside of react  component
//    1. fetching the data from an api /database
//    2. timers ,subscriptions,events etc..
//    3.updating the dom element


// LIFECYCLE METHODS OF FUNCTIONAL COMPONENT

// 1.Mounting :creating a html  and inserting into the dom  these takes during intial render (jsx-->html--dom--copydom(virtualdom))
        //    compondentDidMount--classcompoenent
// 2.Updation :updating the existing html and inserting the dom (virtualdom-def-realdom-->realdom)
 //    compondentDidUpdate--classcompoenent
// 3.Unmounting : removing or dleting an html 
 //    compondentDidunMount--classcompoenent

// syntax :
// useEffect(()=>{}, // mountingphase
//  return ()=>{} //unmounting phase
// [])//updation phase

// 1.useEffect Without dependecy array
// useEffect(()=>{}) //useeffect run once on mounting and runs on every state or propchanges
// 2.useEffect with empty Dependencies and with Dependencies values 
// useEffect(()=>{},[]) ///useeffect run  only once on mounting
// useEffect(()=>{},[count]) ///useeffect run  only once on mounting and runs on dependency value changes 




const Hook2 = () => {
    // state of an component
 const [count,setCount]=useState(0)
 const [count2,setCount2]=useState(0)


// 1.useffect without dependency *bad way
   useEffect(()=>{
    console.log("useffect without dependency")
   })

// 1.useffect with dependency
   useEffect(()=>{
    console.log("useffect with dependency👹")
   },[])//empty dependency array

// 1.useffect with dependency
   useEffect(()=>{
    console.log("useffect with dependency👹value🎀")
   },[count])//empty dependency array

  

 

  return (
    <>
    <h1>{count}</h1>
    <h1>{count2}</h1>
    <button onClick={()=>setCount(count+1)}>click</button>
    <button onClick={()=>setCount2(count2+1)}>click2</button>
    </>
  )
};

export default Hook2;

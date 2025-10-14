
import { useMemo, useState } from 'react'

// in Javascript/react when a componnet is rendered the varaible functions gets re-created 
// when there is a chnage in props or state components get re-rendered
const App = () => {
  const [count,setCount]=useState(4)
  const [search,setSearch]=useState('')
  const [text,setText]=useState("")
  const companies=[
    "amazon",
    "amazon",
    "amazon",
    "amazon",
  ]

//  without useMemo 
//   const searchedval= companies.filter(c=>c.toLowerCase().includes(search.toLowerCase())|| [])
//  console.log(searchedval)

// with useMemo 
 const searchedval= useMemo(()=>{
  console.log("rendering..")
  return companies.filter(c=>c.toLowerCase().includes(search.toLowerCase())|| [])
 },[search])


  // function without useMemo
  let largercal=(num)=>{
    console.log("recreating the function.")
    for(let i=0;i<1000000000;i++){}
    return num*2
  }

  // re-creats the function everytime when change in state or props of the component
  //  let doubleNumber= largercal(count)
  

   // re-creats the function only when change in count state 
  let doubleNumber=useMemo(()=>{
     return largercal(count)
  },[count])
  

  return (
    <div>
      {/* usememo-example */}
      <h1>{count}</h1>
      <h1>{doubleNumber}</h1>
      {/* button to increment the count */}
      <button onClick={()=>setCount(count+1)}>increment</button>
      {/* input for text field */}
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
      <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />
      <ul>
        {
          searchedval.map(s=><li>{s}</li>)
        }
      </ul>
    </div>
  )
}

export default App

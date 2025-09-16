import React from "react";

// without Jsx
// let a3=React.createElement("h1",{},"hello")

// // JSX:JAVASCRIPT+XML
//  let a; // Javascript 
//  <h1></h1> // Xmlorhtml 
//  let a2=<h1></h1> //  jsx

//  comments :{/* */}
//  Rules 
//  In JSX, expressions like variables or calculations must be written inside curly braces { } 

// let a=10
// function App(){
//   return(
//   <>
//   {/* variables */}
//   {a} <br />
//   {/* Calculations */}
//   {1+2}
//   </>)
// }
// export default App


// We  cannot directly write if-else, loops, or declare functions inside the curly braces.but  
// JSX can be used inside conditional statements, loops, or functions. 
 

// if(true){
//   let a=<h1>{10+20}</h1>
//   console.log(a)
// }
// for(let i=0;i<=10;i++){
//         let a=<h1>{10+20}</h1>
 
//   }
// function App(){

//   return (
//   <h1>
//     {10+10}
//    {/* { if(true){
//       return "hello"
//     }} */}
//     {true?"hello":"bye"}
//     {/* {for(let i=0;i<=10;i++){
//       console.log("hii")
//     }} */}
//   </h1>
//   )
// }
// export default App



// 3. all jsx element must Be Wrapped Under single Parent 

// const App = () => {
//   return (
//    <React.Fragment>
//       <h1>Hello</h1>
//     <h1>Hello</h1>
//    </React.Fragment>
//   )
// }

// export default App

// 4.all jsx Element must be Closed

// const App = () => {
//   return (
//   <>
//   <img src="" />
//   <input type="text" />
//   </>
//   )
// }

// export default App

// 5.Jsx Attribues : 
  // class -->className 
  // for -->htmlFor 
  // onclick===>onClick 
  // style=""===>style={{}}
  let a=<h1>hello</h1>
  console.log(a)

  const App = () => {
  return (
 <>
 <h1 className=""></h1>
 <label htmlFor=""></label>
 <button onClick={()=>{}}>click</button>
 <h2 style={{color:"red",backgroundColor:"yellow"}}>hello</h2>
 </>
  )
}

export default App
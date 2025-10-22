import React from 'react'
import { useGetProductsQuery } from './store/apiReducer'
// import { useSelector, useDispatch } from 'react-redux'
// import { increment,decrement,incrementByAmount,decrementByAmount } from './store/countReducers'

const App = () => {
  // const data=useSelector(state=>state.counterReducer.value)
  // const dispatch=useDispatch()
  const {isLoading,isError,data}=useGetProductsQuery()

  return (
    <div>
      {data?.map((ele)=><li>{ele.title}</li>)}
      {/* <h1>{data}</h1>
      <button onClick={()=>dispatch(increment(10))}>increment</button>
      <button onClick={()=>dispatch(decrement(1))}>decrement</button> */}
    
    </div>
  )
}

export default App

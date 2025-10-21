import { createSlice } from '@reduxjs/toolkit'

// step:2 creating initail state for an app 
const initialState = {
  value: 0,
}

const initialState1={
startAge:0,
endAge:15,
amount:100000
}


export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {                // const counterReducer=(state=initialstate,action)=>{}
    increment: (state,action) => {
      state.value += action.payload    // --> {...state,value:state.value+action.payload}
    },
    decrement: (state,action) => {
      state.value -= action.payload
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload
    },
  },
})

export const {increment,decrement,incrementByAmount,decrementByAmount}=counterSlice.actions
export default counterSlice.reducer 
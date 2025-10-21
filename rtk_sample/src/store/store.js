import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./countReducers.js"

// step1: creating the store 
export const store = configureStore({
  reducer: {counterReducer},
})


// plain redux 
// export const store= creatStore(reducer)
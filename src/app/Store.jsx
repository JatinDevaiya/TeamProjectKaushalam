import { configureStore } from '@reduxjs/toolkit'
// import counterSlice from '../Redux/features/counter/counterSlice'
import counterReducer from '../Redux/features/counter/counterSlice'
import themreducer from "../Redux/features/them/Themslice"

export const store = configureStore({
  reducer: {
    // counter : counterSlice,
    counter : counterReducer,
    them : themreducer,
  },
})
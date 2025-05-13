import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './reducer/slice'

export const store = configureStore({
  reducer: {
    
    counter:counterSlice,
  },
})
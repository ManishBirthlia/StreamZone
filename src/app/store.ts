import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './loginSlice'
import streamReducer from './streamSlice'

export default  configureStore({
  reducer: {
    user:loginReducer,
    stream:streamReducer,
  },
})
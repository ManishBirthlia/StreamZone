import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './loginSlice'
import streamReducer from './streamSlice'
import rtmpReducer from './rtmpSlice'

export default  configureStore({
  reducer: {
    user:loginReducer,
    stream:streamReducer,
    rtmp:rtmpReducer,
  },
})
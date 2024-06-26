import { createSlice } from "@reduxjs/toolkit";

export const rtmpSlice = createSlice({
    name: 'rtmp',
    initialState: {
      value: '',
    },
    reducers: {
      changeUserRtmpState: (state,action) => {
        state.value = action.payload;
      },
    },
  })
  export const { changeUserRtmpState } = rtmpSlice.actions
  
  export default rtmpSlice.reducer
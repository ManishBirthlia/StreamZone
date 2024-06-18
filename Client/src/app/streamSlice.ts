import { createSlice } from '@reduxjs/toolkit'

export const streamSlice = createSlice({
  name: 'stream',
  initialState: {
    value: false,
  },
  reducers: {
    changeStreamState: (state) => {
      state.value = !state.value
    },
  },
})
export const { changeStreamState } = streamSlice.actions

export default streamSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    value: false,
  },
  reducers: {
    changeUserState: (state) => {
      state.value = !state.value
    },
  },
})
export const { changeUserState } = loginSlice.actions

export default loginSlice.reducer
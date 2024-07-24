import { createSlice } from '@reduxjs/toolkit'

export interface PageState {
  value: number
}

const initialState: PageState = {
  value: 1,
}

export const pageSlice = createSlice({
  name: 'currentPage',
  initialState,
  reducers: {
    pageIncrement: (state) => {
      state.value += 1
    },
    pageDecrement: (state) => {
      state.value -= 1
    },
  },
})

export const { pageIncrement, pageDecrement } = pageSlice.actions
export default pageSlice.reducer

import { configureStore } from '@reduxjs/toolkit'
import pageReducer from './slices/currentPageSlice'
import selectedItemsSlice from './slices/selectedItemsSlice'

export const store = configureStore({
  reducer: {
    page: pageReducer,
    selectedItems: selectedItemsSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

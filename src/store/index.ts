import { configureStore } from '@reduxjs/toolkit'
import pageReducer from './slices/currentPageSlice'
import selectedItemsSlice from './slices/selectedItemsSlice'
import { peopleApi } from '../api/peopleApi'

export const store = configureStore({
  reducer: {
    page: pageReducer,
    selectedItems: selectedItemsSlice,
    [peopleApi.reducerPath]: peopleApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(peopleApi.middleware)
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

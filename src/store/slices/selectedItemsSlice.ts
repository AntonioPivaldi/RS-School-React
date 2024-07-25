import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Person } from '../../utils/types/api'

export interface ItemsState {
  value: Record<string, Person>
}

const initialState: ItemsState = {
  value: {},
}

export const selectedItemsSlice = createSlice({
  name: 'selectedItems',
  initialState,
  reducers: {
    addPerson: (state, action: PayloadAction<Person>) => {
      state.value[action.payload.name] = action.payload
    },

    removePerson: (state, action: PayloadAction<Person>) => {
      delete state.value[action.payload.name]
    },

    removeAllPersons: (state) => {
      state.value = {}
    },
  },
})

export const { addPerson, removePerson, removeAllPersons } =
  selectedItemsSlice.actions
export default selectedItemsSlice.reducer

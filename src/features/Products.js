import { createSlice } from '@reduxjs/toolkit'

import { PhoneData } from './ProductsData'

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    value: PhoneData,
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export default productsSlice.reducer
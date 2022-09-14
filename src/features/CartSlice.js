import { createSlice } from '@reduxjs/toolkit'



const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: [],
  },
  reducers: {
    addToCart: (state, action) => {
        const itemInCart = state.value.find((cart) => cart.id === action.payload.id);
        if (itemInCart) {
          itemInCart.quantity++;
        } else {
          state.value.push(action.payload);
        }
        // state.value.push(action.payload);
      },
      incrementQuantity: (state, action) => {
        const phone = state.value.find((phone) => phone.id === action.payload);
        phone.quantity++;
      },
      decrementQuantity: (state, action) => {
        const phone = state.value.find((phone) => phone.id === action.payload);
        if (phone.quantity === 1) {
          phone.quantity = 1
        } else {
          phone.quantity--;
        }
      },
      removeItem: (state, action) => {
        state.value = state.value.filter((cart) => cart.id !== action.payload.id);
      },
    },
  });

  export const cartReducer = cartSlice.reducer;
  export const {
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeItem,
  } = cartSlice.actions;
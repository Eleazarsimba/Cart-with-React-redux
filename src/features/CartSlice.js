import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: [],
  },
  reducers: {
      addToCart: (state, action) => {
      //check by id the index of an item, also if it exists
        const itemIndex = state.value.findIndex((cart) => cart.id === action.payload.id);
        //If it exists
          if(itemIndex >= 0){
            //increment quantity
            state.value[itemIndex].cartQuantity += 1
          }else {
          // add cart quantity state
            const cartData = {...action.payload, cartQuantity: 1}
            //add item to cart
            state.value.push(cartData);
          }
      },
      incrementQuantity: (state, action) => {
      //get the item to increment
        const phone = state.value.find((item) => item.id === action.payload.id);
      //now increment
        phone.cartQuantity += 1
      },
      decrementQuantity: (state, action) => {
        //get the item to decrement
        const phone = state.value.find((cart) => cart.id === action.payload.id);
        //decrement
        phone.cartQuantity -= 1
        // state.quantity -= 1
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
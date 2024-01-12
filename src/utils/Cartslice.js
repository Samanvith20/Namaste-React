import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      state.items = [];    // Set the items array to an empty array
    },
  },
});

export const { addItem, removeItem, clearCart } = CartSlice.actions;

export default CartSlice.reducer;

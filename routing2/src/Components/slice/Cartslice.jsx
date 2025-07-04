// slice/Cartslice.js
import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    removeFromCart(state, action) {
      return state.filter(item => item.id !== action.payload.id);
    }
  }
});

export const { add, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;

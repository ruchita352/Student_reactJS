// store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cartslice"; // ✅ correct path

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

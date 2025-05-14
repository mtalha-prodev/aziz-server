import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  product: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },

    decrement: (state) => {
      state.value -= 1;
    },
    addCart: async (state, actions) => {
      state.product.push(actions.payload);
    },
  },
});
// component call function
export const { increment, decrement, addCart } = counterSlice.actions;

// stora value
export default counterSlice.reducer;

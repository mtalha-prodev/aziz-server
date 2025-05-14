import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 acccessToken:true
};

export const authSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    login: (state) => {
      state.value += 1;
    },

    register: (state) => {
      state.value -= 1;
    },
    passwordForget: async (state, actions) => {
      state.product.push(actions.payload);
    },
    passwordChange: async (state, actions) => {
      state.product.push(actions.payload);
    },
    updateProfile: async (state, actions) => {
      state.product.push(actions.payload);
    },
    getProfile: async (state, actions) => {
      state.product.push(actions.payload);
    },
   
  },
});
// component call function
export const { increment, decrement, addCart } = counterSlice.actions;

// stora value
export default counterSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./reducer/slice";
import userSlice from "./reducer/authSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    auth: userSlice,
  },
});

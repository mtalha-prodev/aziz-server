import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  user: JSON.parse(localStorage.getItem("user"))
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  role: localStorage.getItem("role") ? localStorage.getItem("role") : "user",
  token: localStorage.getItem("accessToken")
    ? localStorage.getItem("accessToken")
    : null,
};

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.loading = true;
      state.user = payload.content;
      state.token = payload.accessToken;
      state.role = payload.content.role;

      localStorage.setItem("accessToken", payload.accessToken);
      localStorage.setItem("role", payload.content.role);
      localStorage.setItem("user", JSON.stringify(payload.content));
      state.loading = false;
    },
    updateProfile: (state, { payload }) => {
      state.user = payload.content;
      state.role = payload.content.role;
      localStorage.setItem("role", payload.content.role);
      localStorage.setItem("user", JSON.stringify(payload.content));
    },

    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const { login, setMessage, updateProfile } = userSlice.actions;

export default userSlice.reducer;

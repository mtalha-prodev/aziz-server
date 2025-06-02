import { createAsyncThunk } from "@reduxjs/toolkit";
import { endPoint } from "../../utils/endpoint";
import { postWithoutToken } from "../../api/fetch";

export const loginPost = createAsyncThunk({
  name: "auth/login",
  async: async (data) => {
    try {
      const resp = await postWithoutToken(data, endPoint.login);
      localStorage.setItem("accessToken", payload.accessToken);
      localStorage.setItem("role", payload.content.role);
      localStorage.setItem("user", JSON.stringify(payload.content));
        return resp
    } catch (error) {
      console.log(error);
    }
  },
});

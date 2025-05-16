import axios from "axios";
import { base_url } from "../utils/endpoint";

export const postWithoutToken = async (data, endPoint) => {
  try {
    const resp = await axios.post(endPoint, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!resp.data.status) {
      console.log(resp.data.message);
    }
    
    return resp.data;
  } catch (error) {
    console.error(error.message);
  }
};
export const putWithToken = async (data, endPoint) => {
  const token = localStorage.getItem("accessToken");
  try {
    const resp = await axios.put(endPoint, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!resp.data.status) {
      console.log(resp.data.message);
    }

    return resp.data;
  } catch (error) {
    console.error(error.message);
  }
};

export const getWithToken = async (endPoint) => {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    return;
  }
  try {
    const resp = await axios.get(endPoint, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!resp.data.status) {
      console.log(resp.data.message);
    }

    return resp.data;
  } catch (error) {
    console.error(error.message);
  }
};

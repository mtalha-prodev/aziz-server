import { sendError, sendResponse } from "../helper/respons.js";
import Users from "../model/auth.model.js";

export const register = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    console.log(req.body);

    if (!name || !email || !password || !phone) {
      return sendResponse(res, false, "Please fill all fields");
    }

    const user = await Users.findOne({ email });

    if (user) {
      return sendResponse(res, false, "User already exists");
    }

    const data = { name, email, password, phone };

    const newUser = new Users(data);

    await newUser.save();

    return sendResponse(res, true, "User registered successfully");
  } catch (error) {
    return sendError(res, error);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return sendResponse(res, false, "Please fill all fields");
  }
  const user = await Users.findOne({ email });

  if (!user) {
    return sendResponse(res, false, "User not found");
  }
  if (user.password !== password) {
    return sendResponse(res, false, "Invalid credentials");
  }

  return sendResponse(res, true, "User Login", user);
};

export const profile = async (req, res) => {
  console.log(req.params.userId);
  // const { userId } = req.params;
  if (!req.params.userId) {
    return sendResponse(res, false, "Invalid User ID");
  }

  const user = await Users.findById({ _id: req.params.userId }).select(
    "-password"
  );
  if (!user) {
    return sendResponse(res, false, "User not found");
  }
  return sendResponse(res, true, "User Profile", user);
};

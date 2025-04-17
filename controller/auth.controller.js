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

export const login = (req, res) => {
  res.send("Hi World! Welcome to my API login");
};
export const profile = (req, res) => {
  res.send("Hi World! Welcome to my API");
};

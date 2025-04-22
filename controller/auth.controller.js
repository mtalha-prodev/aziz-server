import { sendError, sendResponse, sendToken } from "../helper/respons.js";
import Users from "../model/auth.model.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    if (!name || !email || !password || !phone) {
      return sendResponse(res, false, "Please fill all fields");
    }

    const user = await Users.findOne({ email });

    if (user) {
      return sendResponse(res, false, "User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const data = {
      ...req.body,
      role: "user",
      password: hashedPassword,
    };

    const newUser = new Users(data);

    const reg = await newUser.save();

    return sendToken(res, reg, "User registered successfully");
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

  const isMatch = await user.isPassMatch(password);

  if (!isMatch) {
    return sendResponse(res, false, "Invalid credentials");
  }

  return sendToken(res, user, "User Login");
};

export const profile = async (req, res) => {
  console.log(req.user);
  if (!req.user) {
    return sendResponse(res, false, "User not found");
  }
  return sendResponse(res, true, "User Profile", req.user);
};
export const upload_pic = async (req, res) => {
  console.log(req.file);

  // console.log(req.user);
  // if (!req.user) {
  //   return sendResponse(res, false, "User not found");
  // }
  return sendResponse(res, true, "User Profile", req.user);
};

// const data = async()=>{

//   const data = await axios.post('http://localhost:5000/api/v1/login', {email:'emial@gmail.com', password:"123456"},{
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer '+token
//     }
//   })
// }

import {
  hashPass,
  sendError,
  sendResponse,
  sendToken,
} from "../helper/respons.js";
import { msg } from "../i18n/text.js";
import Users from "../model/auth.model.js";

export const register = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    if (!name || !email || !password || !phone) {
      return sendResponse(res, false, msg.fillAllFields);
    }

    const user = await Users.findOne({ email });

    if (user) {
      return sendResponse(res, false, msg.userExists);
    }

    const hashedPassword = await hashPass(password);

    const data = {
      ...req.body,
      role: "user",
      password: hashedPassword,
    };

    const newUser = new Users(data);

    const reg = await newUser.save();

    return sendToken(res, reg, msg.success);
  } catch (error) {
    return sendError(res, error);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return sendResponse(res, false, msg.fillAllFields);
  }
  const user = await Users.findOne({ email });

  if (!user) {
    return sendResponse(res, false, msg.userNotFound);
  }

  const isMatch = await user.isPassMatch(password);

  if (!isMatch) {
    return sendResponse(res, false, msg.passwordMismatch);
  }

  return sendToken(res, user, msg.success);
};

export const profile = async (req, res) => {
  console.log(req.user);
  if (!req.user) {
    return sendResponse(res, false, msg.userNotFound);
  }
  return sendResponse(res, true, msg.success, req.user);
};

export const updateProfile = async (req, res) => {
  try {
    if (!req.user) {
      return sendResponse(res, false, msg.userNotFound);
    }

    const update = await Users.findByIdAndUpdate(
      { _id: req.user._id },
      req.body,
      {
        new: true,
      }
    );

    return sendResponse(res, true, msg.success, update);
  } catch (error) {
    sendError(res, error);
  }
};
export const changePass = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;

    if (!req.user) {
      return sendResponse(res, false, msg.userNotFound);
    }

    const isMatch = await req.user.isPassMatch(oldPassword);
    if (!isMatch) {
      return sendResponse(res, false, msg.passwordMismatch);
    }

    const hashedPassword = await hashPass(newPassword);

    const update = await Users.findByIdAndUpdate(
      { _id: req.user._id },
      { password: hashedPassword },
      {
        new: true,
      }
    );

    return sendResponse(res, true, msg.success, update);
  } catch (error) {
    sendError(res, error);
  }
};

export const upload_pic = async (req, res) => {
  if (!req.user) {
    return sendResponse(res, false, msg.userNotFound);
  }
  console.log(req.file);
  const data = {
    profile_pic: req.file.filename,
  };

  const update = await Users.findByIdAndUpdate({ _id: req.user._id }, data, {
    new: true,
  });

  return sendResponse(res, true, msg.success, update);
};

// const data = async()=>{

//   const data = await axios.post('http://localhost:5000/api/v1/login', {email:'emial@gmail.com', password:"123456"},{
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer '+token
//     }
//   })
// }

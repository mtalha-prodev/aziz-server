import { sendError, sendResponse } from "../helper/respons.js";
import jwt from "jsonwebtoken";
import Users from "../model/auth.model.js";

export const isAuth = async (req, res, next) => {
  try {
    const token = req?.headers?.authorization.split(" ")[1];

    if (!token) {
      return sendResponse(res, false, "Token is required");
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    console.log(decoded);

    req.user = await Users.findById(decoded._id);

    next();
  } catch (error) {
    sendError(res, error);
  }
};

export const isAuthorize = (role = []) => {
  try {
    return async (req, res, next) => {
      if (!req.user) {
        return sendResponse(res, false, "User not authenticated");
      }

      if (role.length > 0 && !role.includes(req.user.role)) {
        return sendResponse(res, false, "User is not Access ");
      }

      next();
    };
  } catch (error) {
    sendError(res, error);
  }
};

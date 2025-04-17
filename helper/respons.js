export const sendResponse = (res, status, msg, user, token) => {
  res.status(status ? 200 : 400).json({
    status: status,
    message: msg,
    user: user,
    token: token,
  });
};
export const sendError = (res, msg) => {
  res.status(500).json({
    status: false,
    message: msg,
  });
};

import exprss from "express";
import {
  changePass,
  login,
  profile,
  register,
  updateProfile,
  upload_pic,
} from "../controller/auth.controller.js";
import { isAuth, isAuthorize } from "../middleware/isAuth.js";
import { upload } from "../middleware/storage.js";

const router = exprss.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/profile", isAuth, isAuthorize(["user", "manager"]), profile);

router.put("/update/profile", isAuth, updateProfile);
router.put("/change/password", isAuth, changePass);
router.put("/upload/picture", isAuth, upload, upload_pic);

export default router;

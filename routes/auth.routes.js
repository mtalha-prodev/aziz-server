import exprss from "express";
import { login, profile, register, upload_pic } from "../controller/auth.controller.js";
import { isAuth, isAuthorize } from "../middleware/isAuth.js";
import { upload } from "../middleware/storage.js";

const router = exprss.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/profile", isAuth, isAuthorize(["user", "manager"]), profile);

router.post("/upload/picture", upload, upload_pic);

export default router;

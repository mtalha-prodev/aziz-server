import exprss from "express";
import { login, profile, register } from "../controller/auth.controller.js";

const router = exprss.Router();

router.get("/login", login);
router.get("/register", register);
router.get("/profile", profile);

export default router;


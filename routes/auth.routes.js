import exprss from "express";
import { login, profile, register } from "../controller/auth.controller.js";

const router = exprss.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/profile/:userId", profile);

export default router;

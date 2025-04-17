import exprss from "express";
import { user, profile, dashboard } from "../controller/admin.controller.js";

const router = exprss.Router();

router.get("/client", user);
router.get("/dashboard", dashboard);
router.get("/profile", profile);

export default router;

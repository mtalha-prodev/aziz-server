import exprss from "express";
import {
  getProduct,
  singleProduct,
  addProduct,
  updateProduct,
} from "../controller/product.controller.js";

const router = exprss.Router();

router.get("/product", getProduct);
router.get("/sale", singleProduct);
router.get("/new_offer", addProduct);

export default router;

import exprss from "express";
import {
  getProduct,
  singleProduct,
  addProduct,
  updateProduct,
} from "../controller/product.controller.js";

const router = exprss.Router();

router.get("/all_product", getProduct);
router.get("/single_product", singleProduct);
router.get("/new_product", addProduct);

export default router;

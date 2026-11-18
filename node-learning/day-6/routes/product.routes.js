import express from "express"

import{
    getProducts,
    getProduct,
    createProductController,
    updateProductController,
    replaceProductController,
    deleteProductController
} from "../controllers/product.controller.js"

const router = express.Router()

router.get("/:id", getProduct)
router.get("/", getProducts)
router.post("/", createProductController)
router.put("/:id", replaceProductController)
router.patch("/:id", updateProductController)
router.delete("/:id", deleteProductController)

export default router
import express from "express"
import {
    getIdProduk,
    getProduk,
    controllerSearchProduct,
    createController,
    updateController,
    replaceController,
    deleteController
} from "../controllers/product.controller.js"

const router = express.Router()

router.get("/search", controllerSearchProduct )
router.get("/", getProduk)
router.get("/:id", getIdProduk)
router.post("/",createController )
router.patch("/:id",updateController)
router.put("/:id",replaceController )
router.delete("/:id",deleteController)

export default router
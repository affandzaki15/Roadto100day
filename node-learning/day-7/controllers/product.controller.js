
import {
  getProducts,
  getIdProduct,
  getSearchProduct,
  createProduct,
  updateProduct,
  replaceProduct,
  deleteProduct,
} from "../services/product.services.js";

export function getProduk(req, res) {
  const allProduct = getProducts();
  res.status(200).json({
    status: true,
    message: "data valid",
    data: allProduct,
  });
}

export function getIdProduk(req, res) {
  const data = Number(req.params.id);
  const idProduct = getIdProduct(data);
  if (!idProduct) {
    return res.status(404).json({
      success: false,
      message: "data not found",
    });
  }

  return res.status(200).json({
    status: true,
    message: "data successfully",
    data: idProduct
  })
}

export function controllerSearchProduct(req, res){
    const search = req.query.search
    const searchProduct = getSearchProduct(search)
    return res.status(200).json({
      status: true,
      message: "data successfully",
      data: searchProduct
    })

}

export function createController(req, res){
    const data = req.body
    const createProducts = createProduct(data)
       if (!createProducts) {
      return res.status(400).json({
        success: false,
        message: "data tidak valid",
      });
    }
    
    return res.status(201).json({
      status: true,
      message: "data successfully",
      data: createProducts
    })
}

export function updateController(req, res) {
    const id = req.params.id;
    const data = req.body;

    const result = updateProduct(id, data);

    // Error handling
    if (result.error) {
        const statusCode =
            result.error === "NOT_FOUND" ? 404 : 400;

        return res.status(statusCode).json({
            success: false,
            message: result.message
        });
    }

    // Success response
    return res.status(200).json({
        success: true,
        message: "Product updated successfully",
        data: result.data
    });
}

export function replaceController(req, res) {
    const id = req.params.id;
    const data = req.body;

    const result = replaceProduct(id, data);

    // Error handling
    if (result.error) {
        const statusCode =
            result.error === "NOT_FOUND" ? 404 : 400;

        return res.status(statusCode).json({
            success: false,
            message: result.message
        });
    }

    // Success response
    return res.status(200).json({
        success: true,
        message: "Product replaced successfully",
        data: result.data
    });
}

export function deleteController(req, res){
    const newId = Number(req.params.id)
    const productDelete = deleteProduct(newId)
       if (!productDelete) {
      return res.status(404).json({
        success: false,
        message: "data tidak ditemukan",
      });
    }
    
    return res.status(200).json({
      status: true,
      message: "data successfully",
      data: productDelete
    })
}
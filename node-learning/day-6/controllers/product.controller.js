import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  replaceProduct,
  deleteProduct,
} from "../services/product.service.js";

export function getProducts(req, res) {
  const allProduct = getAllProducts();
  res.status(200).json({
    success: true,
    message: "Products retrieved successfully",
    data: allProduct,
  });
}

export function getProduct(req, res) {
  const id = req.params.id;
  const product = getProductById(id);
  if (!product) {
    return res.status(404).json({
      success: false,
      message: "data tidak ditemukan",
    });
  }
  res.status(200).json({
    success: true,
    message: "data valid",
    data: product,
  });
}

export function createProductController(req, res) {
  const data = req.body;

  const created = createProduct(data);
  res.status(201).json({
    success: true,
    message: "Product created successfully",
    data: created,
  });
}

export function updateProductController(req, res) {
  const newId = Number(req.params.id);
  const data = req.body;
  const product = updateProduct(newId, data);
  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }
  res.status(200).json({
    success: true,
    message: "Product  found",
    data: product,
  });
}

export function replaceProductController(req, res){
    const newId = Number(req.params.id)
    const data = req.body
    
    const product = replaceProduct(newId, data)
      if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }
  res.status(200).json({
    success: true,
    message: "Product  found",
    data: product,
  });
}

export function deleteProductController(req, res) {
  const newId = Number(req.params.id);
  const product = deleteProduct(newId);
  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Data tidak ditemukan",
    });
  }
  res.status(200).json({
    success: true,
    message: "Data Berhasil Dihapus",
    data:  product
    
  })
}

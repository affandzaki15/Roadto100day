
const express = require("express");
const router = express.Router();

const products = [
  { id: 1, name: "Es Teh", price: 5000 },
  { id: 2, name: "Kopi Susu", price: 12000 },
];

// 3. Validation middleware (3 parameter)
const validateProduct = (req, res, next) => {
  const { name, price } = req.body;

  if (!name || typeof name !== "string" || !name.trim()) {
    return res.status(400).json({
      success: false,
      message: "Name is required",
    });
  }

  if (typeof price !== "number" || price <= 0) {
    return res.status(400).json({
      success: false,
      message: "Price must be positive",
    });
  }

  next();
};

// GET all products
router.get("/", (req, res) => {
  res.status(200).json(products);
});

// POST product
router.post("/", validateProduct, (req, res) => {
  const { name, price } = req.body;

  const newProduct = {
    id: products.length + 1,
    name: name.trim(),
    price,
  };

  products.push(newProduct);

  res.status(201).json({
    success: true,
    data: newProduct,
  });
});

// Route khusus untuk menguji error handler
router.get("/test-error", (req, res, next) => {
  next(new Error("Database connection failed"));
});

module.exports = router;


const express = require("express");
const app = express();
const PORT = 3000;

// 1. Built-in middleware
app.use(express.json());

// 2. Logger middleware (3 parameter)
const logger = (req, res, next) => {
  console.log("LOGGER MIDDLEWARE DIPANGGIL!");

  const time = new Date().toISOString();

  console.log(`[${time}] ${req.method} ${req.originalUrl}`);

  next();
};

app.use(logger);

// Import routes
const productRoutes = require("./product.routes");
app.use("/products", productRoutes);

// 4. Centralized error handler (4 parameter)
// Harus diletakkan setelah routes
app.use((err, req, res, next) => {
  console.error("ERROR:", err.message);

  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

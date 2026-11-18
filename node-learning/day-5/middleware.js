const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

const products = [
  { id: 1, name: "Es Teh", category: "drink", price: 5000 },
  { id: 2, name: "Kopi Susu", category: "drink", price: 12000 },
  { id: 3, name: "Nasi Goreng", category: "food", price: 15000 },
];

const reqLogger = (req, res, next)=>{
    const waktu = new Date().toISOString();
    const method = req.method;
    const url = req.originalUrl;

    console.log(`[${waktu}] ${method} ${url}`)

    next()
}

app.use(reqLogger)
app.get("/products/:id", (req, res)=>{
    res.send("halaman ditemukan")
})

const validateProduct = ( req, res, next) =>{
    const { name, category, price } = req.body;
    if(!name || typeof name !== "string" || name.trim() === ""){
         return    res.status(400).json({
        success: false,
        message: "invalid product data",
    })}
    if(!category || typeof category !== "string" || category.trim() === ""){
         return    res.status(400).json({
        success: false,
        message: "invalid product data",
    })}
    if(typeof price !== "number" || price <= 0){
        return    res.status(400).json({
       success: false,
       message: "invalid product data",

    })}

  

    req.body.name = name.trim();
    req.body.category = category.trim()
    next()
}

app.post("/products", validateProduct, (req, res)=>{
    const {name, category, price} = req.body;
    const id = products.length + 1;

    const newProduct = {
        id, name, category, price
    }
    products.push(newProduct)

      res.status(201).json({
    success: true,
    message: "Data created",
    data: newProduct,
  });
})

app.get("/test-error", (req, res, next) => {
  const err = new Error("Testing error handler");
  next(err);
});

app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

app.listen(PORT, ()=>{
    console.log(`Server is running http://localhost:${PORT}`)
})
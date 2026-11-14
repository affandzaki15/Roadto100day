const express = require("express");
const app = express();

app.use(express.json());
const PORT = 3000;

const products = [
  { id: 1, name: "Es Teh", category: "drink", price: 5000 },
  { id: 2, name: "Kopi Susu", category: "drink", price: 12000 },
  { id: 3, name: "Nasi Goreng", category: "food", price: 15000 },
  { id: 4, name: "Thai Tea", category: "drink", price: 10000 },
];

app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  const product = products.find((data) => data.id === Number(id));
  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }
  res.status(200).json({
    success: true,
    message: "server is running",
    data: {
      product,
    },
  });
});

app.get("/products", (req, res) => {
  const category = req.query.category || "";
  const name = req.query.search || "";

  const product = products.filter(
    (data) =>
      data.category.toLowerCase().includes(category.toLowerCase()) &&
      data.name.toLowerCase().includes(name.toLowerCase()),
  );

  res.status(200).json({
    success: true,
    message: "product filtered",
    data: {
      product
    },
  });
});



app.post('/product', (req, res)=>{
    const {name, category, price} = req.body


    const id = products.length + 1
    const newProduct = {
        "id": id,
        "name": name,
        "category": category,
        "price": price
    }

    products.push(newProduct)
     res.status(201).json({
        success: true,
        message: "product created succesfully",
        data:{
            id,
            name, 
            category,
            price
        }
    })

})

app.listen(PORT, () => {
  console.log(`server berjalan di http://localhost:${PORT}`);
});

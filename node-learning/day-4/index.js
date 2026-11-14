const express = require("express");

const app = express();
app.use(express.json());
const PORT = 3000;

const products = [
  { id: 1, name: "Es Teh", category: "drink", price: 5000 },
  { id: 2, name: "Kopi Susu", category: "drink", price: 12000 },
  { id: 3, name: "Nasi Goreng", category: "food", price: 15000 },
];

app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  const search = products.find((data) => data.id === Number(id));
  if (!search) {
    return res.status(404).json({
      success: false,
      message: "Data invalid",
    });
  }
  res.status(200).json({
    success: true,
    message: "Data valid",
    data: {
      search,
    },
  });
});

app.get("/products", (req, res) => {
  const category = req.query.category || "";
  const search = req.query.search || "";

  const filtered = products.filter(
    (data) =>
      data.category.toLowerCase().includes(category.toLowerCase()) &&
      data.name.toLowerCase().includes(search.toLowerCase()),
  );

  res.status(200).json({
    success: true,
    message: "Data filter successfully",
    data: {
      filtered,
    },
  });
});

app.post("/products", (req, res) => {
  const { name, category, price } = req.body;

  if (!name || typeof name !== "string" || name.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "invalid named",
    });
  }
  if (typeof category !== "string" || category.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "invalid category",
    });
  }
  if (typeof price !== "number" || price <= 0) {
    return res.status(400).json({
      success: false,
      message: "price must be a nummber",
    });
  }

  const id = products.length + 1;
  const newProduct = {
    id,
    name,
    category,
    price,
  };
  products.push(newProduct);
  res.status(201).json({
    success: true,
    message: "Data created",
    data: newProduct,
  });
});

app.put("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const { name, category, price } = req.body;
  const Index = products.findIndex((data) => data.id === id);
  if (Index === -1) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  // 3. Validasi input
  if (!name || typeof name !== "string" || name.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "Name is required",
    });
  }

  if (!category || typeof category !== "string" || category.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "Category is required",
    });
  }
    if (typeof price !== "number" || price <= 0) {
    return res.status(400).json({
      success: false,
      message: "Price must be a positive number",
    });
  }

  const updatedProduct = {
    id,
    name: name.trim(),
    category: category.trim(),
    price
  }
  products[Index] =  updatedProduct

  res.status(200).json({
    success: true,
    message: "Data update",
    data:updatedProduct
  });
});

app.patch("/products/:id", (req, res)=>{
  const id = Number(req.params.id)
  const product = products.findIndex((data)=> data.id === id)
  if(product === -1){
    return res.status(404).json({
      success: false,
      message: "Data tidak ditemukan"
    })
  }
  const {price} = req.body

  if(typeof price !== "number" || price <= 0){
    return res.status(400).json({
      success: false,
      message: "Data invalid"
    })
  }

  products[product].price = price

  res.status(200).json({
    success: true,
    message: "data berhasil diupdate",
    data: {
      price
    }
  })
})

app.delete("/products/:id", (req, res)=>{
  const id = Number(req.params.id);
  const product = products.findIndex((data)=> data.id === id)
  if(product === -1){
    return res.status(404).json({
      success: false,
      message: "Data tidak ditemukan"
    })
  }

  products.splice(product, 1)

  res.status(200).json({
    success: true,
    message: "Data Berhasil Dihapus",
    data:{
      products
    }
  })
  
})

app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
});

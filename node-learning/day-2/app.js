const express = require('express')

const app = express();
app.use(express.json())
const PORT = 3000;

app.get('/health', (req, res) =>{
    res.status(200).json({
        success: true,
        message: "server is running",
        status: "ok"
    })
});

app.get('/about', (req, res) =>{
    res.status(200).json({
        application: "Product management API",
        version: "1.0.0",
        developer: "Backend Team"
    })
});

app.post('/api/products', (req, res) =>{
    const {name, price} = req.body

    if(!name || typeof name !== 'string' || name.trim() === ""){
        return    res.status(400).json({
        success: false,
        message: "invalid product data",
    })
    }

    if( typeof price !== "number" || price <= 0){
        return    res.status(400).json({
        success: false,
        message: "price must be a nummber",
    })
    }

    res.status(201).json({
        success: true,
        message: "product created",
        data:{
            name, 
            price
        }
    })
 
})

app.listen(PORT, ()=>{
    console.log(`server berjalan di http://localhost:${PORT}`)
})
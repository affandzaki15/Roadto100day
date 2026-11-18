import express from "express"
import productRoutes from "./routes/routes.product.js"
import{loggingMiddle} from "./middlewares/logger.middleware.js"
import{errorMiddle} from "./middlewares/error.middlewares.js"

const app = express()
app.use(express.json())
const PORT = 3000

app.use(loggingMiddle)
app.use("/api/products", productRoutes)

app.get("/test-error", (req, res, next)=>{
    const errr =  new Error("Server error")
    next(errr)
})

app.use(errorMiddle)

app.listen(PORT, ()=>{
    console.log(`Server is unning in http://localhost:${PORT}`)
})
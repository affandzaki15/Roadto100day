import express from "express"
import productRoutes from "./routes/product.routes.js"
import {logger} from "./middlewares/logger.middleware.js"
import {errorHandler} from "./middlewares/error.middleware.js"
const app = express();
app.use(express.json())
const PORT = 3000

app.use(logger)
app.use("/api/products", productRoutes)

app.get("/test-error", (req, res, next) => {
  const err = new Error("Testing error handler");
  next(err);
});

app.use(errorHandler)
app.listen(PORT, ()=>{
    console.log(`server is running http://localhost:${PORT}`)
})
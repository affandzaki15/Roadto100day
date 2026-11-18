import { products } from "../data/products.js"

const getAllProducts = () => {
    return products
}

function getProductById(id){
    const data = products.find((item) => item.id === Number(id))
    return data || null
}
function createProduct(data){
    const {name, category, price} = data

    const id = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1
    const newProducts = {
        id,
        name,
        category,
        price
    }
    products.push(newProducts)
    return newProducts
}

function updateProduct(id, data){
    const productId = Number(id)
    const datas = products.findIndex((item) => item.id === productId)
    if(datas === -1) return null

    
    const currentData = products[datas]
    const updatedProduct = {
        ...currentData,
        ...data,
        id:currentData.id
    }

    if(data.price !== undefined && (typeof data.price !== "number" || data.price <= 0)){
        return null
    }

   
    products[datas] = updatedProduct
    return updatedProduct
}

function replaceProduct(id, data){
    const productId = Number(id)
    const product = products.findIndex((data) => data.id === productId)
    if(product === -1) return null
    const { name, category, price} = data
    const newProduk = {
        id: productId,
        name,
        category,
        price
    }
    products[product] = newProduk
    return newProduk
}

function deleteProduct(id){
    const deleted = products.findIndex((data) => data.id === Number(id))
    if(deleted === -1) return null

    const deletedProduct = products[deleted]
    products.splice(deleted, 1)

    return deletedProduct
}


export  {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    replaceProduct,
    deleteProduct
}
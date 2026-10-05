type Product = {
    readonly id: number,
    name: string,
    price: number,
    description?: string
}

const products: Product[]= [
    {
        id: 1,
        name: "Laptop",
        price: 3000000,
        description: "Toshiba"
    },
    {
        id: 2,
        name: "Mouse",
        price: 100000,
        description: "XgXba"
    },
    {
        id: 3,
        name: "keyboard",
        price: 200000,
        description: "asus"
    }

]

function addProduct(id: Product):void{
    products.push(id) 
}

function getProducts(): Product[]{
return products
}
function updatePrice(
    id: number,
    price: number,
): void{
    const finder = products.find(item => item.id === id)
    if(!finder) return
    finder.price = price
    
}

function deleteProduct(data: number): void{
    const del = products.findIndex(item => item.id === data)
    if(del === -1) return
    products.splice(del, 1)
}


addProduct({
    id: 5,
    name: "LR",
    price: 30000000,
    description: "LR"
})
updatePrice(1, 1500000)
deleteProduct(3)
console.log(getProducts())


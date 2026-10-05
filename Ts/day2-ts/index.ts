// type Product = {
//     readonly id: number,
//     name: string,
//     price: number,
//     description?: string
// }
// const products: Product[] =[
//     {
//        id: 1,
//         name: "LG",
//         price: 20000,
//         description:"Television"
//     },
//     {
//         id: 2,
//         name: "Samsung",
//         price: 30000,
//     },
//     {
//         id: 3,
//         name: "Polytron",
//         price: 40000,
//         description: "Air Conditioner"
//     }
// ]

// function addProduct(item: Product):void{
//     products.push(item)
// }

// function getProducts():  Product[]{
//     return products
// }
// console.log(getProducts());

// function updateProducts(
//     id: number,
//     name: string,
//     price: number
// ): void {
//     const product = products.find(item => item.id === id)
//     if(!product) return;
//     product.name = name;
//     product.price = price
// }

// function deleteProduct(id: number): void{
//  const index = products.findIndex(item => item.id === id);
//  if(index === -1) return;
//  products.splice(index, 1)
// }
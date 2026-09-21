const products = [
  { id: 1, name: "Laptop", price: 8000000, stock: 5 },
  { id: 2, name: "Mouse", price: 300000, stock: 12 },
  { id: 3, name: "Keyboard", price: 700000, stock: 0 },
  { id: 4, name: "Monitor", price: 2500000, stock: 3 },
  { id: 5, name: "Headset", price: 900000, stock: 8 }
];

// A
const findProducts = products.find(data => data.id === 4)
console.log(findProducts)

// B
const indxing = products.findIndex(data => data.id === 4)
console.log(indxing)

// C
const filtering = products.filter(data =>{
    if (data.stock > 0){
        console.log(data.name) 
    }
})



// D
const arrayBaru = products.map(data => data.name)
console.log(arrayBaru)

// E
const satuNilai = products.reduce((acc, value) =>{
    return acc += value.price
}, 0)
console.log(satuNilai)
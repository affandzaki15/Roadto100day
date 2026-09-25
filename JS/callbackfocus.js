// // const makanan = [
// //     { name: "Pizza", price: 35000 },
// //     { name: "Burger", price: 30000 },
// //     { name: "Pasta", price: 28000 },
// //     { name: "Pizza Cheese", price: 40000 }
// // ];
// // const seacrh = document.querySelector("#text")
// // const listMenu = document.querySelector("#list")

// // function tampilkan(data){
// //     listMenu.innerHTML =""
// //     data.forEach(datas =>{
// //         listMenu.innerHTML += `
// //         <div>
// //         <p>${datas.name}</p>
// //         <p>${datas.price}</p>
// //         </div>
// //         `
// //     })
// // }

// // seacrh.addEventListener("input", ()=>{
// //     const keyword = seacrh.value.toLowerCase()
// //     const hasil = makanan.filter(data =>{
// //         return data.name.toLowerCase().includes(keyword)
// //     })
// // tampilkan(hasil)
// // })

// // tampilkan(makanan)

// const seacrh = document.querySelector("#text");
// const listMenu = document.querySelector("#list");

// let semuaMakanan = []
// async function makan() {
//     try{
//         const response = await fetch("https://dummyjson.com/recipes")
//         if(!response.ok){
//             throw new Error("Data tidak ditemukan")
//         }
//         const data = await response.json()

//         semuaMakanan = data.recipes

//         prosesData(semuaMakanan, (data) =>{
//             tampilkan(data)
//         })

//     } catch(error){
//         console.log(error.message)
//     }
// }

// function prosesData(data, callback){
//     callback(data)
// }
// function tampilkan(data){
//      listMenu.innerHTML = ""
//         data.forEach(data =>{
//             listMenu.innerHTML += `
//             <div>
//             <img src="${data.image}" width="150px"/>
//             <p>${data.name}</p>
//             <p>${data.cuisine}</p>
//             <p>${data.rating}</p>
//             </div>
//             `
//         })
// }
// seacrh.addEventListener("input", () =>{
//    const keyword = seacrh.value.toLowerCase()
//    const hasil = semuaMakanan.filter(data =>{
//     return data.name.toLowerCase().includes(keyword)
//    })

//    prosesData(hasil, (data)=>{
//     tampilkan(data)
//    })
// })

// makan()

// const nama = "Affan";

// function proseNama(datas, callback){
//     callback(datas)
// }
// proseNama(nama, (data) =>{
//     console.log("Halo " + data)
// })

// const products = [
//     { id: 1, name: "Laptop", category: "Electronics", price: 12000000 },
//     { id: 2, name: "Mouse", category: "Electronics", price: 250000 },
//     { id: 3, name: "Keyboard", category: "Electronics", price: 750000 },
//     { id: 4, name: "T-Shirt", category: "Fashion", price: 150000 },
//     { id: 5, name: "Jeans", category: "Fashion", price: 350000 },
//     { id: 6, name: "Running Shoes", category: "Sports", price: 850000 },
//     { id: 7, name: "Football", category: "Sports", price: 300000 },
//     { id: 8, name: "Headset", category: "Electronics", price: 650000 },
//     { id: 9, name: "Jacket", category: "Fashion", price: 500000 },
//     { id: 10, name: "Badminton Racket", category: "Sports", price: 450000 }
// ];

// function prosesProduk(data, callback){
//     callback(data)
// }

// prosesProduk(products, (data)=>{
//     const datas = data
//             .filter(data => data.category === "Electronics")
//             .filter(data => data.price < 1000000)
//     datas.forEach(data => {
//                 console.log(`${data.name} - ${data.price}` )
//             })
// })

// const products = [
//     { name: "Laptop", category: "Electronics", price: 12000000 },
//     { name: "Mouse", category: "Electronics", price: 250000 },
//     { name: "Keyboard", category: "Electronics", price: 750000 },
//     { name: "T-Shirt", category: "Fashion", price: 150000 },
//     { name: "Jeans", category: "Fashion", price: 350000 }
// ];

// const searchList = document.querySelector("#search");
// const productList = document.querySelector("#list");

// function prosesData(data, callback) {
//     callback(data);
// }

// function ambilData(datas){
//     productList.innerHTML = "";
//     datas.forEach(data =>{
//         productList.innerHTML += `
//         <div>
//         <p>${data.name}</p>
//         <p>${data.category}</p>
//         <p>${data.price}</p>
//         </div>
//         `
//     })
// }
// searchList.addEventListener("input", ()=>{
//     const keyword = searchList.value.toLowerCase()

//     const hasil = products.filter((data)=>{
//        return data.name.toLowerCase().includes(keyword)
//     })
//     prosesData(hasil, (data)=>{
//         ambilData(data)
//     })
// })

// ambilData(products)

const products = [
  { name: "Laptop", category: "Electronics", price: 12000000 },
  { name: "Mouse", category: "Electronics", price: 250000 },
  { name: "Keyboard", category: "Electronics", price: 750000 },
  { name: "T-Shirt", category: "Fashion", price: 150000 },
  { name: "Jeans", category: "Fashion", price: 350000 },
];

const searchList = document.querySelector("#search");
const categoryList = document.querySelector("#category");
const productList = document.querySelector("#list");

function prosesData(data, callback) {
  callback(data);
}

function ambilData(params) {
  productList.innerHTML = "";
  params.forEach((data) => {
    productList.innerHTML += `
            <div>
            <p> ${data.name}</p>
            <p> ${data.category}</p>
            <p> ${data.price}</p>
            </div>
        
        `;
  });
}

function prosesList() {
  const category = categoryList.value;
  const keyword = searchList.value.toLowerCase();
  const hasil = products
  .filter((data) => {
    return data.name.toLowerCase().includes(keyword);
  })
  .filter(data =>{
    return category === "all" || data.category === category
  })



  prosesData(hasil, (data) => {
    ambilData(data);
  });
}

searchList.addEventListener("input", () => {
    prosesList()
});

categoryList.addEventListener("change", () =>{
    prosesList()
})

ambilData(products);

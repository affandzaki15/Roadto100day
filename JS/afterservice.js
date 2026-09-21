// // 1

// const products = [
//   { id: 1, name: "Laptop", price: 8000000, stock: 5 },
//   { id: 2, name: "Mouse", price: 300000, stock: 12 },
//   { id: 3, name: "Keyboard", price: 700000, stock: 0 },
//   { id: 4, name: "Monitor", price: 2500000, stock: 3 },
//   { id: 5, name: "Headset", price: 900000, stock: 8 },
// ];

// // A
// const findProducts = products.find((data) => data.id === 4);
// console.log(findProducts);

// // B
// const indxing = products.findIndex((data) => data.id === 4);
// console.log(indxing);

// // C
// const filtering = products.filter((data) => {
//   if (data.stock > 0){
//     console.log(data.name)
//   }
// })
//   //  console.log(filtering)
// // D
// const arrayBaru = products.map((data) => data.name);
// console.log(arrayBaru);

// // E
// const satuNilai = products.reduce((acc, value) => {
//   return (acc += value.price);
// }, 0);
// console.log(satuNilai);

// // 2 Object
// const student = {
//   name: "Affan",
//   age: 23,
//   major: "Mathematics",
//   scores: [80, 75, 90, 85],
// };

// function getStudentInfo(students) {
//   const { name, age, major, scores } = students;
//   const rataRata = scores.reduce((acc, value) => {
//     return (acc += value);
//   }, 0);
//   const rataRata2 = rataRata / scores.length 
 
//   const status2 = rataRata2 >= 75 ? "Lulus" : "Tidak :Lulus"
  
//   return{
//     nama: name,
//     umur: age,
//     jurusan: major,
//     rataRata: rataRata2,
//     status: status2
//   }

  
// }

// console.log(getStudentInfo(student));

// const nameInput = document.querySelector("#name-input")
// const buttonShow = document.querySelector("#show-button")
// const resultWeb = document.querySelector("#result")


// buttonShow.addEventListener("click", (event)=>{
//   event.preventDefault()

//   const nama = nameInput.value;

//   if(nama.trim() === ""){
//     resultWeb.textContent = "Nama tidak boleh kosong"
//     return
//   }

//   resultWeb.textContent = ` Halo, ${nama}`
  
// })


// // 4
// const books = [
//   {
//     id: 1,
//     title: "Atomic Habits",
//     author: "James Clear",
//     finished: true
//   },
//   {
//     id: 2,
//     title: "Deep Work",
//     author: "Cal Newport",
//     finished: false
//   },
//   {
//     id: 3,
//     title: "Zero to One",
//     author: "Peter Thiel",
//     finished: true
//   }
// ];

// const listBook = document.querySelector("#book-list")
// function booklet (datakuy){
//   listBook.innerHTML = "";

//   datakuy.forEach(data => {
//     let tombol = ""
//     if(data.finished){
//       tombol = `<button onClick="ubahStatus(${data.id})">Batal Selesai</button>`
//     } else{
//       tombol = `<button onClick="ubahStatus(${data.id})">Tanda Selesai</button>`

//     }
//     listBook.innerHTML += `

//     <div>
//     <p>${data.title}</p>
//     <p>${data.author}</p>
//     <p>Status: ${data.finished ? "selesai" : "belum"}</p>
//     ${tombol}
//     </div>
    
//     `
//   })
// }
// // ==========================
// // UBAH STATUS
// // ==========================

// function ubahStatus(id) {

//   const book = books.find((data) => data.id === id);

//   book.finished = !book.finished;

//   booklet(books);
// }
// booklet(books)

// const books = [
//   {
//     id: 1,
//     title: "Atomic Habits",
//     author: "James Clear",
//     finished: true
//   },
//   {
//     id: 2,
//     title: "Deep Work",
//     author: "Cal Newport",
//     finished: false
//   },
//   {
//     id: 3,
//     title: "Zero to One",
//     author: "Peter Thiel",
//     finished: true
//   }
// ];

// const listBook = document.querySelector("#book-list")

// function booklet(books){
//   listBook.innerHTML = "";

//   books.forEach(data => {

//     let tombol = "";
//     if(data.finished){
//       tombol = `<button onClick="ubahData(${data.id})">Batal Selesai</button>`
//     } else{
//       tombol = `<button onClick="ubahData(${data.id})">Selesai</button>`

//     }


//     listBook.innerHTML += `
//     <div>
//     <p>${data.title}</p>
//     <p>${data.author}</p>
//     <p>${data.finished ? "Selesai" : "Belum Selesai"}</p>
//     ${tombol}
//     </div>
//     `
//   })
// }

// function ubahData(id){
//   const book = books.find(data => data.id === id)

//   book.finished = !book.finished

//   booklet(books)
// }

// booklet(books)
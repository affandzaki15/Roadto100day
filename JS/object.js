// const students= [
//     {
//         id: 1,
//         nama: "affan",
//         umur: 23,
//         jurusan: "Informatika",
//         nilai: 85
//     },
//     {
//         id: 2,
//         nama: "Budi",
//         umur: 22,
//         jurusan: "Sistem Informasi",
//         nilai: 78
//     },
//     {
//         id: 3,
//         nama: "Caca",
//         umur: 21,
//         jurusan: "Informatika",
//         nilai: 92
//     }
// ]

// console.log(students)

// let semua = ""

// students.forEach(({nama, umur, jurusan, nilai}) => {
//     semua += `${nama} - ${umur} - ${jurusan} - ${nilai}\n`
// })
// console.log(semua)

// // 1
// students.forEach(({nama, jurusan, nilai})=> {
//    const tampil = `${nama} - ${jurusan} - ${nilai}`
//    console.log(tampil)
// })

// // 2
// function cariMahasiswa(id){
//     return students.find(student => student.id === id)
// }
// console.log(cariMahasiswa(4))

// // 3
// const mahasiswaBaru =  {
//         id: 4,
//         nama: "Doni",
//         umur: 24,
//         jurusan: "Teknik Informatika",
//         nilai: 88,
//     }

// const pushs = students.push(mahasiswaBaru)
// console.log(pushs)

// // 4
// const updateMahasiswa = students.map(student =>{
//     if(student.id === 1){
//         return{
//             ...student,
//             nilai: 95
//         }
//     }
//     return student
// })

// console.log(updateMahasiswa)

// // 5

// const students = [
//   {
//     id: 1,
//     nama: "Affan",
//     jurusan: "Informatika",
//     nilai: 85
//   },
//   {
//     id: 2,
//     nama: "Budi",
//     jurusan: "Sistem Informasi",
//     nilai: 78
//   },
//   {
//     id: 3,
//     nama: "Caca",
//     jurusan: "Informatika",
//     nilai: 92
//   }
// ];

// // const getStudentCards = students.map(({id, nama, jurusan, nilai}) => {
// //     if(nilai >= 80){
// //         return{
// //        id, nama,jurusan, nilai,
// //        status: "lulus"
// //         };
// //     } else {
// //         return{
// //         id, nama, jurusan, nilai,
// //         status: "tidak lulus"
// //     };
// // }
// // })

// // console.log(getStudentCards)

// const getStudentCards = students.map(({ ...student }) => {

//     if (student.nilai >= 80) {
//         return {
//       ...student,
//       status: "lulus"
//     };
// } else {
//     return {
//       ...student,
//       status: "tidak lulus"
//     };
// }

// });
// console.log(getStudentCards)

// const student = [
//   {
//     id: 1,
//     nama: "affan",
//     nilai: 85,
//   },
//   {
//     id: 2,
//     nama: "Budi",
//     nilai: 65,
//   },
//   {
//     id: 3,
//     nama: "Caca",
//     nilai: 90,
//   },
// ];

// const hasil = student.map(({...students})=>{
//   if(students.nilai >=80) {
//     return {
//       ...students,
//       status: "Lulus"
//     }
//   } else {
//     return{
//       ...students,
//       status: "Tidak Lulus"
//     }
//   }
// })
// console.log(hasil)

// const students = [
//   {
//     id: 1,
//     nama: "Affan",
//     jurusan: "Informatika",
//     nilai: 85
//   },
//   {
//     id: 2,
//     nama: "Budi",
//     jurusan: "Sistem Informasi",
//     nilai: 65
//   },
//   {
//     id: 3,
//     nama: "Caca",
//     jurusan: "Informatika",
//     nilai: 90
//   }
// ];

// function cariMahasiswa (id){
// const mahasiswa = students.find(student => student.id === id)
//    const {nama, jurusan, nilai} = mahasiswa;
//    console.log(`nama: ${nama}`);
//    console.log(`jurusan: ${jurusan}`);
//    console.log(`nilai: ${nilai}`);
// }

// cariMahasiswa(2)

const products = [
  {
    id: 101,
    nama: "Laptop",
    kategori: "Elektronik",
    harga: 8000000
  },
  {
    id: 102,
    nama: "Mouse",
    kategori: "Aksesoris",
    harga: 150000
  },
  {
    id: 103,
    nama: "Keyboard",
    kategori: "Aksesoris",
    harga: 500000
  }
];

// function cariProduk (id){
//   const aksesoris1 = products.find(data => data.id === id)
//   const {nama, kategori, harga} = aksesoris1
//   console.log(`nama: ${nama}`); 
//   console.log(`Kategori: ${kategori}`); 
//   console.log(`Harga: ${harga}`); 
// }

// cariProduk(103)

function cariProduk (id){
  const aksesoris1 = products.find(data => data.id === id)

  if(!aksesoris1){
    console.log("produk tidak ditemukan");
    return
  }
  const {nama, kategori, harga} = aksesoris1
  console.log(`nama: ${nama}`); 
  console.log(`Kategori: ${kategori}`); 
  console.log(`Harga: ${harga}`); 

}

cariProduk(10000)
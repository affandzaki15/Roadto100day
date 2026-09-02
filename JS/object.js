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

const students = [
  {
    id: 1,
    nama: "Affan",
    jurusan: "Informatika",
    nilai: 85
  },
  {
    id: 2,
    nama: "Budi",
    jurusan: "Sistem Informasi",
    nilai: 78
  },
  {
    id: 3,
    nama: "Caca",
    jurusan: "Informatika",
    nilai: 92
  }
];

// const getStudentCards = students.map(({id, nama, jurusan, nilai}) => {
//     if(nilai >= 80){
//         return{
//        id, nama,jurusan, nilai,
//        status: "lulus"
//         };
//     } else {
//         return{
//         id, nama, jurusan, nilai,
//         status: "tidak lulus"
//     };
// }
// })

// console.log(getStudentCards)

const getStudentCards = students.map(({ ...student }) => {
    
    if (student.nilai >= 80) {
        return {
      ...student,
      status: "lulus"
    };
} else {
    return {
      ...student,
      status: "tidak lulus"
    };
}

});
console.log(getStudentCards)
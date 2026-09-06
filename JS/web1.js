const students = [
  {
    id: 1,
    nama: "Affan",
    umur: 23,
    jurusan: "Informatika",
    nilai: 85
  },
  {
    id: 2,
    nama: "Budi",
    umur: 22,
    jurusan: "Sistem Informasi",
    nilai: 65
  },
  {
    id: 3,
    nama: "Caca",
    umur: 21,
    jurusan: "Informatika",
    nilai: 90
  },
  {
    id: 4,
    nama: "Dina",
    umur: 22,
    jurusan: "Teknik Komputer",
    nilai: 72
  }
];

// banyak siswa
const totalMahasiswa = students.length
document.querySelector("#total-mahasiswa").textContent = totalMahasiswa

// rata
function totalRata (){
  return students.reduce((acc, value)=>{
    return acc += value.nilai
  }, 0)
}
const hasil1 = totalRata() / students.length
document.querySelector("#rata-rata").textContent = hasil1

// lulus
const mahasiswaLulus = students.filter(data => data.nilai >= 80).length
document.querySelector("#mahasiswa-lulus").textContent = mahasiswaLulus

// nilai tertinggi
const nilaiTertinggi = students.reduce((acc, value) =>{
  if(acc.nilai < value.nilai){
    return value
  } 
  return acc
}, students [0])

document.querySelector("#nilai-tertinggi").textContent = nilaiTertinggi.nilai
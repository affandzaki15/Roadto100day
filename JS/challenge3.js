const students = [
  {
    id: 1,
    nama: "Affan",
    umur: 23,
    jurusan: "Informatika",
    nilai: 85,
  },
  {
    id: 2,
    nama: "Budi",
    umur: 22,
    jurusan: "Sistem Informasi",
    nilai: 65,
  },
  {
    id: 3,
    nama: "Caca",
    umur: 21,
    jurusan: "Informatika",
    nilai: 90,
  },
  {
    id: 4,
    nama: "Dina",
    umur: 22,
    jurusan: "Teknik Komputer",
    nilai: 72,
  },
];

function getMahasiswaInformatika(){
    return students
    .filter(data => data.jurusan === "Informatika")
    .map(data => data.nama)
}
console.log(getMahasiswaInformatika())

function getMahasiswaLulus(){
    const mahasiswa = students
    .filter(data => data.nilai >= 80)
    .map(data => data.nama)
    return mahasiswa
}
console.log(getMahasiswaLulus())

function getMahasiswa(id){
    const find = students.find(data => data.id === id)
    return find
}
console.log(getMahasiswa(3))


// 4
function cekNilai(){
    const satuMahasiswa = students.some(data => data.nilai >=90)
    console.log(satuMahasiswa)
}
cekNilai()

// 5 
function hitungTotalNilai(){
    return students.reduce((acc, value)=>{
       return acc += value.nilai 
    }, 0)
}
console.log(hitungTotalNilai())

// 6
function getJumlahLulus(){
    const jumlah = students 
        .filter(data => data.nilai >= 80)
        .map(data => data.nama).length
    return jumlah
}
console.log(getJumlahLulus())

// 7 
function getNilaiTertinggi(){
    const tertinggi = students.reduce((acc, value) => {
            if (acc.nilai < value.nilai){
                return value
            }
            return acc
    }, students[0])
    return tertinggi
}
console.log(getNilaiTertinggi())
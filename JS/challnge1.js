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

// 1 Tampil
const tampilkanSemuaMahasiswa = students.map(({nama, jurusan, nilai}) =>{
    console.log(`${nama} - ${jurusan} - ${nilai}`)
})

// 2
function cariMahasiswa(id){
    const mahasiswa = students.find(student => student.id === id)

    if(!mahasiswa){
        console.log("data not found");
        return;
    }

    const {nama, umur, jurusan, nilai} = mahasiswa
    console.log(`Nama: ${nama}`);
    console.log(`Umur: ${umur}`);
    console.log(`Jurusan: ${jurusan}`);
    console.log(`Nilai: ${nilai}`);
}
cariMahasiswa(3)

// 3 
function cekKelulusan(id){
    const student = students.find(student => student.id === id)
    const status = student.nilai >= 80 ? "lulus" : "tidak lulus";
    return `${student.nama}: ${status}`
}
console.log(cekKelulusan(1))
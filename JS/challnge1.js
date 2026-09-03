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

// 4
function tentukanGrade(nilai){
   
    if(nilai>=90){
        console.log("A")
    } else if (nilai >= 80){
        console.log("B")
    } else if (nilai >= 70){
        console.log("C")
    } else if (nilai >= 60){
        console.log("D")
    } else {
        console.log("E")
    }

    return
}
tentukanGrade(85)

// 5
    const filter = students
    .filter(data => data.nilai >= 80)
    .map(({nama}) =>{
        const hasil = `${nama}`
        console.log(hasil)
    })

// 6
const hitung = students.reduce((acc, nilai) => {
   return acc += nilai.nilai / 4
     
}, 0)
console.log(hitung)

// 7
const cekSemuaLulus = students.every(id => id.status === "lulus")
const hasill = `Semua mahasiswa lulus: ${cekSemuaLulus}`
console.log(hasill)

// 8 
const adaNilai = students.some(data => data.nilai === 90)
const hasill2 = `Ada mahasiswa dengan nilai 90: ${adaNilai}`
console.log(hasill2)

// 9
function updateNilai (id, nilaiBaru){
    const student = students.find(student => student.id === id)

    const studentBaru = {
        ...student,
        nilai: nilaiBaru
    }

    return studentBaru
}

console.log(updateNilai(2,82))


// 10
function tampilkanSummary(id){
    const sum = students.find(data => data.id === id)

    const summary = {
        ...sum,
    }
    return summary
}

console.log (tampilkanSummary(1))
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

// 1 Tampil
const tampilkanSemuaMahasiswa = students.map(({ nama, jurusan, nilai }) => {
  console.log(`${nama} - ${jurusan} - ${nilai}`);
});

// 2
function cariMahasiswa(id) {
  const mahasiswa = students.find((student) => student.id === id);

  if (!mahasiswa) {
    console.log("data not found");
    return;
  }

  const { nama, umur, jurusan, nilai } = mahasiswa;
  console.log(`Nama: ${nama}`);
  console.log(`Umur: ${umur}`);
  console.log(`Jurusan: ${jurusan}`);
  console.log(`Nilai: ${nilai}`);
}
cariMahasiswa(3);

// 3
function cekKelulusan(id) {
  const student = students.find((student) => student.id === id);
  const status = student.nilai >= 80 ? "lulus" : "tidak lulus";
  return status;
}
console.log(cekKelulusan(1));

// 4
function tentukanGrade(nilai) {
  if (nilai >= 90) {
    return "A";
  } else if (nilai >= 80) {
    return "B";
  } else if (nilai >= 70) {
    return "C";
  } else if (nilai >= 60) {
    return "D";
  } else {
    return "E";
  }
}
const hasil = tentukanGrade(85);
console.log(hasil);

// 5
const filter = students
  .filter((data) => data.nilai >= 80)
  .map(({ nama }) => nama);
console.log(filter);

// 6
const hitung = students.reduce((acc, nlai) => {
  return (acc += nilai.nilai);
}, 0);
const rata = hitung / students.length;
console.log(rata);

// 7
const cekSemuaLulus = students.every((id) => id.status === "lulus");
const hasill = `Semua mahasiswa lulus: ${cekSemuaLulus}`;
console.log(hasill);

// 8
const adaNilai = students.some((data) => data.nilai === 90);
const hasill2 = `Ada mahasiswa dengan nilai 90: ${adaNilai}`;
console.log(hasill2);

// 9
function updateNilai(id, nilaiBaru) {
  return students.map((student) =>
    student.id === id ? { ...student, nilai: nilaiBaru } : student,
  );
}
const updateNilaicuy = updateNilai(2, 85);
console.log(updateNilaicuy);

// 10
function tampilkanSummary(id) {
  const sum = students.find((data) => data.id === id);
  const { nama, umur, jurusan, nilai } = sum;
  const grade = tentukanGrade(nilai);
  const status = cekKelulusan(id);
  return `
  === STUDENT SUMMARY ===

  Nama    : ${nama}
  Umur    : ${umur}
  Jurusan : ${jurusan}
  Nilai   : ${nilai}
  Grade   : ${grade}
  Status  : ${status}
  
  `;
}

console.log(tampilkanSummary(1));

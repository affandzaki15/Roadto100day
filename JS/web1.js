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

// banyak siswa
const totalMahasiswa = students.length;
document.querySelector("#total-mahasiswa").textContent = totalMahasiswa;

// rata
function totalRata() {
  return students.reduce((acc, value) => {
    return (acc += value.nilai);
  }, 0);
}
const hasil1 = totalRata() / students.length;
document.querySelector("#rata-rata").textContent = hasil1;

// lulus
const mahasiswaLulus = students.filter((data) => data.nilai >= 80).length;
document.querySelector("#mahasiswa-lulus").textContent = mahasiswaLulus;

// nilai tertinggi
const nilaiTertinggi = students.reduce((acc, value) => {
  if (acc.nilai < value.nilai) {
    return value;
  }
  return acc;
}, students[0]);

document.querySelector("#nilai-tertinggi").textContent = nilaiTertinggi.nilai;

// seacrh
const inputSeacrh = document.querySelector(".input-mhs");
inputSeacrh.addEventListener("input", () => {
filterMahasiswa()
});


// daftar-mhs

const daftarMahasiswa = document.querySelector("#daftar-mahasiswa");
function tampilkanMahasiswa(data) {
  daftarMahasiswa.innerHTML = "";

  data.forEach((student) => {
    daftarMahasiswa.innerHTML += `
    <div class="fill">
      <div class="fill-nama">
                <h2>${student.nama}</h2>
                <p>${student.nilai >= 80 ? "LULUS" : "TIDAK LULUS"}</p>
      </div>
      <div>
                <p>${student.jurusan}</p>
                <p>${student.umur}</p>
      </div>
            <p>Nilai: ${student.nilai}</p>
      <div>
                <button>Detail</button>
                <button>Hapus</button>
      </div>
    </div>
    
    `;
  });
}

const selectFilter = document.querySelector(".select-mhs");
selectFilter.addEventListener("change", ()=>{
  filterMahasiswa()
})

tampilkanMahasiswa(students)

function filterMahasiswa(){
  const status = selectFilter.value;
  const input = inputSeacrh.value;
  
  let hasil;
  
  if(status === "lulus"){
    hasil = students.filter(data => data.nilai >= 80);
  } else if (status === "tidak-lulus"){
    hasil = students.filter(data => data.nilai < 80);
  } else {
    hasil = students;
  }
  const hasil2 = hasil.filter((data) =>
    data.nama.toLowerCase().includes(input.toLowerCase()) 
  );

  tampilkanMahasiswa(hasil2)
}


// Mahasiswa Terbaik
const terbaik = students.reduce((acc, value) =>{
  if(acc.nilai < value.nilai){
    return value
  }
  return acc
}, students[0])
const namaTerbaik = document.querySelector("#terbaik-nama");
const nilaiTerbaik = document.querySelector("#terbaik-nilai");
const jurusanTerbaik = document.querySelector("#terbaik-jurusan");

namaTerbaik.textContent = terbaik.nama;
nilaiTerbaik.textContent = terbaik.nilai;
jurusanTerbaik.textContent = terbaik.jurusan
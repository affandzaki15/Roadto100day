const films = [
  { id: 1, judul: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, judul: "Parasite", genre: "Drama", rating: 8.5 },
  { id: 3, judul: "Interstellar", genre: "Sci-Fi", rating: 8.7 },
  { id: 4, judul: "Whiplash", genre: "Drama", rating: 8.5 },
];

const ambil = films
    .filter(data => data.rating >= 8.7)
    .map(data => data.judul)
    console.log(ambil)

const vehicles = [
  { nama: "Avanza", jenis: "MPV", harga: 250 },
  { nama: "Civic", jenis: "Sedan", harga: 500 },
  { nama: "Xpander", jenis: "MPV", harga: 300 },
  { nama: "Brio", jenis: "Hatchback", harga: 200 },
];
const harga = vehicles
    .find(data => data.harga <=300)
    console.log(harga.nama)

const games = [
  { nama: "Elden Ring", genre: "RPG", harga: 600, stok: 3 },
  { nama: "FIFA 26", genre: "Sport", harga: 500, stok: 5 },
  { nama: "Minecraft", genre: "Sandbox", harga: 300, stok: 8 },
  { nama: "Cyberpunk 2077", genre: "RPG", harga: 450, stok: 2 },
];

const totalGame = games.reduce((acc, value)=>{
    return acc += value.harga * value.stok
}, 0)
const hasil = `stok semuanya adalah ${totalGame}`
console.log(hasil)

// foreach js
const flights = [
  { kode: "GA101", tujuan: "Bali", penumpang: 120 },
  { kode: "JT202", tujuan: "Jakarta", penumpang: 85 },
  { kode: "QZ303", tujuan: "Surabaya", penumpang: 150 },
];

// 1
flights.forEach((flight) => {
  const data = `${flight.kode} -${flight.tujuan}`
  console.log(data)
})

// 2
flights.forEach((data) =>{
  if(data.penumpang > 100) {
      const semua = `${data.kode}-${data.penumpang} penumpang`
      console.log (semua)
  }
})

// 3
function tampilkanPenerbangan(data){

  let hasil = "";
  data.forEach((flight) => {
    const all = `${flight.kode} -> ${flight.tujuan} `;
      hasil += all

  })

  return hasil
}

const terbang = `penerbangan yang akan landas hari ini adalah ${tampilkanPenerbangan(flights)}`
console.log(terbang)



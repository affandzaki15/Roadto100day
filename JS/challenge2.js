const products = [
  { id: 1, nama: "Laptop", kategori: "Elektronik", harga: 8000000, stok: 3 },
  { id: 2, nama: "Mouse", kategori: "Elektronik", harga: 150000, stok: 10 },
  { id: 3, nama: "Keyboard", kategori: "Elektronik", harga: 350000, stok: 0 },
  { id: 4, nama: "Buku", kategori: "Alat Tulis", harga: 50000, stok: 20 },
  { id: 5, nama: "Pulpen", kategori: "Alat Tulis", harga: 10000, stok: 50 }
];

// 1 Cari produk
function cariProduk(id){
    const cari = products.find(data => data.id === id)
    if (!cari){
        return "Produk tidak ditemukan"
    }
    const {nama, harga, stok} = cari
    return `${nama} - Rp${harga} - Stok: ${stok}`
}
console.log(cariProduk(2))

// 2
function cekStok(id){
    const cek = products.find(data => data.id === id)

    if(!cek){
        return "Produk tidak nemu"
    }
    const{nama, stok} = cek
    if(stok < 1){
         return (`${nama} habis`) 
        } else {
            return (`${nama} tersedia`) 
    }
}
console.log(cekStok(3))

// 3
function produkTersedia(){
    return products
        .filter(data => data.stok > 0)
        .map(data => data.nama)
        .join(", ")
}
console.log(produkTersedia())

// 4 reduce
function hitungTotal(){
    return products.reduce((acc, data)=> {
        return acc + data.harga * data.stok
    }, 0)
}

const hasil2 = `Total nilai seluruh stok: Rp ${hitungTotal()}`
console.log(hasil2)

// 5 Laporan
function buatLaporan(){
    const laporan = products.length
    const produk = products
        .filter(data => data.stok > 0)
        .length
    const produkHabis = products
    .filter(data => data.stok === 0)
    .length
    const total = hitungTotal()
    const mahal = products.reduce((acc, data) => {
        if(data.harga > acc.harga){
            return data
        }
        return acc
    }, products[0])

    return `
    === LAPORAN TOKO ===
    Total Produk : ${laporan}
    Produk Tersedia : ${produk}
    Produk Habis : ${produkHabis}
    Total Nilai stok: Rp ${total}
    Produk Termahal: ${mahal.nama}
    `
}
console.log(buatLaporan())
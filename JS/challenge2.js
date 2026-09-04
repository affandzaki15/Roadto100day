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
    const hasil = `${nama} - Rp${harga} - Stok: ${stok}`
    console.log(hasil)
}
cariProduk(2)

// 2
function cekStok(id){
    const cek = products.find(data => data.id === id)

    const{nama, stok} = cek
    if(stok < 1){
         console.log (`${nama} habis`) 
        } else {
            console.log (`${nama} tersedia`) 
    }
}
cekStok(3)

// 3
const produkTersedia = products
    .filter(stock => stock.stok > 0)
    .map(nama => nama.nama)
    .join(", ")
console.log(produkTersedia)

// 4 reduce
const total = products.reduce((acc, value)=>{
  return  acc + value.harga * value.stok
},0)

const hasil2 = `Total nilai seluruh stok: Rp ${total}`
console.log(hasil2)
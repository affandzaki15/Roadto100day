const userNames = ["yandy", "dimas", "mita"];
// const name = "ada " + "total " + userNames.length + " username";
const name = `ada total ${userNames.length} username`;
console.log(name);

// usernames
const newUsername = [
    'kakak',
    'adik'
]
const newNames = 'kodas';
const names = newUsername.includes(newNames);
if(names){
    console.log("username sudah ada");
} else {
    console.log("username belum ada");
}

// bracket
const makanan = ['mie', 'bakso', 'rendang']
console.log(makanan[1])

// foreach
const angka = [10,20,30,40,50];

angka.forEach(myAngka=>{
    console.log(myAngka)
});

const angka1 = [5, 10, 15, 20];
angka1.forEach(x =>{
    const tt = x * 2;
    console.log(tt)
})

const nilai1 = [50, 80, 65, 90, 70, 40];
nilai1.forEach(y =>{
    if (y >=70){
        console.log(y)
    }
})

const nama2 = ["Affan", "Budi", "Caca", "Doni"];
function tampilkanNama(nama2){
    const hello = "halo " + nama2;
    console.log(hello)
}

nama2.forEach(tampilkanNama);

const harga = [10000, 25000, 15000, 30000];

let total = 0;
harga.forEach(z =>{
    total += z;
})

console.log("Total " + " = " + total)

const transaksi = [
    { nama: "Buku", harga: 50000 },
    { nama: "Pulpen", harga: 10000 },
    { nama: "Tas", harga: 150000 },
    { nama: "Sepatu", harga: 300000 }
];

transaksi.forEach(item =>{
    if(item.harga >= 100000){
        console.log(`${item.nama} - Rp${item.harga}`)
    }
})


const buah1 = ["Apel", "Mangga"];

buah1.push("Jeruk");

console.log(buah1);



const buah = ["Apel", "Mangga"];

const hasil = buah.push("Jeruk");

console.log(hasil);

const buah2 = ["Apel", "Mangga"];

buah2.pop("mangga");

console.log(buah2);


const products = [
    { nama: "Laptop", harga: 8000000, nilai: 90 },
    { nama: "Mouse", harga: 150000, nilai: 85 },
    { nama: "Keyboard", harga: 500000, nilai: 88 },
    { nama: "Monitor", harga: 2500000, nilai: 92 },
    { nama: "USB Cable", harga: 75000, nilai: 70 }
];

const produk = products.map(item =>item.nama)
console.log(produk)

const murah = products.filter(item =>{
    if(item.harga < 500000){
        console.log(item.nama)
    }
}
)

const temukan = products.find(product => product.nama === "Keyboard")
console.log(temukan)



const total1 = products.reduce((acc, harg) => {
    return acc + harg.harga;
}, 0)

console.log(total1)
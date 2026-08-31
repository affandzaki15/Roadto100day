
// 1 Hitung Luas
function hitungLuas (p, l){
    return p * l
}
const luas = hitungLuas(3, 6)
console.log(luas)

// 2. Function Expression

function perkalianDeclaration(a, b){
    return a * b
}
const kali = perkalianDeclaration(5, 4)
console.log(kali)

const perkalianArrow = (r, m) => r * m
console.log(perkalianArrow(10,4))

// 3 Scope
const nama = "Affan";
function test(){
    const umur = 23;

    console.log(nama);
    console.log(umur);
}

test();
console.log(nama);
// console.log(umur);

// 1. consolelog nama dan umur didalam function, test(), cslog nama diluar functiom
// 2. cslog umur diluar function
// 3. karena cslog umur diluar function itu tidak didalam block sope dari variabel const jadinya gagal

// 4 Callback
function prosesAngka(angka, callback){
    const hasil = angka * 2;
    console.log(hasil);
     callback (hasil);

}

function tampilkan(hasil){
    console.log(`hasil: ${hasil}`)
}
prosesAngka(10, tampilkan)

// PROJECT 

function tambah(q,w){
    return q + w
}
function kurang(f,e){
    return f - e
}
function multiply(g,r){
    return g * r
}
function bagi(h,s){
    return h / s
}

// const hasil = bagi(4, 2)
// console.log(hasil)

function diskonn(h, d){
    const hargaDiskon = h - (h * d / 100);
    return hargaDiskon
}
// diskonn(10000, 20)

// PAJAK
function pajak(o,p){
    const dipaJakin = o + (o * p / 100)
    return dipaJakin
}

// pajak(100000, 10)


const subTotal = tambah(50000, 30000);
const setelahDiskon = diskonn(subTotal, 10);
const total = pajak(setelahDiskon, 11);
console.log(total) 
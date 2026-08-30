

// let hour = 17;
// let greeting;

// if (hour < 18){
//    greeting = "good day";
// }
// console.log(greeting)


// let age = 1;
// let status;

// if (age > 17){
//     status = "old";
// } else {
//     status = "young";
// }

// console.log(status)

// let age = 20;
// let country = "Konoha";
// let testDrive = "You don't permission"

// if (country == "Konoha"){
//     if (age > 17){
//         testDrive = "you have a drive";
//     }
// }

// console.log (testDrive);


// let age = 20;
// let hasCard = false;

// if (age >= 18 && hasCard){
//     console.log ("granted")
// } else if (age >=18 && !hasCard){
//     console.log ("requied");
// } else {
//     console.log("Underage")
// }   

// let anjay = 20 
// let text = (anjay < 18) ? "gas" : "noco";
// console.log(text)

// let weather = "even";
// let activity;

// switch (weather){
//     case "good":
//     activity = "football";
//     break;
//     case "bad":
//     activity = "sleep";
//     break;
//     default:
//     activity = "learn"
// }
// console.log (activity);


// const prices = [15000, 25000, 10000, 30000, 20000];
// let total = 0;

// for (let i = 0; i < prices.length; i++){
//     total += prices[i];
// }
// console.log(total);

// let balance = 100000;

// while(balance > 0){
//     balance -= 20000;
//     console.log("saldo: " + balance);
// }
// console.log(balance)

// let number = 1;
// while (number <= 30){
//     number++;
//     if(number % 3 === 0){
//         console.log(number);
//     }
// }

// let number = 1

// do{
//     console.log(number)
//     number++;
// } while (number <=5 )


// let text = "";
// loop1: for (let j = 1; j < 5; j++){
//     loop2: for (let i = 1; i< 5; i++){
//        if(i===3){
//         break loop1;
//        }
//        text += i + "<br>"
//     }
// }

// console.log(text)

// let nilai = -3;

// if (nilai < 0 || nilai > 100){
//     console.log("nilai tidak valid")
// } else if (nilai >= 81){
//     console.log("B")
// } else if (nilai >= 60 && nilai <= 80){
//     console.log("C")
// } else if (nilai >= 40 && nilai <= 59){
//     console.log("D")
// } else{
//     console.log("E")
// }

// let cuaca = "bagus";
// let active;
// switch(cuaca){
//     case "bagus":
//       active =  "Football";
//         break;
//     case "hujan":
//          active =  "turu";
//         break;
//     case "angin":
//          active =  "selimutan";
//         break;
//     default:
//         active = "hp an";

// }
// console.log(active)

// let nama = "affan";
// let umur = 23;
// let nilai = 85;

// let biodata = (`Hai nama saya ${nama} umur saya ${umur} tahun, saya memiliki nilai ${nilai}`)
// console.log(biodata)

// PROJECT DAY 1
// let nama = "Affan";
// let umur = 20;
// let nilai = 85;
// const lulus = nilai >=75

// let kelulusan = (`=== PROFIL === \nNama: ${nama}  \nUmur: ${umur} \nNilai: ${nilai}  \nLulus: ${lulus}`)
// console.log(kelulusan)

// const nama = "Affan";
// const umur = 23;
// const nilai = 87;
// const status = nilai >= 75 ? "lulus" : "tidak lulus";
// const lulus = (`=== PROFILE === \n Nama: ${nama} \nUmur: ${umur} \nNilai: ${nilai} \nStatus: ${status}`)
// console.log(lulus)

// const nilai = -8;

// console.log(`Nilai: ${nilai} \n Grade:  `)
// if (nilai < 0 || nilai > 100){
//     console.log("Nilai tidak valid")
// } else if (nilai >= 90){
//     console.log("A")
// } else if (nilai >= 80){
//     console.log("B+")
// } else if (nilai >= 70){
//     console.log("B")
// } else if (nilai >= 60){
//     console.log("c")
// } else if (nilai >= 50){
//     console.log("d")
// } else {
//     console.log("E")
// }

// const transactions = [120000, 50000, 250000, 30000, 175000];
// let total = 0;
// let jumlahBesar = 0
// for(let i = 0; i < transactions.length; i++){
//     total += transactions[i];
//     if (transactions[i] >= 100000){
//         jumlahBesar++
//     }
// }
// console.log(total);
// console.log(jumlahBesar);

const nilai = [85, 45, 90, 60, 72, 30, 95]
let total = 0;
let jumlah = 0;
for (let i = 0; i < nilai.length; i++ ){
    if(nilai[i] < 70){
        continue
    }
    total += nilai[i]
    jumlah++
   
    console.log(`nilai lulus:${nilai[i]}`)
}
console.log(`Jumlah lulus: ${jumlah}`);
console.log(`Total nilai: ${total}`);

let saldo = 500000;
const penarikan = [100000, 50000, 200000, 300000, 50000];

let jumbel = 0
for (let i = 0; i < penarikan.length; i++){
    if (penarikan[i] > saldo){
        console.log(`penarikan ${penarikan[i]}: Saldo tidak cukup`);
        continue;
    }
    saldo -= penarikan[i];
    jumbel++;

    console.log(`penarikan ${penarikan[i]}: Berhasil`)
}

console.log(`Saldo akhir: ${saldo}`)
console.log(`Jumlah Berhasil: ${jumbel}`)

function myKali (x, y){
    return x * y;
}
const anjay = myKali(3, 5);
console.log(anjay)



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

let nilai = -3;

if (nilai < 0 || nilai > 100){
    console.log("nilai tidak valid")
} else if (nilai >= 81){
    console.log("B")
} else if (nilai >= 60 && nilai <= 80){
    console.log("C")
} else if (nilai >= 40 && nilai <= 59){
    console.log("D")
} else{
    console.log("E")
}

let cuaca = "bagus";
let active;
switch(cuaca){
    case "bagus":
      active =  "Football";
        break;
    case "hujan":
         active =  "turu";
        break;
    case "angin":
         active =  "selimutan";
        break;
    default:
        active = "hp an";

}
console.log(active)
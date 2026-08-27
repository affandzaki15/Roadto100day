

let hour = 17;
let greeting;

if (hour < 18){
   greeting = "good day";
}
console.log(greeting)


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


let age = 20;
let hasCard = false;

if (age >= 18 && hasCard){
    console.log ("granted")
} else if (age >=18 && !hasCard){
    console.log ("requied");
} else {
    console.log("Underage")
}   

let anjay = 20 
let text = (anjay < 18) ? "gas" : "noco";
console.log(text)

let weather = "even";
let activity;

switch (weather){
    case "good":
    activity = "football";
    break;
    case "bad":
    activity = "sleep";
    break;
    default:
    activity = "learn"
}
console.log (activity);
"use strict";
// // let username = "Affan";
// // let age = 23;
// // let isStudent = true;
// // 1
// let username: string = "Affan";
// let age: number = 23;
// let isStudent: boolean = true
// // 2
// function calculatePrice(price: number, quantity: number): number{
//     return price * quantity
// }
// // 3
// function greet(name: string): string{
//     return `Hello, ${name}!`
// }
// greet("Affan")
// // 4
// let data: unknown = 123
// if(typeof data === "string"){
//     console.log(data.toUpperCase());
// }
// // 5
// function printMessage(message: string) :void{
//     console.log(message)
// }
const inputText = document.querySelector("#name-input");
const buttons = document.querySelector("#greet-button");
const resultText = document.querySelector("#result");
function greet(name) {
    return `
    <div>
    
    Hello, ${name}!
    </div>`;
}
buttons?.addEventListener("click", () => {
    if (!inputText || !resultText)
        return;
    const keyy = inputText.value;
    const greeting = greet(keyy);
    resultText.innerHTML = greeting;
});

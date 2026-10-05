// // // // // let username = "Affan";
// // // // // let age = 23;
// // // // // let isStudent = true;

// // // // // 1
// // // // let username: string = "Affan";
// // // // let age: number = 23;
// // // // let isStudent: boolean = true

// // // // // 2
// // // // function calculatePrice(price: number, quantity: number): number{
// // // //     return price * quantity
// // // // }

// // // // // 3
// // // // function greet(name: string): string{
// // // //     return `Hello, ${name}!`
// // // // }

// // // // greet("Affan")

// // // // // 4
// // // // let data: unknown = 123
// // // // if(typeof data === "string"){
// // // //     console.log(data.toUpperCase());
// // // // }

// // // // // 5
// // // // function printMessage(message: string) :void{
// // // //     console.log(message)
// // // // }

// // // export{}
// // // const inputText = document.querySelector<HTMLInputElement>("#name-input");
// // // const button = document.querySelector<HTMLButtonElement>("#greet-button");
// // // const resultText = document.querySelector<HTMLParagraphElement>("#result");

// // // function greet(name: string): string {
// // //     return `Hello, ${name}!`;
// // // }

// // // button?.addEventListener("click", (): void => {
// // //     if (!inputText || !resultText) return;

// // //     const name = inputText.value;
// // //     const greeting = greet(name);

// // //     resultText.textContent = greeting;
// // // });

// // type LoginData = {
// //     email: string;
// //     password: string;
// // };

// // function validateLogin(data:LoginData): string{
// //    if(data.email === ""){
// //     return "email is required"
// //    }
// //    if(data.password === ""){
// //     return "password is required"
// //    }
// //    return "Valid"
// // }

// // const loginData = {
// //     email: "affan@gmail.com",
// //     password: "736637"
// // }

// // function isValidlogin(data: LoginData):boolean {
// //    return data.email !== "" && data.password !== ""
// // }

// // // function isValidlogin(data: LoginData):boolean {
// // //     if(data.email === "" || data.password === ""){
// // //         return false
// // //     }
// // //     return true
// // // }

// // const loginResult: boolean = isValidlogin((loginData))
// // console.log(loginResult)
// // // const loginResult: string = validateLogin((loginData))
// // // console.log(loginResult)

// const apiResponse: unknown = 200;
// function checkResponse(data: unknown): string{
//     if(typeof data === "string"){
//         return data
//     }
//     return "Invalid response"
// }

// console.log(checkResponse(apiResponse))

type LoginResponse = {
  success: boolean;
  message: string;
};
const response: unknown = {
  success: true,
  message: "Login Berhasil",
};

function isLoginSuccess(data: unknown): boolean {
  if (
    typeof data === "object" &&
    data !== null &&
    "success" in data &&
    typeof data.success === "boolean"
  ) {
    return data.success;
  }
  return false;
}
console.log(isLoginSuccess(response));

"use strict";
// // // let username = "Affan";
// // // let age = 23;
// // // let isStudent = true;
function validateLogin(data) {
    if (data.email === "") {
        return "email is required";
    }
    if (data.password === "") {
        return "password is required";
    }
    return "Valid";
}
const loginData = {
    email: "affan@gmail.com",
    password: "736637"
};
function isValidlogin(data) {
    return data.email !== "" && data.password !== "";
}
// function isValidlogin(data: LoginData):boolean {
//     if(data.email === "" || data.password === ""){
//         return false
//     }
//     return true
// }
const loginResult = isValidlogin((loginData));
console.log(loginResult);
// const loginResult: string = validateLogin((loginData))
// console.log(loginResult)

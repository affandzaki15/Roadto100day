"use strict";
// // // // // let username = "Affan";
// // // // // let age = 23;
// // // // // let isStudent = true;
const response = {
    success: true,
    message: "Login Berhasil",
};
function isLoginSuccess(data) {
    if (typeof data === "object" &&
        data !== null &&
        "success" in data &&
        typeof data.success === "boolean") {
        return data.success;
    }
    return false;
}
console.log(isLoginSuccess(response));

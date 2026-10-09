"use strict";
// // narrowing
// // let value: string | number = "Affan";
function isProduct(data) {
    if (typeof data !== "object" || data === null) {
        return false;
    }
    if (!("name" in data) || !("price" in data)) {
        return false;
    }
    return (typeof data.name === "string" &&
        typeof data.price === "number");
}
function isProductResponse(data) {
    if (typeof data !== "object" || data === null) {
        return false;
    }
    if ((!("success" in data)) || !("message" in data) || !("data" in data)) {
        return false;
    }
    return (typeof data.success === "boolean" &&
        typeof data.message === "string" &&
        Array.isArray(data.data) &&
        data.data.every(isProduct));
}
function parseProductResponse(data) {
    if (!isProductResponse(data)) {
        return null;
    }
    return data;
}
// generic function
function getFirst(items) {
    return items[0];
}
// generic constraint
function getLength(value) {
    return value.length;
}
// simulasi data API
const apiData = {
    success: true,
    message: "Product Loaded",
    data: [
        { name: "Laptop", price: 30000000 },
        { name: "Mouse", price: 4859000 }
    ]
};
// jalanlakan parse
const result = parseProductResponse(apiData);
if (result !== null) {
    console.log(result.message);
    console.log(result.data);
    const firstPoduct = getFirst(result.data);
    console.log(firstPoduct);
    console.log(getLength(result.data));
}
else {
    console.log("Invalid");
}

// // narrowing
// // let value: string | number = "Affan";

// // // function typeValue(value: string | number): void{
// // //     console.log(value.toUpperCase())
// // // }

// // function narowed(value: string | number) {
// //   if (typeof value === "string") {
// //     console.log(value.toUpperCase());
// //   } else {
// //     console.log(value.toFixed(2));
// //   }
// // }

// // type Admin = {
// //   name: string;
// //   role: string;
// // };

// // type Cust = {
// //   name: string;
// //   address: number;
// // };

// // function desc(account: Admin | Cust) {
// //   if ("role" in account) {
// //     return `Admin: ${account.name}`;
// //   }
// //   return `Customer: ${account.name}`;
// // }
// // console.log(
// //   desc({
// //     name: "Affan",
// //     role: "CTO",
// //   }),
// // );

// // console.log(desc({
// //     name: "tesy",
// //     address: 256
// // }))

// // type guard
// type Productx = {
//   name: string;
//   price: number;
// };

// function isProduct(data: unknown): data is Productx {
//   if (typeof data !== "object" || data === null) {
//     return false;
//   }

//   if (!("name" in data) || !("price" in data)) {
//     return false;
//   }

//   return typeof data.name === "string" && typeof data.price === "number";
// }
// console.log(
//   isProduct({
//     name: null,
//     price: 250000,
//   }),
// );

// // Generic function
// // function isYu(data: string[]): string | undefined{
// //     return items[0]
// // }
// // function isYuu(data: number[]): string | undefined{
// //     return items[0]
// // }

// function isyuuu<T>(items: T[]): T[] {
//   return items;
// }

// const firstName = isyuuu(["affan"]);
// const secName = isyuuu([10, 20, 30]);

// console.log(firstName);
// console.log(secName);

type Product = {
    name: string;
    price: number
}

type ApiResponse<T> = {
    success: boolean;
    message: string;
    data: T
}

function isProduct(data: unknown): data is Product{
    if(typeof data !== "object" || data === null){
        return false
    }
    if(!("name" in data) || !("price" in data)){
        return false
    }

    return (
        typeof data.name === "string" &&
        typeof data.price === "number"
    )
}

function isProductResponse(data: unknown): data is ApiResponse<Product[]> | null{
    if(typeof data !== "object" || data === null){
        return false
    }
    if((!("success" in data)) || !("message" in data) || !("data" in data)){
        return false
    }
    return(
        typeof data.success === "boolean" &&
        typeof data.message === "string" &&
        Array.isArray(data.data) &&
        data.data.every(isProduct)
    )
}

function parseProductResponse(data: unknown): ApiResponse<Product[]> | null {
    if(!isProductResponse(data)){
        return null
    }
    return data
}

// generic function
function getFirst<T>(items:T[]): T | undefined{
    return items[0]
}

// generic constraint
function getLength<T extends {length: number}>(value: T): number{
    return value.length
}

// simulasi data API
const apiData: unknown = {
    success: true,
    message: "Product Loaded",
    data: [
        {name: "Laptop", price: 30000000},
        {name: "Mouse", price: 4859000}

    ]
}

// jalanlakan parse

const result = parseProductResponse(apiData)

if(result !== null){
    console.log(result.message);
    console.log(result.data);

    const firstPoduct = getFirst(result.data)
    console.log(firstPoduct)

    console.log(getLength(result.data))
} else{
    console.log("Invalid")
}

// 1
interface user {
    readonly id: number,
    name: string
}

interface admin extends user{
    role: "admin"
}

// 2
interface customer extends user {
    role:  "customer"
}

// 3
type Account = admin | customer

// 4
const admin: Account = {
    id: 1,
    name: "affan",
    role: "admin"
}

const customer: Account = {
    id: 2,
    name: "affan",
    role: "customer"

}
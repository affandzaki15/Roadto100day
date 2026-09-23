const makanan = [
    { name: "Pizza", price: 35000 },
    { name: "Burger", price: 30000 },
    { name: "Pasta", price: 28000 },
    { name: "Pizza Cheese", price: 40000 }
];
const seacrh = document.querySelector("#text")
const listMenu = document.querySelector("#list")


function tampilkan(data){
    listMenu.innerHTML =""
    data.forEach(datas =>{
        listMenu.innerHTML += `
        <div>
        <p>${datas.name}</p>
        <p>${datas.price}</p>
        </div>
        `
    })
}

seacrh.addEventListener("input", ()=>{
    const keyword = seacrh.value.toLowerCase()
    const hasil = makanan.filter(data =>{
        return data.name.toLowerCase().includes(keyword)
    })
tampilkan(hasil)
})

tampilkan(makanan)
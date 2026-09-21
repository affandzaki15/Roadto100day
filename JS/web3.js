const missions = [
    { id: 1, nama: "Apollo 11", tujuan: "Moon", status: "Selesai", kru: 3 },
    { id: 2, nama: "Mars Explorer", tujuan: "Mars", status: "Aktif", kru: 6 },
    { id: 3, nama: "Europa Probe", tujuan: "Jupiter", status: "Aktif", kru: 4 },
    { id: 4, nama: "Lunar Gateway", tujuan: "Moon", status: "Rencana", kru: 8 },
    { id: 5, nama: "Mars Colony", tujuan: "Mars", status: "Rencana", kru: 12 },
];

// 1 render
const search =  document.querySelector("#search-mission");
const filter =  document.querySelector("#filter-status");
const list =  document.querySelector("#mission-list");


function tampilkanData(data){
    list.innerHTML = "";

    data.forEach((mission) =>{
        list.innerHTML += `
            <div>
                <h1>${mission.nama}</h1>
                <p>Tujuan = ${mission.tujuan}</p>
                <p>Status = ${mission.status}</p>
                <p>total = ${mission.kru}</p>
            </div>
        `
    })
}
tampilkanData(missions)

// 2 seacrh dan filter

function ambilData(){
    const cari = search.value
    const sttus = filter.value

    let hasil;

    if(sttus === "Aktif"){
        hasil = missions.filter(data => data.status === sttus)
    } else if (sttus === "Selesai" ){
        hasil = missions.filter(data => data.status === sttus)
    } else if (sttus === "Rencana"){
        hasil = missions.filter(data => data.status === sttus)
    } else {
        hasil = missions
    }

    const hasil2 = hasil.filter((data) => {
        return data.nama.toLowerCase().includes(cari.toLowerCase())
    })

    tampilkanData(hasil2)
}

search.addEventListener("input", ()=>{
    ambilData()
})

filter.addEventListener("change", ()=> {
    ambilData()
})
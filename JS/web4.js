const events = [
  {
    id: 1,
    nama: "JavaScript Conference",
    kategori: "Technology",
    harga: 0,
    rating: 4.8,
  },
  {
    id: 2,
    nama: "Startup Growth Summit",
    kategori: "Business",
    harga: 150000,
    rating: 4.6,
  },
  {
    id: 3,
    nama: "UI Design Workshop",
    kategori: "Design",
    harga: 50000,
    rating: 4.9,
  },
  {
    id: 4,
    nama: "React Developer Meetup",
    kategori: "Technology",
    harga: 0,
    rating: 4.7,
  },
  {
    id: 5,
    nama: "Business Strategy Talk",
    kategori: "Business",
    harga: 0,
    rating: 4.5,
  },
];

const listEvent = document.querySelector("#event-list");
const searchEvent = document.querySelector("#search-event");
const filterEvent = document.querySelector("#filter-category");

// 1 render all event
function tampilkanEvent(data) {
  listEvent.innerHTML = "";

  data.forEach((event) => {
    listEvent.innerHTML += `
        <div class="event-card">
    <h2>${event.nama}</h2>

    <div class="event-info">
        <span class="category">${event.kategori}</span>
        <p>Harga: ${event.harga}</p>
        <p class="rating">⭐ ${event.rating}</p>
    </div>
</div>
        `;
  });
}

tampilkanEvent(events)

// requirement 2 dashboard statistic
const totalEvent = events.length;
document.querySelector("#total-event").textContent = totalEvent;


const free = events.filter(data => data.harga === 0).length
document.querySelector("#free-event").textContent = free


const higher = events.reduce((acc, value) =>{
    if(acc.rating < value.rating){
        return value
    }
    return acc
}, events[0])
document.querySelector("#highest-rating").textContent = higher.rating


// 3 search

// const listEvent = document.querySelector("#event-list");
// const searchEvent = document.querySelector("#search-event");
// const filterEvent = document.querySelector("#filter-kategori");


// ambil data
function ambilData (){
    const seacrh = searchEvent.value
    const filter = filterEvent.value

    let hasil;

    if(filter === "Technology"){
        hasil = events.filter(data => data.kategori === filter)
    } else if (filter === "Business"){
        hasil = events.filter(data => data.kategori === filter)
    } else if (filter === "Design"){
        hasil = events.filter(data => data.kategori === filter)
    } else {
        hasil = events
    }

    const hasil2 = hasil.filter(data =>{
        return data.nama.toLowerCase().includes(seacrh.toLowerCase())
    })

    tampilkanEvent(hasil2)
}

searchEvent.addEventListener("input", () =>{
    ambilData()
})

filterEvent.addEventListener("change", () =>{
    ambilData()
})


// tambahan
function cariEvent(id){
    const cari = events.find(data => data.id === id)
    console.log(cari)
}
cariEvent(3)

function adaEventMahal(){
    const mahal = events.some(data => data.harga >= 100000)
    console.log(mahal)
}
adaEventMahal()

function getNamaTechnology(){
    const getNama = events.map(data => data.nama)
    console.log(getNama)
}
getNamaTechnology()
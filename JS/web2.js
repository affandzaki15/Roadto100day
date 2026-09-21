const songs = [
  { id: 1, judul: "Blinding Lights", genre: "Pop", durasi: 200 },
  { id: 2, judul: "Numb", genre: "Rock", durasi: 185 },
  { id: 3, judul: "Shape of You", genre: "Pop", durasi: 233 },
  { id: 4, judul: "Believer", genre: "Rock", durasi: 204 },
];

// 1 tampilkan semua lagu
const seacrh = document.querySelector("#search-song");
const filter = document.querySelector("#filter-genre");
const list = document.querySelector("#song-list");

function semuaLagu(data) {
  list.innerHTML = "";

  data.forEach((song) => {
    list.innerHTML += `
            <div>
            <h1>${song.judul}</h1>
            <p>Genre: ${song.genre}</p>
            <p>Durasi: ${song.durasi}</p>
            </div>
        `;
  });
}

semuaLagu(songs)

// 2 filter genre
function filterSong(){
    let genre = filter.value
    let cari = seacrh.value
   
    let hasil;

    if (genre === "Pop"){
        hasil = songs.filter(data => data.genre === genre)
    } else if (genre === "Rock"){
        hasil = songs.filter(data => data.genre === genre)
    } else {
        hasil = songs
    }

    const hasil2 = hasil.filter((data) =>{
       return data.judul.toLowerCase().includes(cari.toLowerCase())
    })

    semuaLagu(hasil2)
}

seacrh.addEventListener("input", ()=>{
    filterSong()
})

filter.addEventListener("change", () =>{
    filterSong()
})
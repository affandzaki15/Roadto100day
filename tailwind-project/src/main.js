import "./style.css";

const movies = [
  { id: 1, judul: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, judul: "Parasite", genre: "Drama", rating: 8.5 },
  { id: 3, judul: "Interstellar", genre: "Sci-Fi", rating: 8.7 },
  { id: 4, judul: "Whiplash", genre: "Drama", rating: 8.5 },
  { id: 5, judul: "The Dark Knight", genre: "Action", rating: 9.0 },
];

const search = document.querySelector("#search-movie")
const filter = document.querySelector("#filter-genre")
const list = document.querySelector("#movie-list")

function tampilkanMovie(data){

    list.innerHTML = "";
    data.forEach((movie) => {
        list.innerHTML += `
        <div>
            <h1>${movie.judul}</h1>
            <p>${movie.genre}</p>
            <p>Rating: ${movie.rating}</p>
        </div>
        `
        
    })
}
tampilkanMovie(movies)


function filterMovie() {
    const genre = filter.value;
    const input = search.value;

    let hasil;

    if (genre === "Sci-Fi") {
        hasil = movies.filter(data => data.genre === genre);

    } else if (genre === "Drama") {
        hasil = movies.filter(data => data.genre === genre);

    } else if (genre === "Action") {
        hasil = movies.filter(data => data.genre === genre);

    } else {
        hasil = movies;
    }

    const hasil2 = hasil.filter((data) =>
        data.judul.toLowerCase().includes(input.toLowerCase())
    );

    tampilkanMovie(hasil2);
}

search.addEventListener("input", () =>{
    filterMovie()
})

filter.addEventListener("change", () =>{
    filterMovie()
})
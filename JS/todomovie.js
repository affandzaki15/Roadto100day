const movies = [
  {
    id: 1,
    title: "Interstellar",
    watched: false,
  },
  {
    id: 2,
    title: "Inception",
    watched: true,
  },
  {
    id: 3,
    title: "The Dark Knight",
    watched: false,
  },
];

const movie = document.querySelector("#movie-form");
const input = document.querySelector("#movie-input");
const list = document.querySelector("#movie-list");

function tampilkanData(data) {
  list.innerHTML = "";

  data.forEach((movie) => {
    list.innerHTML += `
            <div class="movie-item ${movie.watched ? "watched" : ""}">   
                <span>${movie.title}</span>
                <button onClick="selesaiMenonton(${movie.id})">
                ${movie.watched ? "batal" : "selesai"} 
                </button>
                <button onClick="hapus(${movie.id})">Hapus</button>
            </div>
        `;
  });
}

movie.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = input.value;

//   if (text.trim() === "") {
//     return;
//   }

  const moviesBaru = {
    id: Date.now(),
    title: text,
    watched: false,
  };

  movies.push(moviesBaru);
  tampilkanData(movies);

  input.value = "";
});

function selesaiMenonton(id) {
  const selesai = movies.find((data) => data.id === id);

  selesai.watched = !selesai.watched;

  tampilkanData(movies);
}

function hapus(id) {
  const hapuss = movies.findIndex((data) => data.id === id);

  movies.splice(hapuss, 1);

  tampilkanData(movies);
}

tampilkanData(movies);

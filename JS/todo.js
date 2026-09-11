const todos = [
  {
    id: 1,
    text: "Belajar DOM",
    done: false,
  },
  {
    id: 2,
    text: "Latihan JavaScript",
    done: true,
  },
];

const list = document.querySelector("#todo-list");
const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");

function tampilkanTodo(data) {
  list.innerHTML = "";

  data.forEach((todo) => {
    list.innerHTML += `
      <div class="todo-item ${todo.done ? "done" : ""}">
        <span>${todo.text}</span>
         <button onclick="tandaiSelesai(${todo.id})">
        ${todo.done ? "Batal" : "Selesai"}
      </button>

      <button onclick="hapusTodo(${todo.id})">
        Hapus
      </button>
      </div>
    `;
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = input.value;

  if (text.trim() === "") {
    return;
  }

  const todoBaru = {
    id: Date.now(),
    text: text,
    done: false,
  };

  todos.push(todoBaru);

  tampilkanTodo(todos);

  input.value = "";
});

function tandaiSelesai(id) {
  const todo = todos.find((todo) => todo.id === id);

  todo.done = !todo.done;

  tampilkanTodo(todos);
}

function hapusTodo(id) {
  const index = todos.findIndex((todo) => todo.id === id);

  todos.splice(index, 1);

  tampilkanTodo(todos);
}

tampilkanTodo(todos);

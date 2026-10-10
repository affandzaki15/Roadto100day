import { addTodo, getTodos, toggleTodo, deleteTodo } from "./todos.js";
const first = addTodo("Belajar TypeScript");
addTodo("Latihan migration");
console.log("Semua Todo:", getTodos());
toggleTodo(first.id);
console.log("Setelah toggle:", getTodos());
deleteTodo(first.id);
console.log("Setelah delete:", getTodos());
//# sourceMappingURL=main.js.map
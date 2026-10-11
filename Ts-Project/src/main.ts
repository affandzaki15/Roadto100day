import{
    addTodo,
    getTodos,
    toggleTodo,
    deleteTodo,
    filterTodos,
}
from "./todos.js"

const first = addTodo("Belajar Javascript", "low")
addTodo("belajar ts", "high")
// addTodo("belajar node", "medium")

console.log(getTodos())

toggleTodo(first.id)
console.log("Setelah toogle" , getTodos())


filterTodos("completed")
console.log("Setelah toogle" , filterTodos("completed"))

// deleteTodo(first.id)
// console.log("setelah toggle:", getTodos())




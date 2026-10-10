const todos = [];
export function addTodo(title) {
    const todo = {
        id: Date.now(),
        title: title,
        completed: false,
    };
    todos.push(todo);
    return todo;
}
export function getTodos() {
    return todos;
}
export function toggleTodo(id) {
    const todo = todos.find(item => item.id === id);
    if (!todo)
        return;
    todo.completed = !todo.completed;
}
export function deleteTodo(id) {
    const del = todos.findIndex(item => item.id === id);
    if (del === -1)
        return;
    todos.splice(del, 1);
}
//# sourceMappingURL=todos.js.map
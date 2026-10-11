const todos = [];
export function addTodo(title, priority) {
    const todo = {
        id: Date.now(),
        title: title,
        completed: false,
        priority: priority,
    };
    todos.push(todo);
    return todo;
}
export function getTodos() {
    return todos;
}
export function toggleTodo(id) {
    const todo = todos.find((item) => item.id === id);
    if (!todo)
        return;
    todo.completed = !todo.completed;
}
export function deleteTodo(id) {
    const index = todos.findIndex((item) => item.id === id);
    if (index === -1)
        return;
    todos.splice(index, 1);
}
export function filterTodos(status) {
    if (status === "active") {
        return todos.filter((item) => item.completed === false);
    }
    else if (status === "completed") {
        return todos.filter((item) => item.completed === true);
    }
    else {
        return todos;
    }
}
export function editTodos(id, newTitle, newPriority) {
    const todo = todos.find(item => item.id === id);
    if (!todo)
        return;
    todo.title = newTitle;
    todo.priority = newPriority;
}
//# sourceMappingURL=todos.js.map
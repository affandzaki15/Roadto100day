const STORAGE_KEY = "taskflow-todos";
function loadTodos() {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data)
        return [];
    return JSON.parse(data);
}
const todos = loadTodos();
function saveTodos() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}
export function addTodo(title, priority) {
    const todo = {
        id: Date.now(),
        title: title,
        completed: false,
        priority: priority,
    };
    todos.push(todo);
    saveTodos();
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
    saveTodos();
}
export function deleteTodo(id) {
    const index = todos.findIndex((item) => item.id === id);
    if (index === -1)
        return;
    todos.splice(index, 1);
    saveTodos();
}
export function filterTodos(status) {
    if (status === "active") {
        saveTodos();
        return todos.filter((item) => item.completed === false);
    }
    else if (status === "completed") {
        return todos.filter((item) => item.completed === true);
    }
    else {
        saveTodos();
        return todos;
    }
}
export function editTodos(id, newTitle, newPriority) {
    const todo = todos.find(item => item.id === id);
    if (!todo)
        return;
    todo.title = newTitle;
    todo.priority = newPriority;
    saveTodos();
}
//# sourceMappingURL=todos.js.map
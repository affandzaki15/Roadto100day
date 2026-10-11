import type { Priority, Todo } from "./types.js";


const STORAGE_KEY = "taskflow-todos"
function loadTodos(): Todo[]{
  const data = localStorage.getItem(STORAGE_KEY)
  if(!data) return[];
  return JSON.parse(data) as Todo[]
}
const todos: Todo[] = loadTodos();

function saveTodos(): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

export function addTodo(title: string, priority: Priority): Todo {
  const todo: Todo = {
    id: Date.now(),
    title: title,
    completed: false,
    priority: priority,
  };
  todos.push(todo);
  saveTodos()
  return todo;
}

export function getTodos(): Todo[] {
  return todos;
}

export function toggleTodo(id: number): void {
  const todo = todos.find((item) => item.id === id);
  if (!todo) return;
  todo.completed = !todo.completed;
  saveTodos()
}

export function deleteTodo(id: number): void {
  const index = todos.findIndex((item) => item.id === id);
  if (index === -1) return;
  todos.splice(index, 1);
  saveTodos()
}

export function filterTodos(status: "all" | "active" | "completed"): Todo[] {
  if (status === "active") {
    saveTodos()
    return todos.filter((item) => item.completed === false);
  } else if (status === "completed") {
    return todos.filter((item) => item.completed === true);
  } else {
    saveTodos()
    return todos;
  }
}


export function editTodos(id: number, newTitle: string, newPriority: Priority): void {
  const todo = todos.find(item => item.id === id);

  if(!todo) return

  todo.title = newTitle;
  todo.priority = newPriority
  saveTodos()
}
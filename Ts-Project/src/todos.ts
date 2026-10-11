import type { Priority, Todo } from "./types.js";

const todos: Todo[] = [];

export function addTodo(title: string, priority: Priority): Todo {
  const todo: Todo = {
    id: Date.now(),
    title: title,
    completed: false,
    priority: priority,
  };
  todos.push(todo);
  return todo;
}

export function getTodos(): Todo[] {
  return todos;
}

export function toggleTodo(id: number): void {
  const todo = todos.find((item) => item.id === id);
  if (!todo) return;
  todo.completed = !todo.completed;
}

export function deleteTodo(id: number): void {
  const index = todos.findIndex((item) => item.id === id);
  if (index === -1) return;
  todos.splice(index, 1);
}

export function filterTodos(status: "all" | "active" | "completed"): Todo[] {
  if (status === "active") {
    return todos.filter((item) => item.completed === false);
  } else if (status === "completed") {
    return todos.filter((item) => item.completed === true);
  } else {
    return todos;
  }
}

import type { Priority, Todo } from "./types.js";
export declare function addTodo(title: string, priority: Priority): Todo;
export declare function getTodos(): Todo[];
export declare function toggleTodo(id: number): void;
export declare function deleteTodo(id: number): void;
export declare function filterTodos(status: "all" | "active" | "completed"): Todo[];
//# sourceMappingURL=todos.d.ts.map
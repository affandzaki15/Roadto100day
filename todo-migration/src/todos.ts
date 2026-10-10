import type {Todo} from "./types.js";

// const todos: Todo[] = []

// export function addTodo(title: string): Todo{
//     const todo: Todo ={
//         id: Date.now(),
//         title: title,
//         completed: false,
//     }
    
//     todos.push(todo)
//     return todo
// }

// export function getTodos(): Todo[]{
//     return todos
// }

// export function toggleTodo(id: number): void{
//     const todo = todos.find(item => item.id === id)
//     if(!todo)return;
//     todo.completed = !todo.completed
// }

// export function deleteTodo(id: number):void{
//     const del = todos.findIndex(item => item.id === id)
//     if(del === -1) return
//     todos.splice(del, 1)
// }

const todos: Todo[] = [];

export function addTodo(title:string): Todo {
    const todo: Todo ={
        id: Date.now(),
        title: title,
        completed: false
    }

    todos.push(todo)
    return todo
}

export function getTodos(): Todo[]{
    return todos
}

export function toggleTodo(id:number): void{
    const index = todos.find(item => item.id === id)
    if(!index)return
    index.completed = !index.completed
}

export function deleteTodo(id: number): void{
    const index = todos.findIndex(item => item.id === id)
    if(index === -1) return
    todos.splice(index, 1)
}

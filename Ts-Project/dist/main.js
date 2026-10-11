import { addTodo, getTodos, toggleTodo, deleteTodo, filterTodos, editTodos, } from "./todos.js";
const addTaskButton = document.querySelector("#add-task-btn");
const taskForm = document.querySelector("#task-form");
const taskTitle = document.querySelector("#task-title");
const taskPriority = document.querySelector("#task-priority");
const taskList = document.querySelector("#task-list");
const taskFilter = document.querySelector("#task-filter");
const statTotal = document.querySelector("#stat-total");
const statsideTotal = document.querySelector("#stat-sidebar-total");
const statProgress = document.querySelector("#stat-progress");
const statCompleted = document.querySelector("#stat-completed");
const searchTask = document.querySelector("#task-search");
function renderTodos() {
    if (!taskList)
        return;
    const status = taskFilter?.value ?? "all";
    const search = searchTask?.value.trim().toLowerCase() ?? "";
    const todos = filterTodos(status).filter((todo) => todo.title.toLowerCase().includes(search));
    taskList.innerHTML = todos
        .map((todo) => {
        return `
                 <div class="flex items-center justify-between gap-4 border-b border-slate-100 py-4">
          <div class="flex items-center gap-3">
            <input
              type="checkbox"
              data-toggle="${todo.id}"
              ${todo.completed ? "checked" : ""}
            />

            <span class="${todo.completed ? "line-through text-slate-400" : "text-slate-700"}">
              ${todo.title}
            </span>
          </div>

          <span class="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
            ${todo.priority}
          </span>

          
          <button
            type="button"
            data-edit="${todo.id}"
            class="text-sm text-blue-600 hover:text-blue-800"
          >
            Edit
          </button>

          <button
            type="button"
            data-delete="${todo.id}"
            class="text-sm text-red-600 hover:text-red-800"
          >
            Delete
          </button>
        </div>
      `;
    })
        .join("");
}
addTaskButton?.addEventListener("click", () => {
    taskForm?.classList.toggle("hidden");
});
taskForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = taskTitle?.value.trim();
    const priority = taskPriority?.value;
    if (!title || !priority)
        return;
    addTodo(title, priority);
    renderTodos();
    updateStats();
    taskForm.reset();
    taskForm.classList.add("hidden");
});
taskList?.addEventListener("change", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement))
        return;
    if (!target.hasAttribute("data-toggle"))
        return;
    const id = Number(target.dataset.toggle);
    toggleTodo(id);
    renderTodos();
    updateStats();
});
taskList?.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLButtonElement))
        return;
    if (!target.hasAttribute("data-delete"))
        return;
    const id = Number(target.dataset.delete);
    deleteTodo(id);
    renderTodos();
    updateStats();
});
taskList?.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLButtonElement))
        return;
    if (!target.hasAttribute("data-edit"))
        return;
    const id = Number(target.dataset.edit);
    const todo = getTodos().find((item) => item.id === id);
    if (!todo)
        return;
    const newTitle = prompt("edit task title:", todo.title);
    if (newTitle === null || !newTitle.trim())
        return;
    const newPriority = prompt("Edit priority (low,medium, high):", todo.priority);
    if (newPriority === null)
        return;
    const priority = newPriority?.trim().toLowerCase();
    if (!["low", "medium", "high"].includes(priority)) {
        alert("priority harus low, medium, atau high!");
        return;
    }
    // Sementara, cek judul baru di Console
    editTodos(id, newTitle.trim(), priority);
    renderTodos();
    updateStats();
});
taskFilter?.addEventListener("change", () => {
    renderTodos();
});
function updateStats() {
    const todos = getTodos();
    const total = todos.length;
    const side = todos.length;
    const completed = todos.filter((item) => item.completed).length;
    const progress = total - completed;
    if (statTotal)
        statTotal.textContent = String(total);
    if (statProgress)
        statProgress.textContent = String(progress);
    if (statCompleted)
        statCompleted.textContent = String(completed);
    if (statsideTotal)
        statsideTotal.textContent = String(side);
}
searchTask?.addEventListener("input", () => {
    renderTodos();
});
//# sourceMappingURL=main.js.map
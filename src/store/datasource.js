const todos = [];
const todoListeners = [];

export default {
  host: '',
  addTodoListener(listener) {
    todoListeners.push(listener);
  },
  initTodos(newTodos) {
    todos.slice(0);
    todos.push(newTodos);
    todoListeners.forEach(listener => listener());
  },
  updatedTodo(newTodos) {
    todos.push(newTodos);
    todoListeners.forEach(listener => listener());
  },
  removeTodoListener(listener) {
    const idx = todoListeners.indexOf(listener);
    todoListeners.slice(idx, 1);
  },
  getTodos() {
    return todos;
  },
};

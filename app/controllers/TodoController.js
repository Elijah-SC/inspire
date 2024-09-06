import { AppState } from "../AppState.js";
import { todoService } from "../services/TodoService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class TodoController {
  constructor() {
    console.log(`todo controller is live`);
    AppState.on(`user`, this.getTodos)
    AppState.on(`user`, this.drawTodos)
  }
  async createTodo() {
    try {
      event.preventDefault()
      const todoForm = event.target
      const todoFormData = getFormData(todoForm)
      await todoService.createTodo(todoFormData)

    } catch (error) {
      Pop.error(error)
      console.error();

    }
  }

  async getTodos() {
    try {
      await todoService.getTodos()
    } catch (error) {
      Pop.error(error)
      console.error();
    }
  }

  drawTodos() {
    const todos = AppState.Todos
    let todosHTML = ``
    todos.forEach(todo => todosHTML += todo.todoListTemplate)
    setHTML(`todosList`, todosHTML)
  }
}
import { AppState } from "../AppState.js";
import { Todo } from "./Todo.js";
import { api } from "./AxiosService.js"

class TodoService {
  async getTodos() {
    const response = await api.get(`api/todos`)
    // console.log(`My Todos`, response.data);
    const todos = response.data.map(todoData => new Todo(todoData))
    AppState.Todos = todos
    console.log(`My appSate Todos`, AppState.Todos)
  }
  constructor() {

  }
  async createTodo(todoFormData) {
    const response = await api.post(`api/todos`, todoFormData)
    // console.log(`making todo with form data`, response.data);
    const newTodo = new Todo(response.data)
    AppState.Todos.push(newTodo)
    console.log(`Added`, newTodo, `to AppState`)
  }
}

export const todoService = new TodoService
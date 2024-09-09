import { AppState } from "../AppState.js";
import { Todo } from "../models/Todo.js";
import { api } from "./AxiosService.js"
import { Pop } from "../utils/Pop.js";

class TodoService {
  async deleteTodo(todoId) {
    const response = await api.delete(`api/todos/${todoId}`)
    console.log(response.data, todoId)

    const todoIndex = AppState.Todos.findIndex(todo => todo.id == todoId)
    if (todoIndex < 0) return
    AppState.Todos.splice(todoIndex, 1)
  }
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
  async completeTodo(todoId) {
    const todos = AppState.Todos

    const todoIndex = todos.findIndex(todo => todo.id == todoId)

    const todo = todos[todoIndex]
    // console.log(`Pulled todo out by Index`, todo)
    const todoData = { completed: !todo.completed }

    const response = await api.put(`api/todos/${todoId}`, todoData)
    console.log(`updated Todo`, response.data)

    const updateTodo = new Todo(response.data)

    todos.splice(todoIndex, 1, updateTodo)
    console.log(AppState.Todos)
  }
}

export const todoService = new TodoService
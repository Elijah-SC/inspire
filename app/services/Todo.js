export class Todo {
  constructor(data) {
    this.description = data.description
    this.completed = false
    this.id = data.id
  }

  get todoListTemplate() {
    return `
    <div class="col-12 d-flex justify-content-between align-items-center border rounded my-2 p-1">
                  <input class="fs-2" type="checkbox"   onchange="app.TodoController.completeTodo('${this.id}')" ${this.completed ? 'checked' : ''}>
                  <span>${this.description}</span> <i onclick="app.TodoController.deleteTodo('${this.id}')" role="button" class="mdi mdi-delete fs-2"></i>
                </div>
                `
  }
}
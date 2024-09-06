export class Todo {
  constructor(data) {
    this.description = data.description
    this.completed = false

  }

  get todoListTemplate() {
    return `
    <div class="col-12 d-flex justify-content-between align-items-center border rounded">
                  <input class="fs-2" type="checkbox">
                  <span>Meditate for an Hour</span> <i role="button" class="mdi mdi-delete fs-2"></i>
                </div>
                `
  }
}
import { AuthController } from './controllers/AuthController.js';
import { ImgController } from "./controllers/ImgController.js";
import { TodoController } from "./controllers/TodoController.js";
import { router } from './router-config.js';
const USE_ROUTER = false

class App {

  AuthController = new AuthController()
  TodoController = new TodoController()
  ImgController = new ImgController()

  constructor() {
    if (USE_ROUTER) {
      this.router = router
      this.router.init(this)
    }
  }
}


const app = new App()
// @ts-ignore
window.app = app

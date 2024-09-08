import { AuthController } from './controllers/AuthController.js';
import { ImgController } from "./controllers/ImgController.js";
import { QuoteController } from "./controllers/QuoteController.js";
import { TimeController } from "./controllers/TimeController.js";
import { TodoController } from "./controllers/TodoController.js";
import { WeatherController } from "./controllers/WeatherController.js";
import { router } from './router-config.js';
const USE_ROUTER = false

class App {

  WeatherController = new WeatherController()
  TimeController = new TimeController()
  AuthController = new AuthController()
  TodoController = new TodoController()
  ImgController = new ImgController()
  QuoteController = new QuoteController()

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

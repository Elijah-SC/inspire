import { Img } from "./models/Img.js"
import { Quote } from "./models/Quote.js"
import { Todo } from "./models/Todo.js"
import { Weather } from "./models/Weather.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null
  /**@type {Todo[]} */
  Todos = []

  /**@type {Img} */
  Img = null

  /**@type {Quote} */

  Quote = null

  /**@type {Weather} */
  Weather = null

  UnitFahrenheit = true
}

export const AppState = createObservableProxy(new ObservableAppState())
import { setHTML } from "../utils/Writer.js";

export class TimeController {
  constructor() {
    console.log(`⏰ controller is loaded`);
    this.drawTime
    setInterval(this.drawTime, 1000)

  }

  drawTime() {
    const date = new Date()
    let time = date.toLocaleTimeString()
    let mins = date.getMinutes()
    let hours = date.getHours()
    let newTime = `${hours}:${mins}`
    let timeUnit = time.slice(time.length - 2)
    let formatTime = `${newTime} ${timeUnit}`
    console.log(time)
    setHTML(`time`, formatTime)
  }
}

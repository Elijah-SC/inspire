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
    let start = 4
    let end = 7
    let newTime = time.slice(0, start) + time.substring(end)

    // console.log(time)
    setHTML(`time`, newTime)
  }
}
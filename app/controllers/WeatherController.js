import { AppState } from "../AppState.js";
import { weatherService } from "../services/WeatherService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class WeatherController {

  constructor() {
    AppState.on(`Weather`, this.drawWeather)
    AppState.on(`UnitFahrenheit`, this.drawWeather)
    this.getWeather()
  }


  async getWeather() {
    try {
      await weatherService.getWeather()
    } catch (error) {
      Pop.error(error)
      console.error();

    }
  }

  drawWeather() {
    const weather = AppState.Weather
    let baseTemp = weather.temp
    if (AppState.UnitFahrenheit == true) {
      baseTemp = `${(1.8 * (baseTemp - 273) + 32).toFixed(2)} F`
    } else {
      baseTemp = `${(baseTemp -= 273.15).toFixed(2)} C`
    }
    console.log(weather.temp, baseTemp);

    setHTML(`weather`, baseTemp)
  }

  changeUnit() {
    weatherService.changeUnit()
  }

}
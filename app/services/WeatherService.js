import { AppState } from "../AppState.js";
import { Weather } from "../models/Weather.js";
import { api } from "./AxiosService.js"

class WeatherService {
  changeUnit() {
    if (AppState.UnitFahrenheit == true) {
      AppState.UnitFahrenheit = false
    } else {
      AppState.UnitFahrenheit = true
    }
  }
  async getWeather() {
    const response = await api.get(`api/weather`)
    console.log(`got Weather`, response.data);
    const newWeather = new Weather(response.data)
    AppState.Weather = newWeather
  }
  constructor() {

  }
}

export const weatherService = new WeatherService()
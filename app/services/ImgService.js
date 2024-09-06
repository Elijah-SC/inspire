import { AppState } from "../AppState.js";
import { Img } from "../models/Img.js";
import { api } from "./AxiosService.js";

class ImgService {
  async getBgImg() {
    const response = await api.get(`api/images`)
    console.log(``, response.data);
    const newImg = new Img(response.data)
    AppState.Img = newImg
    console.log(`New Image`, AppState.Img)

  }
  constructor() {

  }


}

export const imgService = new ImgService()
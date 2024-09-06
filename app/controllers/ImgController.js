import { AppState } from "../AppState.js";
import { imgService } from "../services/ImgService.js";
import { Pop } from "../utils/Pop.js";

export class ImgController {
  constructor() {
    console.log(`Img Controller is Live`);
    this.getBgImg()
    AppState.on(`Img`, this.drawBgImg)
  }
  drawBgImg() {
    const img = AppState.Img
    document.body.style.backgroundImage = `url(${img.imgUrl})`

  }
  async getBgImg() {
    try {
      await imgService.getBgImg()
    } catch (error) {
      Pop.error(error)
      console.error();

    }
  }
}
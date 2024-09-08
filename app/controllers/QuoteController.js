import { AppState } from "../AppState.js";
import { api } from "../services/AxiosService.js";
import { quoteService } from "../services/QuoteService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class QuoteController {
  constructor() {
    AppState.on(`Quote`, this.drawQuote)
    this.getQuote()

  }

  async getQuote() {
    try {
      await quoteService.getQuote()
    } catch (error) {
      Pop.error(error)
      console.error();

    }
  }

  drawQuote() {
    // console.log(`Drawing Quote to Page`)
    const quote = AppState.Quote
    setHTML(`quote`, quote.content)
    setHTML(`quote-author`, quote.author)

  }
}
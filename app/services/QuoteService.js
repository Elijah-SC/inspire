import { AppState } from "../AppState.js"
import { Quote } from "../models/Quote.js"
import { api } from "./AxiosService.js"

export class QuoteService {
  constructor() {

  }
  async getQuote() {
    const response = await api.get(`api/quotes`)
    console.log(response.data)

    const newQuote = new Quote(response.data)
    AppState.Quote = newQuote
  }
}

export const quoteService = new QuoteService()
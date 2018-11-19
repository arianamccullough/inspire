

export default class Weather {
  constructor(data) {
    this.main = data.weather[0].main
    this.name = data.name
    this.temp = Math.floor(data.main.temp * 9 / 5 - 459.67)
  }
}
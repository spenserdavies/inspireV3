export default class Weather {
  constructor(data) {
    this.city = data.name
    this.kelvin = Math.floor(data.main.temp)
    this.celsius = Math.floor(this.kelvin - 273.15)
    this.fahrenheit = Math.floor((this.celsius) * (9/5) + 32)
    this.highC = Math.floor(data.main.temp_max -273.15)
    this.lowC = Math.floor(data.main.temp_min -273.15)
    this.highF = Math.floor((this.highC) * (9/5) + 32)
    this.lowF = Math.floor((this.lowC) * (9/5) + 32)
  }

  get fTemplate(){
    return /*html*/`
    <h1>${this.fahrenheit} &#176;F</h1>
    <h3>${this.city}</h3>
    <p><b>High:</b> ${this.highF}&#176;F |<b>Low:</b> ${this.lowF}&#176;F</p>
    <p class="pointer" onclick="app.weatherController.changeToC()">change temp scale</p>
    `
  }

  get cTemplate(){
    return /*html*/`
    <h1>${this.celsius} &#176;C</h1>
    <h3>${this.city}</h3>
    <p><b>High:</b> ${this.highC}&#176;C |<b>Low:</b> ${this.lowC}&#176;C</p>
    <p class="pointer" onclick="app.weatherController.changeToF()">change temp scale</p>    
    `
  }
}
import WeatherService from "./weather-service.js";

var _weatherService = new WeatherService()
function draw(weather) {
	let template = ""

	template += `
	<div id="city">${weather.name}</div>
	<div id="ftemp">${weather.temp}°F</div>
		<div id="main">${weather.main}</div>
	`
	document.getElementById('weather').innerHTML = template
}


export default class WeatherController {
	constructor() {
		this.getWeather()
	}
	getWeather() {
		_weatherService.getWeather(draw)
	}
}


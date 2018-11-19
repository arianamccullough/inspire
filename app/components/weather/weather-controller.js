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
		//this will fire off get weather right away
		this.getWeather()
	}
	getWeather() {
		_weatherService.getWeather(draw)
		//What can you do with this weather object?
	}
}


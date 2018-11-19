import QuoteService from "./quote-service.js";

let qs = new QuoteService


function draw(quote) {
	let template = ""
	template += `
<div><p id="quote-body">"${quote.body}"</p></div>
<div><p id="quote-author">-${quote.author}</p></div>
	`
	document.getElementById('quote').innerHTML = template
}

export default class QuoteController {
	constructor() {
		this.getQuote()
	}

	getQuote() {
		qs.getQuote(draw)
	}
}
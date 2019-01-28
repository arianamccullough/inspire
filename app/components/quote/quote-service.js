import Quote from "../../models/quote.js"

let url = '//bcw-getter.herokuapp.com/?url=';
let url2 = 'https://favqs.com/api/qotd';
let apiUrl = url + encodeURIComponent(url2);


// @ts-ignore
const quoteApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});
function logError(e) {
	console.log(e)
}


export default class QuoteService {
	getQuote(callWhenDone) {
		quoteApi()
			.then((res) => {
				let quote = res.data.quote
				quote = new Quote(quote)
				callWhenDone(quote);
			})
			.catch(logError)
	}
}

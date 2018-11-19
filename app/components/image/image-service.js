const url = '//bcw-getter.herokuapp.com/?url=';
const url2 = 'http://www.splashbase.co/api/v1/images/search?query=forest'
const apiUrl = url + encodeURIComponent(url2);

// @ts-ignore
const imgApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});

function logError(e) {
	console.log(e)
}

export default class ImageService {
	getImage(callWhenDone) {
		// ^^^^^^^ How do you call this function?
		console.log("Looking for a good pic")
		imgApi()
			.then(res => {
				let image = res.data.images[Math.ceil(Math.random() * res.data.images.length)]
				callWhenDone(image)
			})
			.catch(logError)
	}
}


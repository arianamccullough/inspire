import ImageService from "./image-service.js";

//Your ImageService is a global class what can you do here to instantiate it?

let _imageService = new ImageService()
function draw(image) {
  document.body.style.backgroundImage = `url(${image.url})`
}


export default class ImageController {
  constructor() {
    _imageService.getImage(draw)

  }
}


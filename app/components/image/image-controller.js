import ImageService from "./image-service.js";

let _imageService = new ImageService()
function draw(image) {
  document.body.style.backgroundImage = `url(${image.url})`
}


export default class ImageController {
  constructor() {
    _imageService.getImage(draw)

  }
}


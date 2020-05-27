import ImageService from "../services/image-service.js";
import store from "../store.js";

//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)
function _drawBG(){
  //let image = store.State.image
  // @ts-ignore
  let url = store.State.image.url
  //console.log(image);
  //console.log(url);
  let canvas = document.body.style
  canvas.backgroundImage = `url('${url}')`
  canvas.backgroundSize = "cover"
  canvas.backgroundRepeat = "no-repeat"
  canvas.backgroundPosition = "center"
}
export default class ImageController {
  constructor(){
    //console.log("image controller");    
    store.subscribe("image", _drawBG)
    ImageService.getImage();
  }
}

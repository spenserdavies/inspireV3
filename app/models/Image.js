export default class Image {

  constructor(data){
    //console.log(data)
    /** @type {String} */
    this.url = data.url
  }

  get urlTemplate(){
    let template1 = "url('"
    let template2 = "${this.url}')"
    return template1+template2;

  }
}
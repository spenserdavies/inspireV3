export default class Quote {
  constructor(data){
    this.body = data.body
    this.author = data.author
  }
  get Template(){
    return /*html*/`
    <div>
      <h3 id="quote">"${this.body}"</h3>
      <span class="hidden text-center">- ${this.author}</span>
      </div>
    `
  }  
}
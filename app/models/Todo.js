export default class Todo{
    constructor(data){
        this.completed = data.completed//{ type: Boolean, required: true, default: false}
        this.id = data._id // {type: String, required: true, unique: true }
        this.user = data.user // { type: String, required: true },
        this.description = data.description // { type: String, required: true}
    }
    get Template(){
        return /*html*/`
        <div class="row">
            <div class="col-10 form-check">
                <input class="form-check-input pointer" onclick="app.todoController.toggleTodoStatus('${this.id}')" id="${this.id}" type="checkbox" ${this.completed ? "checked" : ""} value="option">
                ${this.description}
            </div>
            <div class="col-2">
                <p onclick="app.todoController.removeTodo('${this.id}')"><i class="fa fa-trash-alt  pointer"></i></p>
            </div>
        </div>
        `
    }
}
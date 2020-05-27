import store from "../store.js";
import Todo from "../models/Todo.js";
//NOTE THE INITIAL COUNT OF TASKS REMAINING
let _remaining = 0;
// @ts-ignore
const _todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/spenser/todos/",
  timeout: 8000
});

class TodoService {
  constructor(){
    //NOTE gets todo list on start up
    this.getTodos()
  }
  getTodos() {
    console.log("Getting the Todo List");
    _todoApi.get('')
      .then(result => {
        let todos = result.data.data.map(todo => new Todo(todo));
        store.commit("todos", todos);
      })
      .catch(e => console.error(e));
    //TODO Handle this response from the server
  }
  addTodoAsync(todo) {
    //TODO Handle this response from the server (hint: what data comes back, do you want this?)
    _todoApi.post('', todo)
      .then(res => {
        this.getTodos()
    })
      .catch(e => console.error(e))
  }
  toggleTodoStatusAsync(todoId) {
    let todo = store.State.todos.find(todo => todo.id == todoId);
    //NOTE is there a todo?
    if(todo){
      //NOTE is the todo completed?
      if(todo.completed == true){
        //NOTE change it to false and decrease the count of remaining tasks
        todo.completed = false;
        _remaining --;
      } else if(todo.completed == false){
        todo.completed = true;
        _remaining ++;
      } //NOTE if it is false, change to true
      _todoApi.put(todoId, todo)
        .then(r => {this.getTodos()})
        .catch(e => console.error(e))
    }return _remaining;
    }
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)
  removeTodoAsync(todoId) {
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, what do you need to insure happens?
    let todo = store.State.todos.find(todo => todo.id == todoId);
    if(todo.completed == true){
      _remaining --;
    }
    _todoApi.delete(todoId)
      .then(r => {this.getTodos()})
      .catch(e => console.error(e));
  }
  get Remaining(){
    return _remaining;
  }
}


const todoService = new TodoService();
export default todoService;

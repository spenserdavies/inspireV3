import store from "../store.js";
import todoService from "../services/todo-service.js";

function _drawTodos() {
  let todos = store.State.todos
  let template = ''
  //NOTE draws each todo task to the list
  todos.forEach(t => template += t.Template)
  document.getElementById("todos").innerHTML = template;
  //NOTE draws the count of remaining tasks 
  let remaining = store.State.todos.length - todoService.Remaining;
  document.getElementById("remaining").innerText = "Tasks Remaining: " + `${remaining}`
}

export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers
    store.subscribe("todos", _drawTodos);
    todoService.getTodos();
  }

  addTodo(e) {
    e.preventDefault();
    var form = e.target;
    var todo = {
      //TODO build the todo object from the data that comes into this method
      description: form.todo.value,
    };
    //NOTE passes todo POJO to service
    todoService.addTodoAsync(todo);
    form.reset();
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  toggleTodoStatus(todoId) {
    todoService.toggleTodoStatusAsync(todoId);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  removeTodo(todoId) {
    todoService.removeTodoAsync(todoId);
  }
}

import TodoService from "./todo-service.js";

var todoService = new TodoService

function showTodos() {
	todoService.getTodos(draw)
}
showTodos()
function getTodos() {
	todoService.getTodos(draw)
}

function draw(todos) {
	let template = ''
	todos.forEach(todo => {
		template += `
		<p><i class="fas fa-heart fas-1x"></i> ${todo.description}</p>
	<p class=" d-flex justify-content-center"><button class="btn btn-outline-dark btn-sm" onclick="app.controllers.todoController.removeTodo('${todo._id}')">Remove</button></p>
		`
	});
	document.getElementById('todo-list').innerHTML = template + `${todos.length} task(s) left`
}


export default class TodoController {
	constructor() {
	}

	addTodoFromForm(e) {
		e.preventDefault()
		var form = e.target
		var todo = {
			description: form.newTodo.value

		}

		form.reset()

		todoService.addTodo(todo, getTodos)
	}

	toggleTodoStatus(_id) {
		todoService.toggleTodoStatus(_id, getTodos)
	}

	removeTodo(_id) {
		todoService.removeTodo(_id, getTodos)
	}

}

import TodoService from "./todo-service.js";

var todoService = new TodoService

// Use this getTodos function as your callback for all other edits
function showTodos() {
	todoService.getTodos(draw)
}
showTodos()
function getTodos() {
	//FYI DONT EDIT ME :)
	todoService.getTodos(draw)
}

function draw(todos) {
	//WHAT IS MY PURPOSE?
	//BUILD YOUR TODO TEMPLATE HERE
	let template = ''
	//DONT FORGET TO LOOP
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
		// IF YOU WANT YOUR TODO LIST TO DRAW WHEN THE PAGE FIRST LOADS WHAT SHOULD YOU CALL HERE???
	}
	// You will need four methods
	// getTodos should request your api/todos and give an array of todos to your callback fn
	// addTodo takes in a todo and posts it to the server
	// toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
	// removeTodo takes in a todoId and sends a delete request to the server
	// **** HINT: Everytime you make a change to any todo don't forget to get the todo list again


	addTodoFromForm(e) {
		e.preventDefault() // <-- hey this time its a freebie don't forget this
		// TAKE THE INFORMATION FORM THE FORM
		var form = e.target
		var todo = {
			description: form.newTodo.value
			// DONT FORGET TO BUILD YOUR TODO OBJECT

		}

		form.reset()

		//PASSES THE NEW TODO TO YOUR SERVICE
		//DON'T FORGET TO REDRAW THE SCREEN WITH THE NEW TODO
		//YOU SHOULDN'T NEED TO CHANGE THIS
		todoService.addTodo(todo, getTodos)
		//^^^^^^^ EXAMPLE OF HOW TO GET YOUR TOODOS AFTER AN EDIT
	}

	toggleTodoStatus(_id) {
		// asks the service to edit the todo status
		todoService.toggleTodoStatus(_id, getTodos)
		// YEP THATS IT FOR ME
	}

	removeTodo(_id) {
		// ask the service to run the remove todo with this id
		todoService.removeTodo(_id, getTodos)
		// ^^^^ THIS LINE OF CODE PROBABLY LOOKS VERY SIMILAR TO THE toggleTodoStatus
	}

}

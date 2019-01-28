
// @ts-ignore
const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/ariana/todos/',
	timeout: 3000
});

function logError(e) {
	console.log(e)
}


let _todoList = []
let _todo = { _todoList }

export default class TodoService {
	get todoList() {
		return _todoList
	}
	get todo() {
		return _todo
	}
	getTodos(draw) {
		console.log("Getting the Todo List")
		todoApi.get('')
			.then((res) => {
				_todoList = res.data.data
				draw(_todoList)

			})
			.catch(logError)
	}

	addTodo(todo, getTodos) {
		todoApi.post('', todo)
			.then(function (res) {
				_todoList = res.data.data
				getTodos()
			})
			.catch(logError)
	}

	toggleTodoStatus(_id, getTodos) {
		todoApi.put(`${_id}`)
			.then(function (res) {
				getTodos()
			})
			.catch(logError)
	}

	removeTodo(todo, draw) {
		todoApi.delete(todo)
			.then(res => {
				draw()
			})
			.catch(logError)
	}

}
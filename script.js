let todos = [];

const form = document.querySelector('form');
const ul = document.querySelector('ul');
const mainHeader = document.querySelector('h1');
const todoHeader = document.querySelector('h2');

function addTodo() {
	event.preventDefault();
	const input = document.querySelector('input');
	const text = input.value;
	const todo = {
		text: text,
		complete: false
	};
	todos.push(todo);
	renderTodos();
	input.value = '';
}

function deleteTodo() {
	const button = event.target;
	const li = button.parentNode;
	const index = li.dataset.index;
	todos.splice(index, 1);
	renderTodos();
}

function completeTodo() {
	const button = event.target;
	const li = button.parentNode;
	const index = li.dataset.index;
	li.style.textDecoration = 'line-through';
	todos[index].complete = true;
}

function renderTodos() {
	ul.innerHTML = '';
	for (let i = 0; i < todos.length; i++) {
		const li = document.createElement('li');
		const span = document.createElement('span');
		span.innerText = todos[i].text;
		if (todos[i].complete) {
			li.style.textDecoration = 'line-through';
		}
		const completeButton = document.createElement('button');
		completeButton.innerText = 'Complete Todo';
		completeButton.addEventListener('click', completeTodo);
		const deleteButton = document.createElement('button');
		deleteButton.innerText = 'Delete Todo';
		deleteButton.addEventListener('click', deleteTodo);
		li.appendChild(span);
		li.appendChild(completeButton);
		li.appendChild(deleteButton);
		li.dataset.index = i;
		ul.appendChild(li);
	}
}

form.addEventListener('submit', addTodo);

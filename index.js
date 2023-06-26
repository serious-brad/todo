const todoAddInput = document.querySelector('#todoAddInput');
const todoAddButton = document.querySelector('#todoAddButton');
const todoList = document.querySelector('#todoList');
const toaster = document.querySelector('#toaster');
let value = '';
let todos = [];
let errors = [];
let deleteButton = document.createElement('button');
deleteButton.innerHTML = 'REMOVE';
deleteButton.addEventListener('click', function () {
    console.log('delete');
});

todoAddInput.addEventListener('input', function (event) {
    value = event.target.value;
});

todoAddButton.addEventListener('click', function () {
    if (value) {
        todos.push(value);
    } else {
        alert('Enter text for your todo');
    }

    todoList.innerHTML = renderList(todos);
});

function renderList(todos) {
    return todos.map(function (todo, index) {
        let deleteButton = document.createElement('button');
        deleteButton.id = 'item-' + index;
        deleteButton.innerHTML = 'REMOVE';

        deleteButton.addEventListener('click', function () {
            console.log('delete');
        });

        let result = `<div class="input-group mb-3">
            <div class="input-group-text">
            <input class="form-check-input mt-0" type="checkbox" aria-label="Checkbox for following text input">
        </div>`;
        result += `<input type="text" value="${todo}" class="form-control" aria-label="Text input with checkbox">`;
        result += '</div>';

        return result;
    }).join('');
}

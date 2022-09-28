
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const addBtn = $('.form button');
const form = $('.form');
const input = $('.form input');
const todos = $('.todos');
const LOCAL_KEY = 'mytodos';
const getItemFromLocalStorage = () => JSON.parse(window.localStorage.getItem(LOCAL_KEY)); 

const todoList = getItemFromLocalStorage() || [];

todoList.forEach((item) => {
    addTodoEl(item);
})

form.onsubmit = function(e) {
    e.preventDefault();
    let value = input.value.trim();
 
    if(value){
        let data = {
            text: value,
            completed: false
        }
        addTodoEl(data);
        save();
        input.value = null;
    }
}

function addTodoEl(value) {
    let li = document.createElement('li');
    li.innerHTML = ` 
                    <span>${value.text}</span>
                    <i class="fas fa-trash"></i>
                 `;
    if(value.status){
        li.setAttribute('class', 'completed');
    }

    li.onclick = function() {
        this.classList.toggle('completed');
        save();
    }

    li.querySelector('i').onclick = function(e) {
        e.stopPropagation();
        this.parentElement.remove();
        save();
    };

    todos.appendChild(li);
}

const save = () => {
    let listItems = $$('li');

    let data = Array.from(listItems).map((item) => {
        let text = item.querySelector('span').textContent;
        let status = Boolean(item.getAttribute('class'));
        
        return {
            text,
            status
        }
    });

    window.localStorage.setItem(LOCAL_KEY, JSON.stringify(data));
}




// Selectors

//The query selector method will return the first Element within the document that matches the specified selector in this case, the class.

const todoInput = document.querySelector(".todo-input");//This returns whatever given in the input for the Todo.
const todoButton = document.querySelector(".todo-button");//This will return the add button for Todo.
const todoList = document.querySelector(".todo-list");//This will return the div that holds all the todo.
const filterOption = document.querySelector(".filter-todo"); //This will return the element that is selected in the category list.
const todoSearch = document.forms['forms'].querySelector("input");// This will select the search input box.

// Event Listeners

todoButton.addEventListener('click',addTodo);	
todoList.addEventListener('click',deleteCheck);
filterOption.addEventListener('click',filterTodo);
todoSearch.addEventListener('keyup',searchTodo)


//Functions

function addTodo(event){
    event.preventDefault(); //prevent the form from submitting

    //Creating the Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo"); //adding css style

    //Creating the todo list items
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo); //insert the list items into the todoDiv

    //Adding the check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class ="fas fa-check"></i>'; //This renders the fontawesome icon
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //Adding the check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class ="fas fa-trash"></i>'; //This renders the fontawesome icon
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //Append to the List
    todoList.appendChild(todoDiv);

    //Clearing the input value
    todoInput.value ="";
}

function deleteCheck(e) {
	const item = e.target; // This will select the list item that we clicked to delete 
    if (item.classList[0] ==="trash-btn") {
        const todo = item.parentElement;
        //Adding Animation
        todo.classList.add("fall");
         todo.addEventListener("transitionend", function() {
            todo.remove();
        });
    }

    //Check marking the todo list
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains('completed')){
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "incomplete":
                if(!todo.classList.contains('completed')){
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    })
}

function searchTodo(event){
    const term = event.target.value.toLowerCase();
    const items = todoList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        const getItem = item.textContent;
        if (getItem.toLowerCase().indexOf(term)!= -1){
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
});
}
const todoList = document.querySelector(".todo-list"),
  addForm = document.querySelector(".new-todo"),
  searchTodo = document.querySelector(".search-todo input");

// Generate Todo Template

const generateTodo = (todo) => {
  const html = `
    <li class="todo">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete text-danger"></i>
    </li>
    `;

  todoList.innerHTML += html;
};

// Submit Todo

addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const todo = addForm.add.value.trim();

  if (todo.length) {
    generateTodo(todo);
    addForm.reset();
  }
});

// Delete Todo

todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});


// Search Todo

const filteredTodos = (userInput) => {
  Array.from(todoList.children)
    .filter((eachLi) => !eachLi.textContent.toLowerCase().includes(userInput))
    .forEach((eachLi) => eachLi.classList.add("filtered"));

  Array.from(todoList.children)
    .filter((eachLi) => eachLi.textContent.toLowerCase().includes(userInput))
    .forEach((eachLi) => eachLi.classList.remove("filtered"));
};

searchTodo.addEventListener("keyup", (e) => {
  const userInput = searchTodo.value.toLowerCase();
  filteredTodos(userInput);
});

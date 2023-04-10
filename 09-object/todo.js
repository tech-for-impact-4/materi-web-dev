let formTodo = document.querySelector("#form-todo")
let inputTodo = document.querySelector("#input-todo")
let listTodo = document.querySelector("#list-todo")

formTodo.addEventListener("submit", (event) => {
  event.preventDefault()

  let todo = {
    name: inputTodo.value,
    status: "❎",
  }

  let todoHTML = `
    <div>
      <span>${todo.status}</span>
      <span>${todo.name}</span>
      <button onclick="deleteTodo()">x</button>
    </div>
  `
  listTodo.innerHTML += todoHTML

  formTodo.reset()
})

function deleteTodo() {
  console.log("tess");
}
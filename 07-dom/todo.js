let form = document.querySelector("#todo")
let inputTodo = form.querySelector("#input-todo")
let todoList = document.querySelector("#todo-list")

let itemId = 1
let isEdit = false
let itemEdited = ""

form.addEventListener("submit", (event) => {
  event.preventDefault()

  if (isEdit) {
    let todoItem = document.querySelector(`#${itemEdited} span`)
    todoItem.innerText = inputTodo.value
    inputTodo.value = ""
    return
  }

  let text = inputTodo.value
  console.log(text)

  let todoItem = `
    <div id="item-${itemId}"> 
      <button onclick="editTodo(event)">e</button>
      <span>${text}</span>
      <button onclick="deleteTodo(event)">x</button>
    </div>`

  todoList.innerHTML += todoItem
  inputTodo.value = ""
  itemId++
})

function deleteTodo (event) {
  console.log(event)
  console.log("tesss");

  let todoItem = event.target.parentElement
  todoItem.remove()
}

function editTodo(event) {
  let todoItem = event.target.parentElement
  isEdit = true
  itemEdited = todoItem.getAttribute("id")
  inputTodo.value = todoItem.querySelector("span").innerText
}
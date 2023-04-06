// ============== 1. ambil element =======================
let btnDecrement = document.getElementById("btn-decrement")
let btnIncrement = document.getElementById("btn-increment")
let countNumber = document.getElementById("count-number")

let count = 0

// ============== 2. manipulasi / event ==================
// https://dillionmegida.com/p/inline-events-vs-add-event-listeners/

btnIncrement.onclick = increment

function decrement() {
  console.log("decrement")
  count = count - 1
  countNumber.innerText = count
}

function increment() {
  console.log("increment")
}
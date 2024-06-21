const toDoForm = document.querySelector("form#todo-form")
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.querySelector("ul#todo-list")

const TODOS_KEY = "toDos"
let toDos = []

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function sexyFilter(item) {
    return item.id !== 3
}

function deleteToDo(event) {
    const deleteLi = event.target.parentElement
    const deleteLiId = parseInt(deleteLi.id)
    toDos = toDos.filter((item) => {return item.id !== deleteLiId})
    deleteLi.remove()
    saveToDos()
}

function paintToDo(toDoObj) {
    const newList = document.createElement("li")
    newList.id = toDoObj.id
    const newListText = document.createElement("span")
    newListText.innerText = toDoObj.text
    const deleteButton = document.createElement("button")
    deleteButton.innerText = "❌"
    deleteButton.addEventListener("click", deleteToDo)
    newList.appendChild(newListText)
    newList.appendChild(deleteButton)
    toDoList.appendChild(newList)
}

function handleToDoSubmit(event) {
    event.preventDefault()
    const newToDoObj = {
        id: Date.now(),
        text: toDoInput.value
    }
    toDoInput.value = ""
    toDos.push(newToDoObj)
    paintToDo(newToDoObj)
    saveToDos()
}

toDoForm.addEventListener("submit", handleToDoSubmit)

function sayHello(item) {
    console.log("this is the turn of", item)
}

const savedToDos = localStorage.getItem(TODOS_KEY)

if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos)
    toDos = parsedToDos
    parsedToDos.forEach(paintToDo)
}

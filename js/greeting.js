const loginForm = document.querySelector("#login-form")
const loginInput = loginForm.querySelector("input")
const greeting = document.querySelector("h1#greeting")

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

let username = localStorage.getItem(USERNAME_KEY)

function showGreeting() {
    greeting.innerText = `Welcome to Momentum, ${username}!`
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

function onLoginSubmit(event) {
    event.preventDefault()
    localStorage.setItem(USERNAME_KEY, loginInput.value)
    username = localStorage.getItem(USERNAME_KEY)
    loginForm.classList.add(HIDDEN_CLASSNAME)
    showGreeting()
}

if (username === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit)
} else 
    showGreeting()

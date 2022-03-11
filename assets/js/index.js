import { initApp } from "./initApp.js";
import { handleUsername } from "./utils/handleUsername.js";
import { startGame } from "./startGame.js"

window.onload = function() {
  initApp()
}

const handleStart = function(e) {
  e.preventDefault()

  let username = e.target.elements.usernameInput.value
  handleUsername("set", username)

  startGame()
}

/* EVENT LISTENERS */
document.getElementById("usernameForm").addEventListener("submit", handleStart)
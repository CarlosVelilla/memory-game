import { getRandomCheer } from "./utils/getRandomCheer.js"
import { finishGame } from "./gameOver.js"

export const evaluateMove = function(e) {
  if (document.querySelectorAll(".active").length <= 2) {
    e.target.classList.toggle("flip")
    e.target.classList.add("active")
  }

  const activeCards = document.querySelectorAll(".active")

  let selectedCards = []
  activeCards.forEach(card => {
    selectedCards.push(card.innerText)
  })

  const cheerContainer = document.getElementById("gameCheer")
  cheerContainer.textContent = ""

  const equalCards = allEqual(selectedCards)
  
  if (equalCards) {
    if (selectedCards.length === 2) {
      const equalElements = document.querySelectorAll(`[data-emoji=${selectedCards[0]}]`)
      equalElements.forEach(element => {
        element.classList.remove("active")
        element.dataset.fullfilled = true
      })
      selectedCards = []
      const gameOver = isGameOver()
      if (gameOver) finishGame()
    }
  } else {
    const cheerMessage = getRandomCheer()
    cheerContainer.textContent = cheerMessage
    // CLEAR EVENTLISTENERS OF CARDS
    setTimeout(() => {
      activeCards.forEach(card => {
        card.classList.remove("active")
        card.classList.toggle("flip")
        // RESTART EVENTLISTENERS OF CARDS
      })
    }, 500)
  }
}

const allEqual = function(arr) {
  return new Set(arr).size === 1;
}

const isGameOver = function() {
  const allCards = document.querySelectorAll(".flip-card")
  const fullfilledCards = document.querySelectorAll("[data-fullfilled='true']")
  const gameOver = (allCards.length === fullfilledCards.length) ? true : false
  return gameOver
}
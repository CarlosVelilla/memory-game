export const getScore = function() {
  const timer = document.getElementById("timer").innerText
  const currentScore = parseInt(timer.slice(7, -8))
  return currentScore
}
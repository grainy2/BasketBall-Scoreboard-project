let score = 0
let scoreEl = document.getElementById("score-el")

function addition(){
    score += 1
    scoreEl.textContent = score
    console.log(scoreEl.textContent)
}
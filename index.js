
let bonusPoint = 0
let bonusEl = document.getElementById("bonus-el")


function addOne(){
    bonusPoint += 1 
    bonusEl.textContent = bonusPoint
}

function addTwo(){
    bonusPoint += 2
    bonusEl.textContent = bonusPoint
}

function addThree(){
    bonusPoint += 3
    bonusEl.textContent = bonusPoint
}

console.log(bonusPoint)
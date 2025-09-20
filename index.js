 let score = 0
 let homeEl = document.getElementById("home-el")
 let guestEl = document.getElementById("guest-el")

 function addOne(){
    score += 1
    homeEl.textContent = score
 }

 function addTwo(){
    score += 2
    homeEl.textContent = score
 }

 function addThree(){
    score += 3
    homeEl.textContent = score
 }

function guestOne(){
    score += 1
    guestEl.textContent = score
 }

 function guestTwo(){
    score += 2
    guestEl.textContent = score
 }

function guestThree(){
    score += 3
    guestEl.textContent = score
 }

 function removeHome(){
    score -= 1
    homeEl.textContent = score
 }

 function removeGuest(){
    score -= 1
    guestEl.textContent = score
 }

 function resetPoint(){
    score = 0
    homeEl.textContent = score
    guestEl.textContent = score
 }

 





// let scoreEl = document.getElementById("score-el")
// let HomeScoreBtn = document.getElementById("one")

// function addition(){
//     score += 1
//     scoreEl.textContent = score
//     console.log(scoreEl.textContent)
// }
let btnClicked = document.getElementById('startBtn')
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""


btnClicked.addEventListener('click', startGame)

function startGame () {

        if ( sum <= 20  ) {
            message = "Do you want to draw a new card?"
        } else if ( sum === 21) {
            message = "you've got Blackjack!"
            hasBlackJack = true
        } else {
            console.log("You're out of the game!")
            isAlive = false
            message = "we're logging out"
        }
        messageEl.textContent = message
        sumEl.textContent += " "+ sum
}
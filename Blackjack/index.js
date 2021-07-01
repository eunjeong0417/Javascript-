let btnClicked = document.getElementById('startBtn')
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')
let firstCard = 10
let secondCard = 7
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
        cardsEl.textContent = "Cards:" +" "+ firstCard + " " + secondCard
        messageEl.textContent = message
        sumEl.textContent = "Sum:"+" "+ sum
}
//+=을 쓰면 기존 텍스트에 덧붙여진다 따라서 새로운
//text를 반환하도록 만드려면 = 만 사용한다

function newCard () {
    let card = 4
    sum += card
    startGame ()
}
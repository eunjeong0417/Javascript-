let btnClicked = document.getElementById('startBtn')
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')
//뽑는 모든 카드를 가져오기 위해 배열을 만든다
let firstCard = 10
let secondCard = 7
let cards = [firstCard, secondCard] 
//Arrays - ordered lists of items
let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true
let message = ""


btnClicked.addEventListener('click', startGame)

function startGame () {
    renderGame()
}

function renderGame () {

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
        cardsEl.textContent = "Cards:" + cards
//firstCard와 secondCard를 cards 배열에 있는 항목으로 변경한다
        messageEl.textContent = message
        sumEl.textContent = "Sum:"+" "+ sum
}
//+=을 쓰면 기존 텍스트에 덧붙여진다 따라서 새로운
//text를 반환하도록 만드려면 = 만 사용한다

function newCard () {
    let card = 5
    sum += card
    cards.push(card)
    renderGame ()
}

//Array 만들기

// let featuredPosts = [
//     "Check my netflix",
//     "my project",
//     "my portFolio"
// ]

// console.log(featuredPosts.length)

// let cards = [4, 7]

// //배열에 추가할때는 push 사용
// cards.push(6)
// console.log(cards)

// let messages = [
//     "hello",
//     "nice to meet you",
//     "thank you"
// ]

// let newMessage = "All good"

// // messages.push(newMessage)
// // console.log(messages)

// //pop을 사용하면 배열의 마지막 항목 삭제
// messages.pop()
// console.log(messages)
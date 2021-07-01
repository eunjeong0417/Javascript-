let btnClicked = document.getElementById('startBtn')
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')
//뽑는 모든 카드를 가져오기 위해 배열을 만든다
let firstCard = getRandomCard ()
let secondCard = getRandomCard ()
let cards = [firstCard, secondCard] 
//Arrays - ordered lists of items
let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true
let message = ""

function getRandomCard () {
    return 5
}


function newCard () {
    let card = getRandomCard ()
    sum += card
    cards.push(card)
    renderGame()
}

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
        cardsEl.textContent = "Cards:"
//firstCard와 secondCard를 cards 배열에 있는 항목으로 변경한다
        for( let i = 0; i < cards.length; i++) {
            cardsEl.textContent += " " + cards[i] + " "
        }

        messageEl.textContent = message
        sumEl.textContent = "Sum:"+" "+ sum
}
// +=을 쓰면 기존 텍스트에 덧붙여진다 따라서 새로운
// text를 반환하도록 만드려면 = 만 사용한다


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

//for

// for (let count = 10; count < 21; count += 1) {
//     console.log(count)
// }

// for (let i = 10; i < 101; i += 10 ) {
//     console.log(i)
// }

// let cards = [7, 3, 4]

// for (i = 0;  i < cards.length; i++ ) {
//     console.log(cards[i])
// }

// let sentence = ["hello", "my", "name", "is", "eunjeong"]
// let greetingEl = document.getElementById('greeting-el')

// for ( let i = 0;  i < sentence.length; i ++) {
//     greetingEl.textContent +=" " + sentence[i] + " "
// }

// let player1Time = 102
// let player2Time = 107

// function totalRace () {
//     if ( player1Time < player2Time) {
//         return player2Time
//     } else if ( player1Time > player2Time) {
//         return player1Time
//     } else {
//         return player1Time
//     }
// } 

// let newTotalValue = totalRace()
// console.log(newTotalValue)
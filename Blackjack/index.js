let btnClicked = document.getElementById('startBtn')
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')
//뽑는 모든 카드를 가져오기 위해 배열을 만든다
let cards = [] 
//Arrays - ordered lists of items
let sum = 0
let hasBlackJack = false
let isAlive = false
//게임에 들어가기 전 상태는 false로 설정
let message = ""
console.log(cards)
let playerEl = document.getElementById('player-el')

//player object
let player = {
    title: "Per",
    chips: 100
}

playerEl.textContent = player.title + " :" + " $" + player.chips 
 
//1에서 13까지의 숫자를 랜덤으로 가져오기
//random 으로 가져온 숫자가 10보다 크면 10으로 리턴
//random으로 가져온 숫자가 1이면 11로 리턴한다
function getRandomCard () {
    let randomNum = Math.floor(Math.random() * 13) + 1
    if ( randomNum > 10) {
        return 10
    } else if ( randomNum === 1 ) {
        return 11
    } else {
        return randomNum 
    } //두가지 경우를 제외한 나머지는 else
}

function newCard () {
    if ( isAlive === true && hasBlackJack === false) {
//isAlive와 hasBlackJack이 해당 조건에 해당될때만 실행한다
    let card = getRandomCard ()
    sum += card
    cards.push(card)
//기존 card 배열에 push해서 추가한다
    renderGame()
  }
}


btnClicked.addEventListener('click', startGame)

randomNumber = Math.floor(Math.random() * 6) + 1


function startGame () {
    let firstCard = getRandomCard ()
    let secondCard = getRandomCard ()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    isAlive = true
    console.log(cards)
    renderGame()
}



function renderGame () {

        if ( sum <= 20  ) {
            isAlive = true
            message = "Do you want to draw a new card?"
        } else if ( sum === 21) {
            message = "you've got Blackjack!"
            isAlive = true
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
// // // +=을 쓰면 기존 텍스트에 덧붙여진다 따라서 새로운
// // // text를 반환하도록 만드려면 = 만 사용한다


// // //Array 만들기

// // // let featuredPosts = [
// // //     "Check my netflix",
// // //     "my project",
// // //     "my portFolio"
// // // ]

// // // console.log(featuredPosts.length)

// // // let cards = [4, 7]

// // // //배열에 추가할때는 push 사용
// // // cards.push(6)
// // // console.log(cards)

// // // let messages = [
// // //     "hello",
// // //     "nice to meet you",
// // //     "thank you"
// // // ]

// // // let newMessage = "All good"

// // // // messages.push(newMessage)
// // // // console.log(messages)

// // // //pop을 사용하면 배열의 마지막 항목 삭제
// // // messages.pop()
// // // console.log(messages)

// // //for

// // // for (let count = 10; count < 21; count += 1) {
// // //     console.log(count)
// // // }

// // // for (let i = 10; i < 101; i += 10 ) {
// // //     console.log(i)
// // // }

// // // let cards = [7, 3, 4]

// // // for (i = 0;  i < cards.length; i++ ) {
// // //     console.log(cards[i])
// // // }

// // // let sentence = ["hello", "my", "name", "is", "eunjeong"]
// // // let greetingEl = document.getElementById('greeting-el')

// // // for ( let i = 0;  i < sentence.length; i ++) {
// // //     greetingEl.textContent +=" " + sentence[i] + " "
// // // }

// // // let player1Time = 102
// // // let player2Time = 107

// // // function totalRace () {
// // //     if ( player1Time < player2Time) {
// // //         return player2Time
// // //     } else if ( player1Time > player2Time) {
// // //         return player1Time
// // //     } else {
// // //         return player1Time
// // //     }
// // // } 

// // // let newTotalValue = totalRace()
// // // console.log(newTotalValue)

// //randomNumber

// // let randomNumber = Math.random() * 6

// // console.log(randomNumber)

// //Flooring the numbe with Math.random()
// //floor는 소수점 아래 숫자를 제거해준다

// // let floorNumber = Math.floor(5.85632)
// // console.log(floorNumber)

// //1에서 6 사이의 랜덤 숫자 만들기
// // let randomNumber = Math.floor(Math.random() * 6) + 2
// // console.log(randomNumber)

// // function rollDice () {
// //     let randomNumber = Math.floor(Math.random() * 6 + 1 )
// //     return randomNumber
// // }
// // console.log(rollDice ())

// //논리연산자
// //&&
// // let hasSolvedChallenge = false
// // let hasHintsLeft = false

// // if ( hasSolvedChallenge === false && hasHintsLeft === false) {
// //     showSolution()
// // }

// // function showSolution() {
// //     console.log("Showing the solution...")
// // }

// //논리연산자||

// // let likesDocumentaries = true
// // let likesStartups = false

// // if( likesDocumentaries === true || likesStartups === true) {
// //     recommendMovie()
// // }

// // function recommendMovie() {
// //     console.log("check out this new film!")
// // }

// //object

// // let airbnb = {
// //     expensive: false,
// //     pakageTitle: "Have a nice trip",
// //     price: 200,
// //     items:[
// //         "lotion","notebook","socks"
// //     ]
// // }

// // console.log(airbnb.expensive)
// // console.log(airbnb.price)


//object practice

// let person = {
//     name:"james",
//     age: 17,
//     country: "Norway"
// }

// function logData () {
//     console.log(person.name +" is" +" "+ person.age +" "+ "years old and lives in "+ person.country)
// }

// logData()

//if문 연습
// && 조건문 활용
// let age = 66

// function ageDiscount () {
//     if( age < 6 ) {    //5세까지
//         console.log("free")
//     } else if ( age < 18 ) { // 6-17세까지
//         console.log("child discount")
//     } else if ( age < 27 ) { //18-26세까지
//         console.log("student discount")
//     } else if (  age < 66) { // 27-65세까지
//         console.log("full price")
//     } else { //else에는 나머지에 해당하는 조건
//         console.log("senior citizen discount")
//     }
// }

// ageDiscount()

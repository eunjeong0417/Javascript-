const specialEl = document.querySelector('.special')

//event에는 항상 event object가 전달된다
specialEl.addEventListener('click', (e) => {
    const rect = specialEl.getBoundingClientRect();
    console.log(rect)
    console.log(`page : ${e.pageX}, ${e.pageY}  client : ${e.clientX}, ${e.clientY}`)
    // pageX, pageY는 화면 전체의 x,y축 길이
    // clientX, clientY는 사용자에게 보여지는 브라우저
    //화면의 x,y축 길이
})


// //counter app 만들기

// let countText = document.getElementById('count-el')
// let countBtn = document.getElementById('increment-btn')
// let saveEl = document.getElementById('save-el')

// let count = 0

// countBtn.addEventListener('click', () => {
//     //count = count + 1
//     count += 1
//     countText.textContent = count 
// })

// //save 기능 만들기


// function save () {
//     let countStr = " " + count +" - "
//     // saveEl.innerText += countStr
//      saveEl.textContent += countStr

//      //기존에 있는 text에 countStr을 더한다
//      countText.textContent = 0
//      count = 0
// }

// function reset () {
//     count = 0 
//     countText.textContent = count
// }

//함수 호출하기

// let firstName = "eunjeong"
// let lastName = "jeong"
// let greeting = "Hi, nice to meet you"

// let myName = firstName +" "+ lastName


// function callName () {
//     let nice = greeting + ", " + firstName + "!"
//     console.log(nice)
// }

// callName()


// let a ="per"

// let message = "You have tree new notifications"

// console.log( message + ", " + a )

// let naming = "eunjeong"
// let greeting = "Hi, my name is "

// let mygreeting = greeting +""+naming
// console.log(mygreeting)

// let welcomeEl = document.getElementById("welcome-el")

// let naming = "eunjeong"
// let greeting = "welcome"


// welcomeEl.innerText = greeting +" "+ naming + "😊"


//function practice

// let myPoints = 3

// function add3Points ()  {
//     myPoints += 3
// }

// function removePoints () {
//     myPoints -= 1
// }

// add3Points ()
// add3Points ()
// add3Points ()
// removePoints ()
// removePoints ()


// console.log(myPoints)

//error message

// let errorText = document.getElementById('error')

// function errorHandler () {
//     errorText.textContent = "Something went wrong"
// }

//number programming
// let num1 = 8
// let num2 = 2
// document.getElementById('num1-el').textContent = num1
// document.getElementById('num2-el').textContent = num2
// let sumSpan = document.getElementById('sum-el')

// function addHandler () {
//     let sum = num1 + num2
//     sumSpan.textContent += sum
//     console.log(sum)
// }

// function subtract () {
//     let subNum = num1 - num2
//     sumSpan.textContent = "subtract" + " "+ "=" + " " + subNum
// }

// function divide () {
//     let divideNum = num1 / num2
//     sumSpan.textContent = "divide" + " "+ "=" + " " + divideNum
// }

// function multiply () {
//     let multiplyNum = num1 * num2
//     sumSpan.textContent = "dmultiply" + " "+ "=" + " " + multiplyNum
// }

//조건문 연습하기
// let firstCard = 10
// let secondCard = 13
// let sum = firstCard + secondCard
// let hasBlackJack = false
// let isAlive = true
// let message = ""


// if ( sum <= 20  ) {
//     message = "Do you want to draw a new card?"
// } else if ( sum === 21) {
//     message = "you've got Blackjack!"
//     hasBlackJack = true
// } else {
//     console.log("You're out of the game!")
//     isAlive = false
//     message = "we're logging out"
// }

// console.log(message)
//마지막 else에는 sum이 21보다 작거나 21과 같은 경우를
//제외한 모든 경우를 가정한다

//두번째 if문 연습

// let age = 21

// if ( age <= 21 ) {
//     console.log("You can not enter the club!")
// } else {
//     console.log("Welcome!")
// }

//세번째 if문 연습

// let age = 100

// if ( age < 100 ) {
//     console.log("Not elegible")
// } else if ( age === 100) {
//     console.log("Here is your birthday card from the King!")
// } else {
//     console.log("Not elegible, you have already gotten one")
// }

//for문 연습

// let largestCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]

// console.log("The 5 largeset countries in the world:")
// for (let i = 0; i < largestCountries.length; i++) {
//     console.log("-"+" " + largestCountries[i])
// }

// let largestCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]

// largestCountries.pop()
// console.log(largestCountries)
// largestCountries.shift()
// console.log(largestCountries)
// largestCountries.unshift("China")
// console.log(largestCountries)
// largestCountries.push("Pakistan")
// console.log(largestCountries)

//논리연산자

// let dayOfMonth = 31
// let weekday ="Friday"

// if ( dayOfMonth === 13 && weekday === "Friday") {
//     console.log("😢")
// } else if ( dayOfMonth === 31 && weekday === "Friday") {
//     console.log("😊")
// }
//0~2.999999
// let randomNumber = Math.floor(Math.random()*3)

// let hands = ["rock", "paper", "scissor"]

// console.log(hands[randomNumber])

// let fruit = ["🍎", "🍋", "🍎", "🍎", "🍋"]
// let appleShelf = document.getElementById('apple-shelf')
// let orangeShelf = document.getElementById('orange-shelf')

// function randomFruit () {
//     for ( let i = 0; i < fruit.length; i ++) {
//         if ( fruit[i] === "🍎" ) {
//             appleShelf.textContent += "🍎"
//             console.log(appleShelf)
//         } else {
//             orangeShelf.textContent += "🍋"
//             console.log(orangeShelf)
//     }
// }
// }

// randomFruit()

//call back

// function one(call) {
//     call()
//     console.log( "step 1")
// }

// function two() {
//     console.log( "step 2")
// }

// one(two)

// let order = () => {};

// let production = () => {};

// let stocks = {
//     Fruits : [asdfasd]
// }

// setTimeout(() => {
//     console.log('callback function ')
// }, 5000)
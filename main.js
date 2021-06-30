
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

let errorText = document.getElementById('error')

function errorHandler () {
    errorText.textContent = "Something went wrong"
}

//counter app 만들기

let countText = document.getElementById('count-el')
let countBtn = document.getElementById('increment-btn')
let saveEl = document.getElementById('save-el')

let count = 0

countBtn.addEventListener('click', () => {
    //count = count + 1
    count += 1
    countText.textContent = count 
})

//save 기능 만들기


function save () {
    let countStr = " " + count +" - "
    // saveEl.innerText += countStr
     saveEl.textContent += countStr

     //기존에 있는 text에 countStr을 더한다
     countText.textContent = 0
     count = 0
}

function reset () {
    count = 0 
    countText.textContent = count
}






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

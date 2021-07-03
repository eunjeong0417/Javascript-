let inputBtn = document.getElementById('input-btn')
let myLeads = []
const inputEl = document.getElementById('input-el')
const ulEl = document.getElementById('ul-el')
const deleteEl = document.getElementById('delete-btn')
let listItems = ""
// localStorage.setItem("myLeads", "www.naver.com")
// console.log(localStorage.getItem("myLeads"))
const obj = JSON.parse(localStorage.getItem("myLeads"))
const saveBtn = document.getElementById('tab-btn')

const tabs = [
    {url: "https://www.second.com"}
]

saveBtn.addEventListener('click', () => {
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render (myLeads)
})


if (obj) {
    myLeads = obj 
    render (myLeads) //arguments 인자
}
//parameter로 myLeads를 render함수에 전달
console.log(myLeads)

//template literal
//leades는 parameter 매개변수
function render (leades) {
    let listItems = ""
    for( let i = 0; i < leades.length; i++) {
         listItems += `
         <li>
                <a target='_blank'
                    href='${leades[i]}'>
                ${leades[i]}
            </a>
         </li>
         `
    }
    ulEl.innerHTML = listItems
}





// //double click 이벤트는 dblclick
// deleteEl.addEventListener('dblclick', () => {
//     localStorage.clear()
//     myLeads = ""
//     ulEl.innerHTML = ""
//     console.log(myLeads)
// })

// inputBtn.addEventListener('click', () => {
//     myLeads.push(inputEl.value)
//     inputEl.value = ""
// //save input 버튼을 클릭하면 input의 value를
// //myLeads 배열에 push하고
// //renderLeads함수 호출
//     localStorage.setItem("myLeads", JSON.stringify(myLeads))
//     render(myLeads);
// })



// containerEl.innerHTML = "<button onclick='buy()'>buy!</button>"

// function buy () {
//     containerEl.innerHTML += "<p>Thank you for buying</p>"
//     console.log(containerEl)
// }

//template strings/literals

// const recipient = "James"
// const sender = "eunjeong"

// const email = `Hey ${recipient}! 

// How is it going? 

// Cheers ${sender}`

// console.log(email)

// let myLeads =`["www.naver.com"]` // ``을 사용해서 문자열로.

// myLeads = JSON.parse(myLeads)
// // string -> array
// myLeads.push("www.daum.net")
// //push
// myLeads = JSON.stringify(myLeads)
// console.log(typeof myLeads)

// const credits = 0

// if ( credits > 0 ) {
//     console.log("welcome")
// } else {
//     console.log("sorry")
// }

// template literals
// const welcomeEl = document.getElementById('welcome-el')

// function greetUser(greeting, name, imoji) {
//     welcomeEl.textContent = `${greeting}, ${name} ${imoji}`
// }

// greetUser("nice to meet you", "eunjeong", "🎈")



// const welcomeEl = document.getElementById('welcome-el')
//                     //parameter 매개변수
// function greetUser(num, num2) {
//     return num + num2
// }
//                     //arguments 인자
//                     //매개변수에 들어가는 값
// console.log(greetUser(3 , 4))
// console.log(greetUser(9 , 102))

                //parameter 매개변수
// function getFirst(arr) {
//     return arr[0]
// }

//             //arguments 인자
// let a = getFirst(["apple","orange", "clock"])
// console.log(a)

// const player = "Per"
// const opponent = "Nick"
// const game = "Amazing"

// let points = 0
// let hasWon = false

// //Playing the game
// points += 100
// hasWon = false

// if(hasWon) {
//     console.log(`${player} got ${points} points and won the ${game} game!`)
// } else {
//     console.log(`The winner is ${opponent} !  ${player} lost the game`)
// }

// let myCourses = ["Animation", "UI Design", "Clean Code"]

//                     //parameter 매개변수
// function arrFunction (arr) {
//      for( let i = 0; i < arr.length; i++) {
//          console.log(arr[i])
//      }
// }

// arrFunction(myCourses)
//        //argument(인자)로 myCourses 배열을 넣는다

// localStorage.setItem("practice", "Saving to localStorage")
// let storage = localStorage.getItem("practice")
// console.log(storage)

// let data = [
//     {
//         player:"Jane",
//         score: 52
//     },
//     {
//         player: "Tim",
//         score: 100
//     }
// ]

// const scBtn = document.getElementById('log-btn')

// scBtn.addEventListener('click', () => {
//     console.log(data[0].score) 
// })


// function generateSentence(desc,arr) {
//     return `The ${arr.length} ${desc} are ${arr}` 
// }

// console.log(generateSentence("largest countries", ["China", "India", "USA"]))

// console.log(generateSentence("best fruits", ["Apples", "Bananas"]))





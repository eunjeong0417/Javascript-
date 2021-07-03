// let inputBtn = document.getElementById('input-btn')
// let myLeads = []
// const inputEl = document.getElementById('input-el')
// const ulEl = document.getElementById('ul-el')
// const deleteEl = document.getElementById('delete-btn')
// let listItems = ""
// // localStorage.setItem("myLeads", "www.naver.com")
// // console.log(localStorage.getItem("myLeads"))
// const obj = JSON.parse(localStorage.getItem("myLeads"))

// if (obj) {
//     myLeads = obj 
//     render (myLeads)
// }
// //parameter로 myLeads를 render함수에 전달
// console.log(myLeads)

// //template literal
// function render (leades) {
//     let listItems = ""
//     for( let i = 0; i < leades.length; i++) {
//          listItems += `
//          <li>
//                 <a target='_blank'
//                     href='${leades[i]}'>
//                 ${leades[i]}
//             </a>
//          </li>
//          `
//     }
//     ulEl.innerHTML = listItems
// }





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

//template literals
const welcomeEl = document.getElementById('welcome-el')

function greetUser(greeting, name, imoji) {
    welcomeEl.textContent = `${greeting}, ${name} ${imoji}`
}

greetUser("nice to meet you", "eunjeong", "🎈")

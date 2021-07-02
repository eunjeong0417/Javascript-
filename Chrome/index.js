let inputBtn = document.getElementById('input-btn')
let myLeads = []
const inputEl = document.getElementById('input-el')
const ulEl = document.getElementById('ul-el')
let deleteEl = document.getElementById('delete-btn')
let listItems = ""


deleteEl.addEventListener('click', () => {
    ulEl.innerHTML = ""
})

inputBtn.addEventListener('click', () => {
    myLeads.push(inputEl.value)
    inputEl.value = ""
//save input 버튼을 클릭하면 input의 value를
//myLeads 배열에 push하고
//renderLeads함수 호출
renderLeads()
})

//template literal
function renderLeads () {
    let listItems = ""
    for( let i = 0; i < myLeads.length; i++) {
        listItems += `
         <li>
                <a target='_blank'
                    href='${myLeads[i]}'>
                ${myLeads[i]}
            </a>
         </li>
         `
        
    }
    ulEl.innerHTML = listItems
}



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
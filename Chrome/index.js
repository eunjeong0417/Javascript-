let inputBtn = document.getElementById('input-btn')
let myLeads = []
const inputEl = document.getElementById('input-el')
const ulEl = document.getElementById('ul-el')




inputBtn.addEventListener('click', () => {
    myLeads.push(inputEl.value)
    renderLeads()
//save input 버튼을 클릭하면 input의 value를
//myLeads 배열에 push하고
//renderLeads함수 호출
})

function renderLeads () {
    let listItems = ""
    for( let i = 0; i < myLeads.length; i++) {
        listItems += "<li>" + myLeads[i] + "</li>"
        ulEl.innerHTML = listItems
        console.log(ulEl)
    }
}



// containerEl.innerHTML = "<button onclick='buy()'>buy!</button>"

// function buy () {
//     containerEl.innerHTML += "<p>Thank you for buying</p>"
//     console.log(containerEl)
// }
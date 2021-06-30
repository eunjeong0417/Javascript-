//set initial count
let count = 0

let span = document.getElementById('value')
//id가 value인 span 태그 가져오기
//let span = document.querySelector('#value)와 동일함

let btns = document.querySelectorAll('.btn');

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e){
        const btnClass = e.currentTarget.classList;
        if(btnClass.contains("decrease")) {
            count = count - 1
            span.textContent = count
        }
        else if (btnClass.contains("reset")) {
            count = 0
            span.textContent = count
        } else {
            count = count + 1
            span.textContent = count
        }
    })
})



// btnDecrease.addEventListener('click', () => {
//     count = count - 1
//     span.textContent = count

// })

// btnReset.addEventListener('click', () => {
//     count = 0
//     span.textContent = count
// })

// btnIncrease.addEventListener('click', () => {
//     count = count + 1
//     span.textContent = count
// })
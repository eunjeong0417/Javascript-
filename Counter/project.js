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
//if(btnClass.contains("decrease"))
            count = count - 1
        }
        else if (btnClass.contains("reset")) {
//else if (btnClass.contains("reset"))
            count = 0
        } else {
            count = count + 1
        }
        if ( count > 0) {
            span.style.color = "green"
        } else if ( count === 0 ) {
            span.style.color = "navy"
        } else {
            span.style.color = "orange"
        }
        span.textContent = count
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
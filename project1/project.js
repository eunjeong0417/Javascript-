let btnDecrease = document.querySelector('.decrease')
let btnReset = document.querySelector('.reset')
let btnIncrease = document.querySelector('.increase')
let span = document.getElementById('value')
let count = 0

btnDecrease.addEventListener('click', () => {
    count = count - 1
    span.textContent = count

})

btnReset.addEventListener('click', () => {
    count = 0
    span.textContent = count
})

btnIncrease.addEventListener('click', () => {
    count = count + 1
    span.textContent = count
})
let inputBtn = document.getElementById('input-btn')
let boxEl = document.getElementById('box')

inputBtn.addEventListener('click', () => {
    console.log("Button clicked!")
})

boxEl.addEventListener('click', () => {
    console.log("I want to open the box")
    document.body.style.backgroundColor = "darkblue";
})
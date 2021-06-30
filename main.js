//document.getElementById('count-el').innerText = 15;

// let count = 0;

// console.log(count)
// console.log(age)

// let myAge = 21;
// let age = myAge;

// let myAge = 21;
// let dogAge = 8;
// let myDogAge = myAge * dogAge ;
// console.log(myDogAge);

// let count = 50
// count = count + 50

// count = count - 75
// count = count + 45
// console.log(count)



// function call () {
//     console.log(42)
// }

// call()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function sum () {
//     console.log( lap1 + lap2 + lap3 )
// }

// sum()

// let lapsCompleted = 0

// function countSum () {
//     lapsCompleted = lapsCompleted + 1
// }

// countSum ()
// countSum ()
// countSum ()
// console.log(lapsCompleted)


//counter app 만들기

const countText = document.getElementById('count-el')
const countBtn = document.getElementById('increment-btn')

let count = 0


countBtn.addEventListener('click', () => {
    countText.innerText = count ++
})

const text = document.querySelector('.content h2');
const popup = document.querySelector('.popup');

text.addEventListener('click', ()=>{
    popup.classList.add('event');
    copyClipboard();
})

const copyClipboard = () => {
    
}
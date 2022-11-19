const box = document.querySelector('.box')
const endPoint = window.innerWidth - 50
let i = 0
box.addEventListener('click', () => {

    let boxInterval = setInterval(()=>{
        i++
        box.style.left = i+'px'
       if (endPoint === i) clearInterval(boxInterval)
        console.log(1)
    },10)

})
const slides = document.querySelectorAll('.module')
const container = document.querySelector('.container')
const left = document.getElementById('left')
const right = document.getElementById('right')
const block = document.querySelector('.colorBlock')

let Numb = 0
let colors = ['gray', 'green', 'blue']

right.addEventListener('click', () => {
    Numb -= 1000
    animate();
})

left.addEventListener('click', () => {
    Numb += 1000
    animate();
})

function animate() {
    const width = -(container.offsetWidth)
    if (Numb > 0) {
        Numb = -(container.offsetWidth - (container.offsetWidth / slides.length))
    } else if (Numb <= width) {
        Numb = 0
    }
    container.style.left = Numb + 'px'
    color(Numb)
}

function color(number) {
    let color
    if (number == 0) {
        color = 0
        
    } else {
        color = (Numb/1000) * (-1)
    }
    block.style.background = colors[color]
}

console.dir(container)
const modules = document.querySelectorAll('.module')
const left = document.getElementById('left')
const right = document.getElementById('right')
let count = 0

function clearClasses(tag, className) {
    tag.forEach(module => {
        module.classList.remove(className)
    });
}

left.addEventListener('click', (clicked) => {
    clearClasses(modules, 'active')
    if (count > 0) {
        modules[--count].classList.add('active')
    } else {
        count = (modules.length - 1)
        modules[count].classList.add('active')}
})

right.addEventListener('click', (clicked) => {
    clearClasses(modules, 'active')
    if (count < (modules.length - 1)) {
        modules[++count].classList.add('active')
    } else {
        count = (modules.length - 1)
        modules[count=0].classList.add('active')}
})
const item = document.querySelector('.item')
const placepolders = document.querySelectorAll('.placeholder')
item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)


for (const placepolder of placepolders) {
    placepolder.addEventListener('dragover', dragover)
    placepolder.addEventListener('dragenter', dragenter)
    placepolder.addEventListener('dragleave', dragleave)
    placepolder.addEventListener('drop', drop)
}

function dragstart(event) {
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'), 0)
}
function dragend(event) {
    event.target.className = 'item'
}
function dragover(event) {
    event.preventDefauft()
}
function dragenter(event) {
    event.target.classList.add('hovered')
}
function dragleave(event) {
    event.target.classList.remove('hovered')
}
function drop(event) {
    event.target.classList.remove('hovered')
    event.target.append(item)
}
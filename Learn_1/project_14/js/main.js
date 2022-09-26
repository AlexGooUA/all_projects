const slides = document.querySelectorAll('.cards')

for (const cards of slides) {
    cards.addEventListener('click', () => {

        clearActiveClasses()

        cards.classList.add('active')
    })
}
function clearActiveClasses() {
    slides.forEach((cards) => {
        cards.classList.remove('active')
    })
}
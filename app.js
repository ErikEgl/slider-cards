

function slidesPlugin(activeSlide = (Math.floor(Math.random() * 4) + 1)) {
    const slides = document.querySelectorAll('.slide')

    slides[activeSlide].classList.add('active')
    
    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearActiveFunctions()
            slide.classList.add('active')
        })
    }
    function clearActiveFunctions() {
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
    }
}

slidesPlugin()


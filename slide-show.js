
/////// Debut de la gestion du carrousel
const slides = document.querySelectorAll('#slides .slide')
let currentSlide = 0

const nextSlide = () => {
  slides[currentSlide].className = 'slide'
  currentSlide = (currentSlide + 1) % slides.length
  slides[currentSlide].className = 'slide showing'
}

setInterval(nextSlide, 3500)

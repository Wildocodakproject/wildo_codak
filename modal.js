
/////// Debut de la gestion of la modal
const modal = document.getElementById('myModal')
const modalImage = document.getElementById('modal-image')
const captionText = document.getElementById('caption')
const imageList = document.getElementsByClassName('image-with-modal')
const btnClose = document.getElementById('modal-close')

const openModal = (event) => {
  modal.style.display = '' //remove display none
  modalImage.src = event.target.src
  captionText.textContent = event.target.alt
}

const closeModal = () => modal.style.display = 'none'

btnClose.addEventListener('click', closeModal)

for (const image of imageList) {
  image.addEventListener('click', openModal)
}

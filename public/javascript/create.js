const ratingText = document.querySelector('.rating_number')
const ratingRanger = document.querySelector('.custom-range')
const imageInput = document.querySelector('.image_input')
const imagShow = document.querySelector('.image_show')
ratingRanger.addEventListener('input', () => {
  ratingText.value = ratingRanger.value + ' 顆星'
})
imageInput.addEventListener('input', () => {
  imagShow.src = `${imageInput.value}`
  imagShow.parentElement.classList.remove('d-none')
})

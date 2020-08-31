const restaurantContainer = document.querySelector('.card-columns')

restaurantContainer.addEventListener('click', (e) => {
  if (e.target.matches('.delete__restaurant__btn')) {
    const id = e.target.dataset.id
    document.delete_form.action = `./restaurant/${id}/delete`
  }
})

const ratingText = document.querySelector('.rating_number')
const ratingRanger = document.querySelector('.custom-range')

ratingRanger.addEventListener('input', () => {
  ratingText.value = ratingRanger.value + ' 顆星'
})

const imageInput = document.querySelector('.image_input')
const imagShow = document.querySelector('.image_show')

imageInput.addEventListener('input', () => {
  imagShow.src = `${imageInput.value}`
  imagShow.parentElement.classList.remove('d-none')
})

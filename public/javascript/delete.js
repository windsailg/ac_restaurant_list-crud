const restaurantContainer = document.querySelector('.card-columns')
restaurantContainer.addEventListener('click', (e) => {
  if (e.target.matches('.delete__restaurant__btn')) {
    const id = e.target.dataset.id
    document.delete_form.action = `./restaurant/${id}/delete`
  }
})

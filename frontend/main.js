const bodyClasslist = document.body.classList
const buttonContainers = document.querySelectorAll('.button-container')
const toggleThemeButton = document.querySelector('#toggle-theme-button')
const toggleAlignButton = document.querySelector('#toggle-align-button')
toggleThemeButton.addEventListener('click', () => {
  bodyClasslist.toggle('dark-theme')
  bodyClasslist.toggle('light-theme')
})
toggleAlignButton.addEventListener('click', () => {
  buttonContainers.forEach((element) => {
    element.classList.toggle('align-right')
  })
})

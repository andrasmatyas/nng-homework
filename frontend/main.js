let apiSelected = 'user'
const formFields = {
  user: [{ label: 'User ID', field: 'input', type: 'text', key: 'userId' }],
  image: [
    { label: 'Image Name', field: 'input', type: 'text', key: 'imageName' },
  ],
  fibonacci: [
    {
      label: 'Fibonacci Number',
      field: 'input',
      type: 'number',
      key: 'fibNumber',
    },
  ],
  matrix: [
    { label: 'First Matrix', field: 'textarea', key: 'matrix1' },
    { label: 'Second Matrix', field: 'textarea', key: 'matrix2' },
  ],
}
const bodyClasslist = document.body.classList
const apiSelector = document.querySelector('#api-selector')
const inputForm = document.querySelector('#input-form')
const preData = document.querySelector('pre')
const buttonContainers = document.querySelectorAll('.button-container')
const toggleThemeButton = document.querySelector('#toggle-theme-button')
const toggleAlignButton = document.querySelector('#toggle-align-button')
const runButton = document.querySelector('#run-button')
apiSelector.addEventListener('change', (event) => {
  apiSelected = event.target.value
  generateForm()
})
toggleThemeButton.addEventListener('click', () => {
  bodyClasslist.toggle('dark-theme')
  bodyClasslist.toggle('light-theme')
})
toggleAlignButton.addEventListener('click', () => {
  buttonContainers.forEach((element) => {
    element.classList.toggle('align-right')
  })
})
runButton.addEventListener('click', apiCall)
function generateForm() {
  while (inputForm.firstChild) {
    inputForm.removeChild(inputForm.firstChild)
  }
  formFields[apiSelected].forEach((obj) => {
    const label = document.createElement('label')
    label.setAttribute('for', obj.key)
    label.append(obj.label)
    inputForm.appendChild(label)
    const input = document.createElement(obj.field)
    if (obj.field === 'input') {
      input.setAttribute('type', obj.type)
    }
    input.setAttribute('name', obj.key)
    input.setAttribute('id', obj.key)
    inputForm.appendChild(input)
  })
}
async function apiCall() {
  let body = {}
  formFields[apiSelected].forEach((obj) => {
    const input = document.querySelector(`#${obj.key}`)
    body[obj.key] = input.value
  })
  const result = await fetch(`/api/${apiSelected}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  if (result.status === 200) {
    const data = await result.json()
    preData.replaceChildren(JSON.stringify(data, null, 2))
  } else {
    preData.replaceChildren(`${result.status} ${result.statusText}`)
  }
}

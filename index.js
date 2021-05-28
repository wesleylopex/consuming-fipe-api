window.addEventListener('load', function () {
  onFormSubmit()
})

function onFormSubmit () {
  const form = document.querySelector('form')

  form.addEventListener('submit', async function (event) {
    event.preventDefault()

    const uri = document.querySelector('[name=uri]')
    const response = await getResponse(uri.value)

    showResponse(response)
  })
}

async function getResponse (uri) {
  const response = await fetch(uri, {
    method: 'GET'
  }).then(response => response.json())

  return response
}

function showResponse (response) {
  const responseElement = document.querySelector('#response-data')

  responseElement.innerHTML = ''

  response.forEach(el => {
    const element = document.createElement('div')
    
    element.classList.add('bg-white')
    element.classList.add('rounded-sm')
    element.classList.add('p-4')
    element.classList.add('shadow-md')

    for (const data in el) {
      const dataElement = document.createElement('p')
      dataElement.innerText = `${data}: ${el[data]}`

      element.appendChild(dataElement)
    }

    responseElement.appendChild(element)
  })

  // responseElement.innerHTML = JSON.stringify(response, undefined, 2)
}

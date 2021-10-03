// fetch('https://puzzle.mead.io/puzzle').then((response) => {
//   response.json().then((data) => {
//     console.log(data)
//   })
// })

fetch('/weather?address=' + location).then((response) => {
  response.json().then((data) => {
    if (data.error) {
      console.log(data.error)
    } else {
      console.log(data.forecastdata)
      console.log(data.place)
    }
  })
})

const weatherform = document.querySelector('form')
const search = document.querySelector('input')

const message1 = document.querySelector('#message1')
const message2 = document.querySelector('#message2')

weatherform.addEventListener('submit', (e) => {
  e.preventDefault()

  const location = search.value

  message1.textContent = 'Loading....'
  message2.textContent = ''
  fetch('/weather?address=' + location).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        message1.textContent = '' + data.error
        message2.textContent = ''
        console.log(data.error)
      } else {
        message1.textContent = '' + data.place
        message2.textContent = '' + data.forecastdata
        console.log(data.forecastdata)
        console.log(data.place)
      }
    })
  })

  console.log(location)
})

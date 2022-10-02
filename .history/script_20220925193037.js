const main = document.getElementById('main')
const form = document.getElementById('form')
const avatar = document.getElementById('avatar')
const search = document.getElementById('search')

const urlUsuario = 'https://api.github.com/users/';



  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 1 Create usercard            */
  /* -------------------------------------------------------------------------- */


fetch("https://api.github.com/users/jeraldinnemg")
.then(response => response.json())
.then(data => {
  console.log(data) // Prints result from `response.json()` in getRequest
  avatar.setAttribute("src", data.avatar_url)
})
.catch(error => console.error(error))

const main = document.getElementById('main')
const form = document.getElementById('form')
const avatar = document.getElementById('avatar')
const search = document.getElementById('search')

const urlUsuario = 'https://api.github.com/orgs/nodejs'';



  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 1 Create usercard            */
  /* -------------------------------------------------------------------------- */

function getAvatar() {
    fetch("https://api.github.com/orgs/nodejs'")
    .then(response => response.json())
    .then(data => {
      console.log(data) // Prints result from `response.json()` in getRequest
      avatar.setAttribute("src", data.avatar_url)
    })
    .catch(error => {
        if(error.response.status == 404) {
            createErrorCard('No profile with this username')
        }
    })
}



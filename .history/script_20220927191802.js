
const main = document.getElementById('main')
const form = document.getElementById('form')
const username=document.getElementById('username').value;
const avatar = document.getElementById('avatar')
const search = document.getElementById('search')

const urlUsuario = `https://api.github.com/users/jeraldinnemg`;

  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 1 Create usercard            */
  /* -------------------------------------------------------------------------- */

function getAvatar() {
    fetch(urlUsuario)
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
getAvatar();

function getRepos(){
  fetch(urlUsuario + '/repos?sort=created')
  .then(response => response.json())
  .then(data => {
    console.log(data) // Prints result from `response.json()` in getRequest
    avatar.setAttribute("src", data.avatar_url)
  })
  .catch(error => {
    createErrorCard('Problem fetching repos')
  })
}

getRepos();


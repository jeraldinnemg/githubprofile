// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
    auth: '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'
  })
  
  await octokit.request('PATCH /user', {})

const main = document.getElementById('main')
const form = document.getElementById('form')
const avatar = document.getElementById('avatar')
const search = document.getElementById('search')

const urlUsuario = 'https://api.github.com/users/';



  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 1 Create usercard            */
  /* -------------------------------------------------------------------------- */

function getAvatar() {
    fetch("https://api.github.com/user")
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


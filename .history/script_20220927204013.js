
const main = document.getElementById('#main')
const form = document.getElementById('#form')
const username=document.getElementById('#username').value;
const search = document.getElementById('#search')

const urlUsuario = `https://api.github.com/users/jeraldinnemg`;

  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 1 Create usercard            */
  /* -------------------------------------------------------------------------- */

function getUser() {
  search.addEventListener('click', function() {
    fetch(urlUsuario)
    .then(response => response.json())
    .then(data => {
      console.log(data) // Prints result from `response.json()` in getRequest
      createUserCard(data);
      console.log('ejecucion fectch')
    })
    .catch(error => {
        if(error.response.status == 404) {
            createErrorCard('No profile with this username')
        }
    })
  })
}


function createUserCard(user){
  const userID = user.name || user.login;
  const userBio = user.bio ? `<p>${user.bio}</p>` : '';
  const cardHTML = `
                <div class="card">
                <div class="profile-image">
                    <img src="${user.avatar_url}" alt="${user.name}" id="avatar">
                </div>
                <div class="profile-content">
                    <h1>${userID}</h1>
                    <p>  ${userBio} </p>
                        <ul class="user-statistics">
                            <li>${user.followers} <strong>followers</strong></li> 
                            <li>${user.following} <strong>following</strong></li> 
                            <li>${user.public_repos} <strong>repos</strong></li> 
                        </ul>
                    <div class="user-repos">
                    </div>
                </div>
            </div>
  `
  main.innerHTML = cardHTML;
}


const main = document.getElementById('main')
const form = document.getElementById('form')
const username=document.getElementById('username').value;
const avatar = document.getElementById('avatar')
const search = document.getElementById('search')

const urlUsuario = `https://api.github.com/users/jeraldinnemg`;

  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 1 Create usercard            */
  /* -------------------------------------------------------------------------- */

function getUser() {
    fetch(urlUsuario)
    .then(response => response.json())
    .then(data => {
      createUserCard(data)
        getRepos()
    })
    .catch(error => {
        if(error.response.status == 404) {
            createErrorCard('No profile with this username')
        }
    })
}


function getRepos(){
  fetch(urlUsuario + '/repos?sort=created')
  .then(response => response.json())
  .then(data => {
    console.log(data) // Prints result from `response.json()` in getRequest
    addReposToCard(data)
  })
  .catch(error => {
    createErrorCard('Problem fetching repos')
  })
}

function createUserCard(user){
  const userID = user.name || user.login
  const userBio = user.bio ? `<p>${user.bio}</p>` : ''
    const cardHTML = `
    <div class="card">
    <div class="profile-image">
        <img src="${user.avatar_url}" alt="${user.name}" id="avatar">
    </div>
    <div class="profile-content">
        <h1>Jeraldinnemg</h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <ul class="user-statistics">
                <li>300 <strong>followers</strong></li> 
                <li>30 <strong>following</strong></li> 
                <li>30 <strong>repos</strong></li> 
            </ul>
        <div class="user-repos">
            <a href="#" class="repo">repo1</a>
            <a href="#" class="repo">repo2</a>
            <a href="#" class="repo">repo3</a>
        </div>
    </div>
</div>
    `
}


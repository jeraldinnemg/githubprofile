
const main = document.querySelector('.main')
const form = document.querySelector('.user-form')

/* -------------------------------------------------------------------------- */
/*                 Funtion Get user                                           */
/* -------------------------------------------------------------------------- */

function getUser(username){
  const urlUsuario = `https://api.github.com/users/${username}`;
  fetch(urlUsuario)
  .then(response => response.json())
  .then(data => {
 //   console.log(data)  Prints result from `response.json()` in getRequest
    createUserCard(data);
    getRepos(username);
  })
  .catch(err => {
    if (err.meta.code === 400) {
      console.error('Error')
    }
  })
}

/* -------------------------------------------------------------------------- */
/*                 Funtion Get repos                                           */
/* -------------------------------------------------------------------------- */

function getRepos(username){
  const urlRepo = `https://api.github.com/users/${username}/repos?sort=created`;
  fetch(urlRepo)
  .then(response => response.json())
  .then(data => {
    addReposToCard(data);
  })
  .catch(err => {
    if (err.response === 400) {
      console.log('Error')
    }else {
      console.log('Problem fetching repos')
    }
  })
}

/* -------------------------------------------------------------------------- */
/*                 Funtion Error card                                 */
/* -------------------------------------------------------------------------- */

function createErrorCard(msg) {

  const cardHTML = `
      <div class="card">
          <h1>${msg}</h1>
      </div>
  `
  main.innerHTML = cardHTML
  }


/* -------------------------------------------------------------------------- */
/*                 Funtion Renderize usercard                                 */
/* -------------------------------------------------------------------------- */

function createUserCard(user){
const cardHTML = `
                 <div class="card">
                 <div class="profile-image">
                     <img src="${user.avatar_url}" alt="${user.name}" id="avatar">
                 </div>
                 <div class="profile-content">
                     <h1>${user.name}</h1>
                     <p>${user.bio} </p>
                         <ul class="user-statistics">
                             <li>${user.followers} <strong>followers</strong></li> 
                             <li>${user.following} <strong>following</strong></li> 
                             <li>${user.public_repos} <strong>repos</strong></li> 
                         </ul>
                     <div class="repos" id="repos">
                     </div>
                 </div>
             </div>
   `
   main.innerHTML = cardHTML;
}




/* -------------------------------------------------------------------------- */
/*                 Funtion Add repos                               */
/* -------------------------------------------------------------------------- */

function addReposToCard(repos) {
  const reposEl = document.querySelector('.repos')
  repos
      .slice(0, 5)
      .forEach(repo => {
          const repoEl = document.createElement('a')
          repoEl.classList.add('repo')
          repoEl.href = repo.html_url
          repoEl.target = '_blank'
          repoEl.innerText = repo.name

          reposEl.appendChild(repoEl)
      })
}

/* -------------------------------------------------------------------------- */
/*                 Funtion getUser github                                */
/* -------------------------------------------------------------------------- */

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const user = search.value;
  if(user) {
    getUser(user)
    search.value = ''
  }
});


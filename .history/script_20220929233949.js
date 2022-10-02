
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
    console.log(data) // Prints result from `response.json()` in getRequest
    createUserCard(data)
    getRepos(username)
  })
  .catch(error => {
      if(error.response.status == 404) {
          createErrorCard('No profile with this username');
      }
  })

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
                     <p>  ${user.bio} </p>
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

/* -------------------------------------------------------------------------- */
/*                 FUNCIÓN 1 Create usercard                                  */
/* -------------------------------------------------------------------------- */

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const user = search.value;
    if(user) {
      getUser(user)
      search.value = ''
    }
});
